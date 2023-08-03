import { Box, HStack, Text, Heading } from "@chakra-ui/layout"

import iconDown from '../../assets/icon-down.svg'
import iconUp from '../../assets/icon-up.svg'

interface Props {
    is:  'newSpending' | 'newEarning' | 'totalSpending' | 'totalEarnings' | 'spending' | 'earnings',
    value?: number,
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
            {// Condição
            ...is === 'totalSpending' ? 
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
            <Box gap='2.5' minW='240px' width='23%' aspectRatio='2/1' bgColor='#ffffff05' 
            border='1px solid #ffffff15' borderRadius='xl' 
            display='flex' flexDirection='column' alignItems='center' justifyContent='center'
            className="poppins transition_2s"
            opacity={is.includes('new') ? ('.5'):('1')} _hover={{
                cursor: 'pointer',
                opacity: 1
            }}>
                {is.includes('new') ? (
                <>
                    {
                        is === 'newEarning' ? (
                            <>
                                <Text>
                                    + Novo Ganho
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text>
                                    + Nova Despesa
                                </Text>
                            </>
                        )
                    }
                </>
                ) : (
                <>
                    <HStack fontSize='lg'>
                        <Text fontWeight='bold'>{date}</Text>
                        <Text fontWeight='light'>•</Text>
                        <Text fontWeight="medium" opacity='.8'>R$ {value},00</Text>
                    </HStack>
                    <Heading fontSize='lg' fontWeight='medium' opacity='.5' noOfLines={1}  minW='225px' width='20%' textAlign='center'>
                        {description}
                    </Heading>
                </>
                )}
            </Box>
        )
    }
}