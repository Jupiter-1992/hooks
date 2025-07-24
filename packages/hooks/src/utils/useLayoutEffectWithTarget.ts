import { useLayoutEffect } from 'react';
import type { DependencyList, EffectCallback } from 'react';
import type { BasicTarget } from './domTarget';
import createEffectWithTarget from './createEffectWithTarget';

const useLayoutEffectWithTarget: (
  effect: EffectCallback,
  deps: DependencyList,
  target: BasicTarget<any> | BasicTarget<any>[],
) => void = createEffectWithTarget(useLayoutEffect);

export default useLayoutEffectWithTarget;
