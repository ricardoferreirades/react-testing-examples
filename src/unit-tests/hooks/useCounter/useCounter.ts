import { useState } from "react";

export interface IUseCounter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export function useCounter(startWith?: number): IUseCounter {
  const [count, setCount] = useState<number>(startWith || 0);
  const increment = () => setCount(() => count + 1);
  const decrement = () => setCount(() => count - 1);
  return { count, increment, decrement };
}
