const randomSort = (array: any[]) => {
  return array.sort(() => {
    if (Math.random() > 0.5) {
      return -1;
    }
    return 1;
  });
};

export default randomSort;
