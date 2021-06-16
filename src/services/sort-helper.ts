interface SortConfig<T> {
  key: keyof T;
  reverse?: boolean;
  caseSensitive?: boolean;
  map?: SortMap<T>;
}

type SortMap<T> = (arg: T[keyof T], arg2: T) => any;

export const sortByKey = <T>(
  ...args: (keyof T | SortConfig<T>)[]
): ((left: T, right: T) => number) => (left: T, right: T) => {
  const key: keyof T = ((args[0] as SortConfig<T>)?.key || args[0]) as keyof T;
  const reverse: boolean = (args[0] as SortConfig<T>)?.reverse || false;
  const caseSensitive: boolean =
    (args[0] as SortConfig<T>)?.caseSensitive || false;
  const map = (args[0] as SortConfig<T>)?.map || null;

  let a: any = left[key];
  let b: any = right[key];

  if (map) {
    a = map(a, left);
    b = map(b, right);
  }

  if (!caseSensitive && typeof a === "string" && typeof b === "string") {
    a = a.toLowerCase();
    b = b.toLowerCase();
  }

  if (a === b) {
    if (args.length === 1) {
      return 0;
    }

    return sortByKey<T>(...args.slice(1))(left, right);
  }

  if (reverse) {
    return a > b ? -1 : 1;
  }

  return a > b ? 1 : -1;
};
