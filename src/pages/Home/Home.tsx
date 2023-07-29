import { Box, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
    return (
        <main>
            <Box>
                <Stack>
                    <Heading as='h1' size='lg' opacity='.9'>Junho</Heading>
                    <Heading as='h6' size='md' opacity='.5' fontWeight='light'>06</Heading>
                </Stack>
            </Box>
        </main>
    )
}