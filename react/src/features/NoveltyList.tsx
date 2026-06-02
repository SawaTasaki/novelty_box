import { useState } from "react";
import { novelties } from "../data/novelties";
import { NoveltyCard } from "../components/ui/NoveltyCard";
import { Button } from "../components/ui/Button";
import { NoveltyFilter } from "./NoveltyFilter";
import { QrScan } from "./QrScan";

type Filter = {
  keyword: string;
  eventName: string;
};

export const NoveltyList = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [scanOpen, setScanOpen] =
  useState(false);

  const [filter, setFilter] = useState<Filter>({
    keyword: "",
    eventName: "",
  });

  // フィルタ適用ロジック
  const filtered = novelties.filter((n) => {
    const matchKeyword =
      filter.keyword === "" || n.companyName.includes(filter.keyword);

    const matchEvent =
      filter.eventName === "" || n.eventName === filter.eventName;

    return matchKeyword && matchEvent;
  });

  if (scanOpen) {
  return (
    <QrScan />
  );
}

  return (
    
    <div>
      
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Novelty Box</div>

        <div className="flex gap-2">
          {/* 解除ボタン */}
          <Button
            text="解除"
            onClick={() =>
              setFilter({
                keyword: "",
                eventName: "",
              })
            }
          />

          {/* フィルタボタン */}
          <Button text="フィルタ" onClick={() => setFilterOpen(!filterOpen)} />
        </div>
      </div>

      {/* フィルタ */}
      {filterOpen && (
        <NoveltyFilter
          onClose={() => setFilterOpen(false)}
          onApply={(f) => {
            setFilter(f);
            setFilterOpen(false);
          }}
        />
      )}

      {/* 一覧 */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((item) => (
          <NoveltyCard key={item.id} novelty={item} />
        ))}
      </div>

      {/* QR読取ボタン */}
<div className="fixed bottom-6 right-6">
  <Button
  text="QR"
  onClick={() => setScanOpen(true)}
/>
</div>
    </div>
    
  );
};
