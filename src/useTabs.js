export const useTabs = (array, index) => {
    const [currentIndex, setCurrentIndex] = useState(index);
    if(!array || !Array.isArray(array)) {
    return;
    }
    return {
    currentContent: array[currentIndex],
    onchange: setCurrentIndex
    }
}