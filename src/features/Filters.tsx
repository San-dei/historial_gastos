import useData from "@/global/store";
import { ChangeEvent, useState } from "react";

const Filters = () => {
  const { objList } = useData();
  const [newFilter, setNewFilter] = useState<string[]>([]);
  const [searchingText, setSearchingText] = useState<string>("");
  const [searchingDate, setSearchingDate] = useState<string>("");
  const [searchingExpensive, setSearchingExpensive] = useState<string>("");

  const handleSearchingText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchingText(e.target.value);
  };

  const handleSearchingDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchingDate(e.target.value);
  };

  const filter =
    newFilter.length > 1
      ? objList.filter(
          (item) =>
            item.tipoDeGasto?.toLowerCase() == searchingText.toLowerCase()
        )
      : [];
  return (
    <>
      <input
        type="text"
        placeholder="Buscar por categoria"
        value={searchingText}
        onChange={handleSearchingText}
      />
      <input
        type="text"
        placeholder="14-10-2024"
        value={searchingDate}
        onChange={handleSearchingDate}
      />
    </>
  );
};

export default Filters;
