import { useState } from "react";
import type { Novelty } from "../data/novelties";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";

type Props = {
  onClose: () => void;
  onApply: (filter: { keyword: string; eventName: string }) => void;
  savedNovelties: Novelty[];
};

export const NoveltyFilter = ({ onClose, onApply, savedNovelties }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [eventName, setEventName] = useState("");

  // event一覧をdataから生成（重複排除）
  const eventOptions = Array.from(
    new Set(savedNovelties.map((n) => n.eventName)),
  ).map((event) => ({
    label: event,
    value: event,
  }));

  return (
    <div className="border p-3 space-y-3">
      {/* 企業名 or キーワード */}
      <div>
        <div className="text-xs mb-1">企業名検索</div>
        <Input value={keyword} placeholder="OpenAI..." onChange={setKeyword} />
      </div>

      {/* イベント選択 */}
      <div>
        <div className="text-xs mb-1">イベント名</div>
        <Select
          value={eventName}
          options={eventOptions}
          onChange={setEventName}
        />
      </div>

      {/* ボタン群 */}
      <div className="flex gap-2 justify-end">
        <Button text="戻る" onClick={onClose} />

        <Button
          text="確定"
          onClick={() =>
            onApply({
              keyword,
              eventName,
            })
          }
        />
      </div>
    </div>
  );
};
