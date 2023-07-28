import logo_twenv from '../../assets/logo-twenv.svg'

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Image, Link } from "@chakra-ui/react";

export function Header() {
    return (
        <header>
            <Box w='80%' mx='auto' py='2.5rem' display='flex' alignItems='center' justifyContent='space-between'>
                <Box display='flex' alignItems='center' gap='3.5rem'>
                    <Image src={logo_twenv}/>
                    <Box w='1px' height='20px' bgColor='white' opacity='.7'/>
                    <Breadcrumb>
                        <BreadcrumbItem fontSize='xl' fontWeight='light' gap='1.5rem' color='white'>
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