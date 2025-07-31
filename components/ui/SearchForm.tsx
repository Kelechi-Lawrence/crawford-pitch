import SearchFormReset from "@/components/ui/SearchFormReset";
import { Search } from "lucide-react";

type SearchFormProps = {
  query?: string;
};

export default function SearchForm({ query }: SearchFormProps) {
  return (
    <form action="/" className="search-form" scroll="false">
      <input
        name="query"
        defaultValue={query}
        placeholder="search startup"
        className="search-input flex-1"
      />

      {query && <SearchFormReset />}

      <button type="submit" className="search-btn text-white">
        <Search className="size-5 text-white" />
      </button>
    </form>
  );
}
