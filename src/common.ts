export const debounce = (callback: () => void, wait: number) => {
    let timeoutId = null;
    return () => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback();
        }, wait);
    };
}