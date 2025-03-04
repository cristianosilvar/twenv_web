type typeFormats = 'default' | 'dayAndMonth' | 'monthName' | 'dateInput';

const monthNames = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

export const formatDate = (
  value: Date,
  type: typeFormats = 'default',
): string => {
  const date = new Date(value);

  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  let formatDate = '';

  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = (month + 1).toString().padStart(2, '0');

  switch (type) {
    case 'default':
      formatDate = `${formattedDay} de ${formattedMonth}, ${year}`;
      break;
    case 'monthName':
      formatDate = `${formattedDay} de ${monthNames[month]}, ${year}`;
      break;
    case 'dayAndMonth':
      formatDate = `${formattedDay}/${formattedMonth}`;
      break;
    case 'dateInput':
      formatDate = `${year}-${formattedMonth}-${formattedDay}`;
      break;
    default:
      break;
  }

  return formatDate;
};
