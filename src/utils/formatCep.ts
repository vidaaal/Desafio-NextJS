export default function formatCep(cep: string) {
  return cep
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
}
