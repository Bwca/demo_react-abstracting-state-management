import { useCounter } from '../../store';

export const Counter = () => {
    const { increment, decrement, count } = useCounter();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={increment}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    );
};
