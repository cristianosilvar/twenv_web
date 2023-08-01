import { Box, Heading, Stack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";


export default function Home() {
    return (
        <section>
            <Box display='flex' flexDirection='column' gap='2rem'>
                <Stack>
                    <Heading as='h1' size='lg' opacity='.9'>Junho</Heading>
                    <Heading as='h6' size='md' opacity='.5' fontWeight='light'>06</Heading>
                </Stack>
                <Box display='flex' gap='8'>
                    <Card is="totalSpending" value={2200}/>
                    <Card is="totalEarnings" value={5800}/>
                </Box>
            </Box>
        </section>
    )
}