export default function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
    return '';
  }

  const arrayFromSet = Array.from(xSet);

  if (xStartString === '') return arrayFromSet.join('-');

  const cleanedValues = arrayFromSet
    .filter((item) => item && item.startsWith(xStartString))
    .map((item) => item.replace(xStartString, ''));

  return cleanedValues.join('-');
}
