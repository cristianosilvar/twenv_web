import { Input, InputProps, VStack } from "@chakra-ui/react";
import { Label } from "../Label";
import { Control, Controller } from "react-hook-form";

interface InputTextInterface extends InputProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
}

export const InputText = ({
  control,
  name,
  placeholder,
  label,
  isReadOnly,
  isRequired,
  ...rest
}: InputTextInterface) => {
  return (
    <VStack align={"start"} w="full">
      {label && <Label label={label} isRequired={isRequired} />}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            bgColor={"#fefefe15"}
            placeholder={placeholder}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            {...field}
            {...rest}
          />
        )}
      />
    </VStack>
  );
};
