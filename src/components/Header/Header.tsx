import logo_twenv from '../../assets/logo-twenv.svg'

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Image, Link } from "@chakra-ui/react";

export function Header() {
    return (
        <header>
            <Box w='80%' mx='auto' py='2.5rem' display='flex' alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center' gap='2rem'>
                    <Image src={logo_twenv} width='100px'/>
                    <Box w='.01rem' height='20px' bgColor='white' opacity='.5'/>
                    <Breadcrumb>
                        <BreadcrumbItem fontSize='lg' fontWeight='light' gap='1.5rem' color='white'>
                            <BreadcrumbLink  opacity='.7' textDecoration='none'
                            _hover={{
                                opacity: 1
                            }}>
                                Despesas
                            </BreadcrumbLink>
                            <BreadcrumbLink  opacity='.7' textDecoration='none'
                            _hover={{
                                opacity: 1
                            }}>
                                Ganhos
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Link fontSize='xl' _hover={{
                     textDecoration: 'none',
                     opacity: .7
                }}>Entrar</Link>
            </Box>
        </header>
    )
}