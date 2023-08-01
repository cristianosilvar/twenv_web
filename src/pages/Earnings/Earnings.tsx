import { Flex } from "@chakra-ui/react";

import Card from "../../components/Card/Card";

export default function Earnings() {
    return(
        <section>
            <Flex gap='4' wrap='wrap'>
                <Card is="earnings" value={2000} date="01/07" description="Salário" />
                
                <Card is="newEarning"/>
            </Flex>
        </section>
    )
}