import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Button } from "../components/ui/Button";

type Props = {
  onBack: () => void;
};

export const QrScan = ({ onBack }: Props) => {
  useEffect(() => {
    console.log("QR START");
    Html5Qrcode.getCameras()
    .then((devices) => {
      console.log("CAMERAS", devices);
    })
    .catch(console.error);
    const qrCodeScanner =
  new Html5Qrcode(
    "reader",
    {
      verbose: true,
    }
  );

    Html5Qrcode.getCameras()
  .then((devices) => {
    console.log("CAMERAS", devices);

    if (devices.length === 0) {
      console.error("カメラなし");
      return;
    }

    return qrCodeScanner.start(
      devices[0].id,
      {
        fps: 10,
      },
      (decodedText) => {
        console.log("QR", decodedText);
      },
      () => {}
    );
  })
  .then(() => {
    console.log("SCAN STARTED");
  })
  .catch((err) => {
    console.error("START ERROR", err);
  });

   return () => {
  try {
    qrCodeScanner.clear();
  } catch {}
};
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4 text-lg font-semibold">
        QR読取
      </div>

      <div
  id="reader"
  className="border mb-4 h-96 overflow-hidden"
/>

      <Button
        text="戻る"
        onClick={onBack}
      />
    </div>
  );
};