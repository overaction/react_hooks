export const useTabs = (array, index) => {
    const [currentIndex, setCurrentIndex] = useState(index);
    return {
    currentContent: array[currentIndex],
    onchange: setCurrentIndex
    }
}