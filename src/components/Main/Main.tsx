import { Box } from "@chakra-ui/layout";

export default function Main({children}: any) {
    return (
        <Box width='80%' mx='auto' minH='60vh' 
        px='2rem' py='1rem'
        border='1px solid #35383D' borderRadius='xl' 
        bgColor='#0B0F18' fontFamily="font-family: 'Lato', sans-serif;">

            {children}
            
        </Box>
    )
}