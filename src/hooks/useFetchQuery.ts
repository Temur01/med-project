import { useQuery } from "@tanstack/react-query";

type QueryFunctionType<T> = () => Promise<T>;

type useFetchT<T> = {
  keyName: string;
  queryFunc: QueryFunctionType<T>;
};

export const useFetchQuery = <T>({ keyName, queryFunc }: useFetchT<T>) => {
  return useQuery<T>({
    queryKey: [keyName],
    queryFn: queryFunc,
  });
};
