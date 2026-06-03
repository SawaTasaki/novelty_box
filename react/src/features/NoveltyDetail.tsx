type Props = {
  companyName: string;
  eventName: string;
  pdfUrl: string;
};

export const NoveltyDetail = ({
  companyName,
  eventName,
  pdfUrl,
}: Props) => {
  return (
    <div>
      <div className="mb-4">
        <div className="text-xl font-bold">
          {companyName}
        </div>

        <div className="text-sm text-gray-500">
          {eventName}
        </div>
      </div>

      <iframe
        src={pdfUrl}
        className="w-full h-[80vh] border"
      />
    </div>
  );
};