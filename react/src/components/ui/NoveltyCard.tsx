import type { Novelty } from "../../data/novelties";

type Props = {
  novelty: Novelty;
};

export const NoveltyCard = ({ novelty }: Props) => {
  return (
    <div className="aspect-square overflow-hidden rounded-lg border bg-white">
      <div className="h-3/4 bg-gray-200" />

      <div className="h-1/4 p-2">
        <div className="text-sm font-medium truncate">
          {novelty.companyName}
        </div>

        <div className="text-xs text-gray-500 truncate">
          {novelty.eventName}
        </div>
      </div>
    </div>
  );
};
