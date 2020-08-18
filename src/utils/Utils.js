export const getArrayFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
}

export const saveArrayToLocalStorage = (key, arr) => {
    localStorage.setItem(key, JSON.stringify(arr));
}