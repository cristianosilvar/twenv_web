const formatReal = (value: number): string => {
  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatoMoeda.format(value).replace('R$', '').trim();
};

export default formatReal;
