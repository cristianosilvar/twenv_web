import type {
  BoxProps,
  HeadingProps,
  MenuContentProps,
  MenuItemProps,
  TextProps,
} from '@chakra-ui/react';
import { Box, Heading, Text, MenuRoot } from '@chakra-ui/react';

import { formatDate, formatMoney } from '@/shared/lib';
import { IconOptions } from '@/shared/ui/icons';
import { MenuContent, MenuTrigger, MenuItem } from '@/shared/ui/menu';

type CardInfoRootProps = BoxProps;

export const CardInfoRoot = ({
  p = 8,
  alignItems = 'left',
  bgColor = '#000000CC',
  border = '1px solid #fefefe10',
  borderRadius = 'lg',
  cursor = 'pointer',
  children,
  ...props
}: CardInfoRootProps) => {
  return (
    <Box
      p={p}
      alignItems={alignItems}
      bgColor={bgColor}
      border={border}
      borderRadius={borderRadius}
      cursor={cursor}
      {...props}
    >
      {children}
    </Box>
  );
};

type CardInfoValueProps = HeadingProps & {
  value: number;
};

export const CardInfoValue = ({
  value = 0,
  as = 'h5',
  size = 'md',
  fontWeight = 'semibold',
  css = {
    '& > span': {
      opacity: 0.5,
    },
  },
  ...props
}: CardInfoValueProps) => {
  return (
    <Heading as={as} size={size} fontWeight={fontWeight} css={css} {...props}>
      <span>R$ </span>
      {formatMoney({ value }).replace('R$', '').trim()}
    </Heading>
  );
};

type CardInfoDateProps = HeadingProps & {
  date: Date;
};

export const CardInfoDate = ({
  date = new Date(),
  as = 'h6',
  size = 'sm',
  fontWeight = 'normal',
  ...props
}: CardInfoDateProps) => {
  return (
    <Heading as={as} size={size} fontWeight={fontWeight} {...props}>
      {formatDate(date, 'dayAndMonth')}
    </Heading>
  );
};

type CardInfoDescriptionProps = TextProps & {
  description: string;
};

export const CardInfoDescription = ({
  description,
  textAlign = 'left',
  fontSize = 'md',
  fontWeight = 'normal',
  opacity = 0.5,
  ...props
}: CardInfoDescriptionProps) => {
  return (
    <Text
      opacity={opacity}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      {...props}
    >
      {description || 'Sem descrição'}
    </Text>
  );
};

type CardInfoMenuOptionsProps = MenuContentProps;

export const CardInfoMenuOptions = ({
  children,
  bgColor = '#000',
  borderColor = '#fefefe15',
  minW = 'min-content',
  ...props
}: CardInfoMenuOptionsProps) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconOptions boxSize="25px" opacity={0.5} cursor="pointer" />
      </MenuTrigger>
      <MenuContent
        bgColor={bgColor}
        borderColor={borderColor}
        minW={minW}
        {...props}
      >
        {children}
      </MenuContent>
    </MenuRoot>
  );
};
type CardInfoOptionProps = MenuItemProps;

export const CardInfoOption = ({
  children,
  px = 8,
  py = 2,
  bgColor = '#000',
  _hover = {
    bgColor: '#fefefe10',
  },
  ...props
}: CardInfoOptionProps) => {
  return (
    <MenuItem px={px} py={py} bgColor={bgColor} _hover={_hover} {...props}>
      {children}
    </MenuItem>
  );
};

export const CardInfo = {
  Root: CardInfoRoot,
  Value: CardInfoValue,
  Date: CardInfoDate,
  Description: CardInfoDescription,
  MenuOptions: CardInfoMenuOptions,
  Option: CardInfoOption,
};
