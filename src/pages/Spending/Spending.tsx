import { Flex } from "@chakra-ui/react";
import Card from "../../components/Card/Card";

export default function Spending() {
    return(
        <section>
            <Flex gap='4' wrap='wrap'>
                <Card is="spending" value={900} date="31/07" description="Sem descrição" />
                
                <Card is="newSpending"/>
            </Flex>
        </section>
    )
}