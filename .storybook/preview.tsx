import React from 'react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import * as appThemes from '../src/assets/styles/themes';
import { GlobalStyles } from '../src/assets/styles/GlobalStyles';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={appThemes['purple']}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
