import Input from "../Primitives/Input";
import Select from "../Primitives/Select";

type Props = {
  onChange: (value: { filter: string; searchTerm: string }) => void;
};

const FILTERS: { value: string; label: string }[] = [
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
  return (
    <div>
      <Select className="rounded-r-none h-full">
        {FILTERS.map((f) => (
          <option value={f.value}>{f.label}</option>
        ))}
      </Select>
      <Input className="rounded-l-none h-full" placeholder="Search" />
    </div>
  );
};

export default Search;
