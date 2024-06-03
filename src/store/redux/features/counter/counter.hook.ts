import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment } from './counter-slice';
import { CounterStateHook } from '../../../models';

export const useCounterHook: CounterStateHook = () => {
    const count = useAppSelector((state) => state.counter.value);

    const dispatch = useAppDispatch();

    const inc = useCallback(() => {
        dispatch(increment());
    }, [dispatch]);

    const dec = useCallback(() => {
        dispatch(decrement());
    }, [dispatch]);

    return {
        count,
        decrement: dec,
        increment: inc,
    };
};
