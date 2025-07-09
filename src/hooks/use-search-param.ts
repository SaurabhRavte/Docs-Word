import { parseAsString, useQueryState } from "nuqs";

//URL SEARCH TEXT
export function useSearchParam() {
  return useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
