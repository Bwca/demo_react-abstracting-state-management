import { CounterStateHook } from './models';
import { useCounterHook as ReduxUseCounterHook } from './redux';
import { useCounter as ZustandUseCounterHook } from './zustand';

export const useCounter: CounterStateHook = ZustandUseCounterHook; // || ReduxUseCounterHook;
