import { useEffect } from 'react';
import type { DependencyList, EffectCallback } from 'react';
import { createUpdateEffect } from '../createUpdateEffect';

const useUpdateEffect: (effect: EffectCallback, deps?: DependencyList) => void =
  createUpdateEffect(useEffect);

export default useUpdateEffect;
