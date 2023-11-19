type typeFormats = 'default' | 'dayAndMonth'

const monthNames: string[] = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const formatDate = (date: Date, type: typeFormats = 'default'): string => {
  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ]

  let formatDate = ''

  switch (type) {
    case 'default':
      formatDate = `${day} de ${monthNames[month]}, ${year}`
      break
    case 'dayAndMonth':
      formatDate = `${day}/${month + 1} `
      break
    default:
      break
  }

  return formatDate
}

export default formatDate