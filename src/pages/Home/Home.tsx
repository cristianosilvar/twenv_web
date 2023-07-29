import { Box, Heading, Stack, Text } from "@chakra-ui/react"

export default function Home() {
    return (
        <main>
            <Box>
                <Stack spacing='1'>
                    <Heading as='h1' size='lg' opacity='.8'>Junho</Heading>
                    <Heading as='h6' size='md' fontWeight='light' opacity='.6'>06</Heading>
                </Stack>
            </Box>
        </main>
    )
}