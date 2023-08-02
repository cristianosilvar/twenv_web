import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useState } from "react";

export default function Spending() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('xl')
    
    const handleSizeClick = (newSize: string) => {
        setSize(newSize)
        onOpen()
    }

    return(
        <section>
            <Flex gap='4' wrap='wrap'>
                <Box display="flex" gap='4' flexWrap='wrap'>
                    <Card is="spending" value={900} date="31/07" description="Sem descrição" />
                </Box>
                
                <Box onClick={() => handleSizeClick('xl')}>
                    <Card is="newSpending"/>
                </Box>
            </Flex>
            <Modal onClose={onClose} size={size} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <h6>ijijijijji</h6>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </section>
    )
}