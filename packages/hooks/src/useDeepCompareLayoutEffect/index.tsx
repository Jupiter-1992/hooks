import { useLayoutEffect } from 'react';
import type { DependencyList, EffectCallback } from 'react';
import { createDeepCompareEffect } from '../createDeepCompareEffect';

const useDeepCompareLayoutEffect: (effect: EffectCallback, deps?: DependencyList) => void =
  createDeepCompareEffect(useLayoutEffect);

export default useDeepCompareLayoutEffect;
