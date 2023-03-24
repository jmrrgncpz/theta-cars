import { ChangeEventHandler, useRef, useState } from "react";
import { Car } from "../../../server/types";
import Button from "../Primitives/Button";
import Input from "../Primitives/Input";
import Select from "../Primitives/Select";

export type SearchValue = {
  filter: keyof Car;
  searchTerm: string;
};

type Props = {
  onChange: (value: SearchValue) => void;
};

const FILTERS: { value: keyof Car; label: string }[] = [
  {
    label: "VIN",
    value: "vin",
  },
  {
    label: "Make",
    value: "make",
  },
  {
    label: "Model",
    value: "model",
  },
  {
    label: "Year",
    value: "year",
  },
];

const Search = ({ onChange }: Props) => {
  const [filter, setFilter] = useState<keyof Car>("vin");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilterChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilter(event.currentTarget.value as keyof Car);
  };

  const handleSearchTermChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleSearchButtonPress = () => {
    onChange({
      filter,
      searchTerm,
    });
  };

  return (
    <div>
      <Select className="rounded-r-none h-full" onChange={handleFilterChange}>
        {FILTERS.map((f) => (
          <option key={f.value} value={f.value}>{f.label}</option>
        ))}
      </Select>
      <Input
        onChange={handleSearchTermChange}
        className="rounded-l-none h-full flex-1"
        placeholder="Looking for something?"
      />
      <Button className="ml-4" onClick={handleSearchButtonPress}>
        Search
      </Button>
    </div>
  );
};

export default Search;
