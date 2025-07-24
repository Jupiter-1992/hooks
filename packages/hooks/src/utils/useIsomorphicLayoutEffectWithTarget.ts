import type { DependencyList, EffectCallback } from 'react';
import type { BasicTarget } from './domTarget';
import isBrowser from './isBrowser';
import useEffectWithTarget from './useEffectWithTarget';
import useLayoutEffectWithTarget from './useLayoutEffectWithTarget';

const useIsomorphicLayoutEffectWithTarget: (
  effect: EffectCallback,
  deps: DependencyList,
  target: BasicTarget<any> | BasicTarget<any>[],
) => void = isBrowser ? useLayoutEffectWithTarget : useEffectWithTarget;

export default useIsomorphicLayoutEffectWithTarget;
