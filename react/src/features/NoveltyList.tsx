import { useState } from "react";
import { novelties, type Novelty } from "../data/novelties";
import { NoveltyCard } from "../components/ui/NoveltyCard";
import { Button } from "../components/ui/Button";
import { NoveltyFilter } from "./NoveltyFilter";
import { QrScan } from "./QrScan";
import { NoveltyDetail } from "./NoveltyDetail";
import { UsageGuide } from "./UsageGuide";
import {
  getSavedNoveltyIds,
  resetSavedNoveltyIds,
} from "../utils/localStorage";

type Filter = {
  keyword: string;
  eventName: string;
};

export const NoveltyList = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);
  const [selectedNovelty, setSelectedNovelty] = useState<Novelty | null>(null);
  const [filter, setFilter] = useState<Filter>({
    keyword: "",
    eventName: "",
  });

  const hasFilter = filter.keyword !== "" || filter.eventName !== "";

  const savedIds = getSavedNoveltyIds();

  const savedNovelties = novelties.filter((n) => savedIds.includes(n.id));

  // フィルタ適用ロジック
  const filtered = savedNovelties.filter((n) => {
    const matchKeyword =
      filter.keyword === "" || n.companyName.includes(filter.keyword);

    const matchEvent =
      filter.eventName === "" || n.eventName === filter.eventName;

    return matchKeyword && matchEvent;
  });

  if (scanOpen) {
    return <QrScan />;
  }

  if (selectedNovelty) {
    return (
      <NoveltyDetail
        companyName={selectedNovelty.companyName}
        eventName={selectedNovelty.eventName}
        pdfUrl={selectedNovelty.pdfUrl}
        onBack={() => setSelectedNovelty(null)}
      />
    );
  }

  return (
    <div>
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Novelty Box</div>

        <div className="flex gap-2">
          {/* 解除ボタン */}
          {hasFilter && (
            <Button
              text="解除"
              onClick={() =>
                setFilter({
                  keyword: "",
                  eventName: "",
                })
              }
            />
          )}

          {/* フィルタボタン */}
          <Button text="フィルタ" onClick={() => setFilterOpen(!filterOpen)} />
        </div>
      </div>

      {/* フィルタ */}
      {filterOpen && (
        <NoveltyFilter
          savedNovelties={savedNovelties}
          onClose={() => setFilterOpen(false)}
          onApply={(f) => {
            setFilter(f);
            setFilterOpen(false);
          }}
        />
      )}

      {/* 一覧 */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          該当するノベルティがありません
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNovelty(item)}
              className="cursor-pointer"
            >
              <NoveltyCard novelty={item} />
            </div>
          ))}
        </div>
      )}

      {/* サービス使い方ガイド */}
<UsageGuide />

      {/* 開発用 */}
      <div className="mt-6">
        <Button
          text="開発用: localStorageをリセット"
          onClick={() => {
            resetSavedNoveltyIds();
            window.location.reload();
          }}
        />
      </div>

      {/* QR読取ボタン */}
      <div className="fixed bottom-6 right-6">
        <Button text="QR" onClick={() => setScanOpen(true)} />
      </div>
    </div>
  );
};
