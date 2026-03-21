export function phoneMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")     // (92) 9
    .replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3") // 9 9459-3970
    .slice(0, 16);
}
