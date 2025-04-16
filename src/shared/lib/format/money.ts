type FormatMoneyParams = {
  value: number;
  locale?: Intl.LocalesArgument;
  options?: Intl.NumberFormatOptions;
};

export const formatMoney = ({
  value,
  locale = 'pt-BR',
  options = {
    style: 'currency',
    currency: 'BRL',
  },
}: FormatMoneyParams) => {
  return new Intl.NumberFormat(locale, options).format(value);
};
