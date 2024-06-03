import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { useCounter } from './counter.hook';
import { StateProvider } from './state.provider';

describe('Tests for the counter state', () => {
    test('should increment counter', () => {
        const { result } = renderHook(useCounter, { wrapper: StateProvider });

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    test('should decrement counter', () => {
        const { result } = renderHook(useCounter, { wrapper: StateProvider });
        const current = result.current.count;

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(current - 1);
    });
});
