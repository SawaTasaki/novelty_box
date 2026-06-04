import { Button } from "../components/ui/Button";

type Props = {
  companyName: string;
  eventName: string;
  pdfUrl: string;
  onBack: () => void;
};

export const NoveltyDetail = ({
  companyName,
  eventName,
  pdfUrl,
  onBack,
}: Props) => {
  return (
    <div>
      <div className="mb-4">
        <div className="text-xl font-bold">{companyName}</div>

        <div className="text-sm text-gray-500">{eventName}</div>
      </div>

      <iframe src={pdfUrl} className="w-full h-[80vh] border" />

      <div className="mb-4 flex items-center gap-2">
        <Button text="戻る" onClick={onBack} />
      </div>
    </div>
  );
};
