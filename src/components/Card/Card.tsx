import { Box, HStack, Text, VStack } from "@chakra-ui/layout"

import iconDown from '../../assets/icon-down.svg'
import iconUp from '../../assets/icon-up.svg'

interface Props {
    is: string,
    value: number,
    date?: string,
    description?: string
}

export default function Card({is, value, date, description}: Props) {
    if (is.includes('total')) {
        let icon: string;
        let alt: string;
        return (
            <Box display='flex' width='275px' alignItems='center' gap='1.5rem'
            border='1px solid' height='150px' p='1rem' borderRadius='2xl'
            {...is === 'totalSpending' ? 
            (icon = iconDown,
            alt = 'Icone de Despesas', {
                backgroundColor:'#C5212110', 
                borderColor: '#C52121'}) : 
            (icon = iconUp,
                alt = 'Icone de Ganhos', {
                backgroundColor:'#00832510', 
                borderColor: '#008325'})
            }>

                <img width="50px" src={icon} alt={alt}/>
                <Box display='flex' alignItems='end' gap='.5rem'>
                    <Text fontSize='3xl' fontWeight='medium'>R$ {value},</Text>
                    <Text fontSize='lg' fontWeight='light' mb='1'>00</Text>
                </Box>

            </Box>
        )
    } else {
        return (
            <Box gap='2.5' w='300px' h='108px' bgColor='#ffffff05' 
            border='1px solid #ffffff15' borderRadius='xl' 
            display='flex' flexDirection='column' alignItems='center' justifyContent='center'
            className="poppins">
                <HStack fontSize='lg'>
                    <Text fontWeight='bold'>{date}</Text>
                    <Text fontWeight='light'>•</Text>
                    <Text fontWeight="medium" opacity='.8'>R$ {value},00</Text>
                </HStack>
                <Text fontSize='lg' fontWeight='medium' opacity='.5'>
                    Sem descrição.
                </Text>
            </Box>
        )
    } 
}