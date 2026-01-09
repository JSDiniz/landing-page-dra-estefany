export function phoneMask(value: string) {
    return value
      .replace(/\D/g, "")              // remove tudo que não é número
      .replace(/^(\d{2})(\d)/, "($1) $2") // (92) 9
      .replace(/(\d{4})(\d)/, "$1-$2")    // 9999-9999
      .slice(0, 15);                    // limite máximo
  }
  