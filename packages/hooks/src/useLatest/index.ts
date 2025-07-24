import { useRef } from 'react';
import type { MutableRefObject } from 'react';

function useLatest<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;
