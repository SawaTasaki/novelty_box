import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export const QrScan = () => {
  const [log, setLog] = useState("init");

  useEffect(() => {
    const qr = new Html5Qrcode("reader");

    Html5Qrcode.getCameras()
      .then((devices) => {
        const cameraId = devices?.[0]?.id;
        if (!cameraId) return;

        qr.start(
          cameraId,
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            // 👉 QRの中身をそのまま表示
            setLog(decodedText);

            qr.stop().catch(() => {});
          },
          () => {}
        );
      })
      .catch((err) => {
        setLog("camera error: " + err.message);
      });

    return () => {
      qr.stop().catch(() => {});
    };
  }, []);

  return (
    <div>
      <div>QR RESULT:</div>
      <div style={{ fontSize: 18, fontWeight: "bold" }}>
        {log}
      </div>

      <div id="reader" style={{ width: "100%", minHeight: 300 }} />
    </div>
  );
};