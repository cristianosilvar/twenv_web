import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react';

const customGlobalCss = defineConfig({
  globalCss: {
    body: {
      bg: '#000407',
      color: '#fefefe',
    },
  },
});

const inputRecipe = defineRecipe({
  base: {
    bgColor: '#fefefe15',
    h: '200px',
  },
});

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      new: {
        py: 30,
        color: '#513BD9',
        bgColor: '#000000CC',
        border: '1px solid #fefefe10',
        _hover: {
          borderColor: '#fefefe30',
        },
      },
      primary: {
        width: 'full',
        color: '#fefefe',
        bgColor: '#513BD9',
        border: '1px solid #fefefe10',
        _hover: {
          bgColor: '#702DFF',
        },
      },
      secondary: {
        width: 'full',
        color: '#fefefe',
        bgColor: '#fefefe15',
        border: '1px solid #fefefe10',
        _hover: {
          borderColor: '#fefefe30',
        },
      },
    },
  },
});

export const system = createSystem(
  defaultConfig,
  {
    theme: {
      tokens: {
        fonts: {
          heading: { value: "'Poppins', sans-serif" },
          body: { value: "'Poppins', sans-serif" },
        },
      },
      recipes: {
        button: buttonRecipe,
        input: inputRecipe,
      },
    },
  },
  customGlobalCss,
);
