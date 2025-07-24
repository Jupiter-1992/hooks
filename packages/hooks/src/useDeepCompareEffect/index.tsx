import { useEffect } from 'react';
import type { DependencyList, EffectCallback } from 'react';
import { createDeepCompareEffect } from '../createDeepCompareEffect';

const useDeepCompareEffect: (effect: EffectCallback, deps?: DependencyList) => void =
  createDeepCompareEffect(useEffect);

export default useDeepCompareEffect;
