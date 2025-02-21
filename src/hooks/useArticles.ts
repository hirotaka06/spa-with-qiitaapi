import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useArticles() {
  const { data, error, isLoading } = useSWR(
    "https://qiita.com/api/v2/items",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
