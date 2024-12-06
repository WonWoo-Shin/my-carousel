export const sliceArray = (arr: any[], start: number, end: number) => {
  const length = arr.length;

  const startIndex = start < 0 ? length + start : start;
  const endIndex = end > length ? end - length : end;

  if (startIndex >= endIndex) {
    return arr.slice(startIndex).concat(arr.slice(0, endIndex));
  } else {
    return arr.slice(startIndex, endIndex);
  }
};
