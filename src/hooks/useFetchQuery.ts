import { useQuery } from "@tanstack/react-query";

type QueryFunctionType<T> = () => Promise<T>;

type KeyT = {
  name: string;
  id: number | string;
};

type useFetchT<T> = {
  keyVal: KeyT;
  queryFunc: QueryFunctionType<T>;
};

export const useFetchQuery = <T>({ keyVal, queryFunc }: useFetchT<T>) => {
  return useQuery<T>({
    queryKey: [keyVal.name, keyVal.id],
    queryFn: queryFunc,
  });
};
