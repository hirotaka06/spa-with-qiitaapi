import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useArticleById(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `https://qiita.com/api/v2/items/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
