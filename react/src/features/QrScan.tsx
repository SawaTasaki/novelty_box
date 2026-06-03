import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export const QrScan = () => {
  const [log, setLog] = useState("init");

  useEffect(() => {
    const qr = new Html5Qrcode("reader");

    Html5Qrcode.getCameras()
      .then((devices) => {
        setLog("devices: " + devices.length);

        const cameraId =
          devices.find((d) =>
            /back|rear|environment|wide/i.test(d.label)
          )?.id || devices[devices.length - 1]?.id || devices[0]?.id;

        setLog("selected camera: " + cameraId);

        qr.start(
          cameraId,
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText) => {
            setLog("QR: " + decodedText);
            const KEY = "savedNoveltyIds";
const getSavedNoveltyIds = (): string[] => {
  const raw = localStorage.getItem(KEY);

  if (!raw) {
    return [];
  }

  return JSON.parse(raw);
};

const saveNoveltyId = (id: string) => {
  const ids = getSavedNoveltyIds();

  if (ids.includes(id)) {
    return;
  }

  localStorage.setItem(
    KEY,
    JSON.stringify([...ids, id])
  );
};
saveNoveltyId(decodedText);
            qr.stop().catch(() => {});
            window.location.reload();
          },
          (_) => {
           //
          }
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
      <div>LOG: {log}</div>

      <div id="reader" style={{ width: "100%", minHeight: 300 }} />
    </div>
  );
};