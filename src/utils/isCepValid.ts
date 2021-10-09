export default function isCepValid(cep: string) {
  const regex = /[0-9]{5}[\d]{3}/;
  return regex.test(cep);
}
