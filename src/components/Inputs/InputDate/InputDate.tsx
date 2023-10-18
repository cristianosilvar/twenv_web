import { Input, InputProps, VStack } from "@chakra-ui/react";
import { Label } from "../Label";
import { Control, Controller } from "react-hook-form";

interface InputDateInterface extends InputProps {
  name: string;
  control: Control<any>;
  label?: string;
  isRequired?: boolean;
}

const InputDate = ({
  label,
  control,
  name,
  isRequired,
  ...rest
}: InputDateInterface) => {
  return (
    <VStack align={"center"} w={"full"}>
      {label && <Label label={label} isRequired={isRequired} />}
      <Controller
        control={control}
        render={({ field }) => (
          <Input type="date" bgColor={"#fefefe15"} {...field} {...rest}></Input>
        )}
        name={name}
      />
    </VStack>
  );
};

export default InputDate;
