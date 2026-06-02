import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

type Props = {
  onResult: (text: string) => void;
};

export const QrScan = ({ onResult }: Props) => {
  const [log, setLog] = useState("init");
  const [cameras, setCameras] = useState<any[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  useEffect(() => {
    const qr = new Html5Qrcode("reader");

    setLog("getting cameras...");

    Html5Qrcode.getCameras()
      .then((devices) => {
        setCameras(devices);
        setLog("devices found: " + devices.length);

        if (!devices.length) {
          setLog("no cameras found");
          return;
        }

        // 👉 背面カメラ優先
        const backCamera =
          devices.find((d) =>
            d.label.toLowerCase().includes("back") ||
            d.label.toLowerCase().includes("environment")
          ) || devices[0];

        setSelectedCamera(backCamera.id);

        setLog("selected camera: " + backCamera.label);

        startCamera(backCamera.id, qr);
      })
      .catch((err) => {
        setLog("camera error: " + err.message);
      });

    const startCamera = (cameraId: string, qr: Html5Qrcode) => {
      setLog("starting camera...");

      qr.start(
        cameraId,
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          setLog("QR detected: " + decodedText);

          onResult(decodedText);

          qr.stop().then(() => {
            setLog("stopped");
          });
        },
        () => {}
      ).catch((err) => {
        setLog("start error: " + err.message);
      });
    };

    return () => {
      qr.stop().catch(() => {});
    };
  }, []);

  return (
    <div>
      {/* ログ */}
      <div style={{ marginBottom: 10 }}>
        LOG: {log}
      </div>

      {/* カメラ選択UI */}
      {cameras.length > 1 && (
        <div style={{ marginBottom: 10 }}>
          <div>camera select:</div>
          {cameras.map((cam) => (
            <button
              key={cam.id}
              onClick={() => setSelectedCamera(cam.id)}
              style={{
                marginRight: 5,
                background:
                  cam.id === selectedCamera ? "#ddd" : "#fff",
              }}
            >
              {cam.label || cam.id}
            </button>
          ))}
        </div>
      )}

      {/* QR表示エリア */}
      <div
        id="reader"
        style={{ width: "100%", minHeight: 300 }}
      />
    </div>
  );
};