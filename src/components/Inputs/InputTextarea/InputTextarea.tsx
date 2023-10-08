import { Textarea, TextareaProps, VStack } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { Label } from "../Label";

interface InputTextareaInterface extends TextareaProps {
  name: string;
  control: any;
  placeholder?: string;
  label?: string;
  align?: string;
  isRequired?: boolean;
}

const InputTextarea = ({
  name,
  placeholder,
  label,
  align,
  isReadOnly,
  isRequired,
  control,
  ...rest
}: InputTextareaInterface) => {
  return (
    <VStack align={align} w="full">
      {label && <Label label={label} isRequired={isRequired} />}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Textarea
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

export default InputTextarea;
