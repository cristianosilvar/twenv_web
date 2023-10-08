import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
  VStack,
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

import { Label } from "../Label";

type LeftElementType = "R$" | "%";

interface InputNumberInterface extends InputProps {
  name: string;
  control: Control<any>;
  leftElement?: LeftElementType;
  isRequired?: boolean;
  label?: string;
  align?: string;
}

const InputNumber = ({
  name,
  control,
  leftElement,
  label,
  align,
  isRequired,
  ...rest
}: InputNumberInterface) => {
  return (
    <VStack align={align} w={"full"}>
      {label && <Label label={label} isRequired={isRequired} />}
      <InputGroup size={"lg"}>
        {leftElement && <InputLeftAddon children={leftElement} />}
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input type="number" isRequired={isRequired} {...field} {...rest} />
          )}
        />
      </InputGroup>
    </VStack>
  );
};

export default InputNumber;
