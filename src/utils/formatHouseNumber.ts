export default function formatHouseNumber(houseNumber: string) {
  return houseNumber
    .replace(/\D/g, '');
}
