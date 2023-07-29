import { Box, Center, Text } from "@chakra-ui/layout"

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
        return (
            <Box display='flex' width='275px' alignItems='center' gap='1.5rem'
            border='1px solid' height='150px' p='1rem' borderRadius='2xl'
            {...is === 'totalSpending' ? 
            (icon = iconDown, {
                backgroundColor:'#C5212110', 
                borderColor: '#C52121'}) : 
            (icon = iconUp, {
                backgroundColor:'#00832510', 
                borderColor: '#008325'})
            }>

                <img width="50px" src={icon}/>
                <Box display='flex' alignItems='end' gap='.5rem'>
                    <Text fontSize='3xl' fontWeight='medium'>R$ {value},</Text>
                    <Text fontSize='lg' fontWeight='light' mb='1'>00</Text>
                </Box>

            </Box>
        )
    } else {
        return (
            <>
            </>
        )
    } 
}