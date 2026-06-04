const KEY = "savedNoveltyIds";

const DEFAULT_IDS = ["1", "3", "7"];

export const getSavedNoveltyIds = (): string[] => {
  const raw = localStorage.getItem(KEY);

  if (!raw) {
    return DEFAULT_IDS;
  }

  return JSON.parse(raw);
};

export const saveNoveltyId = (id: string) => {
  const ids = getSavedNoveltyIds();

  if (ids.includes(id)) {
    return;
  }

  localStorage.setItem(KEY, JSON.stringify([...ids, id]));
};

export const removeNoveltyId = (id: string) => {
  const ids = getSavedNoveltyIds();

  localStorage.setItem(KEY, JSON.stringify(ids.filter((x) => x !== id)));
};

export const resetSavedNoveltyIds = () => {
  localStorage.setItem(KEY, JSON.stringify(DEFAULT_IDS));
};
