import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export const QrScan = () => {
  const [log, setLog] = useState("init");
  const [cameras, setCameras] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [qr, setQr] = useState<Html5Qrcode | null>(null);

  useEffect(() => {
    const instance = new Html5Qrcode("reader");
    setQr(instance);

    setLog("getting cameras...");

    Html5Qrcode.getCameras()
      .then((devices) => {
        setCameras(devices);

        if (!devices.length) {
          setLog("no camera");
          return;
        }

        // 👉 外カメラ優先ロジック
        const back =
          devices.find((d) =>
            d.label.toLowerCase().includes("back") ||
            d.label.toLowerCase().includes("environment") ||
            d.label.toLowerCase().includes("rear")
          ) || devices[0];

        setLog("selected: " + (back.label || back.id));
        startCamera(instance, back.id);
      })
      .catch((err) => {
        setLog("camera error: " + err.message);
      });

    return () => {
      instance.stop().catch(() => {});
    };
  }, []);

  const startCamera = async (qr: Html5Qrcode, cameraId: string) => {
    try {
      setLog("starting camera...");

      setSelected(cameraId);

      await qr.start(
        cameraId,
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          setLog("QR: " + decodedText);
          qr.stop().catch(() => {});
        },
        () => {}
      );
    } catch (e: any) {
      setLog("start error: " + e.message);
    }
  };

  const switchCamera = (id: string) => {
    if (!qr) return;

    qr.stop().then(() => {
      startCamera(qr, id);
    });
  };

  return (
    <div>
      {/* ログ */}
      <div>LOG: {log}</div>

      {/* カメラ切替UI */}
      {cameras.length > 1 && (
        <div style={{ marginBottom: 10 }}>
          <div>camera select:</div>
          {cameras.map((cam) => (
            <button
              key={cam.id}
              onClick={() => switchCamera(cam.id)}
              style={{
                marginRight: 6,
                background: cam.id === selected ? "#ddd" : "#fff",
              }}
            >
              {cam.label || cam.id}
            </button>
          ))}
        </div>
      )}

      {/* QRエリア */}
      <div id="reader" style={{ width: "100%", minHeight: 300 }} />
    </div>
  );
};