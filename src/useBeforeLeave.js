export const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === 'function') {
      document.addEventListener('mouseleave', handle);
      return () => document.removeEventListener('mouseleave', handle);
    }
  }, []);
};
