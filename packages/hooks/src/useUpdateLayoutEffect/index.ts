import { useLayoutEffect } from 'react';
import type { DependencyList, EffectCallback } from 'react';
import { createUpdateEffect } from '../createUpdateEffect';

const useUpdateLayoutEffect: (effect: EffectCallback, deps?: DependencyList) => void =
  createUpdateEffect(useLayoutEffect);

export default useUpdateLayoutEffect;
