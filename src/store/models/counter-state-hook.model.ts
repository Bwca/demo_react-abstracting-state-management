import { CounterState } from './counter.state';

export interface CounterStateHook {
    (): CounterState;
}
