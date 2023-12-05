type typeFormats = 'default' | 'dayAndMonth' | 'monthName'

const monthNames: string[] = [
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
]

const formatDate = (date: Date, type: typeFormats = 'default'): string => {
  const newDate = new Date(date)

  const [day, month, year] = [
    newDate.getDate(),
    newDate.getMonth(),
    newDate.getFullYear(),
  ]

  let formatDate = ''

  const formatedDay = day.toString().padStart(2, '0')
  const formatedMonth = (month + 1).toString().padStart(2, '0')

  switch (type) {
    case 'default':
      formatDate = `${formatedDay} de ${formatedMonth}, ${year}`
      break
    case 'monthName':
      formatDate = `${formatedDay} de ${monthNames[month]}, ${year}`
      break
    case 'dayAndMonth':
      formatDate = `${formatedDay}/${formatedMonth}`
      break
    default:
      break
  }

  return formatDate
}

export default formatDate
