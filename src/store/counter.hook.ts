import { CounterStateHook } from './models';
import { useCounterHook as ReduxUseCounterHook } from './redux';

export const useCounter: CounterStateHook = ReduxUseCounterHook;
