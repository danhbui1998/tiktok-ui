import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [valueDebounced, setValueDebounced] = useState(value);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setValueDebounced(value);
        }, delay);

        return () => clearTimeout(timeId);
    }, [value, delay]);

    return valueDebounced;
}
export default useDebounce;
