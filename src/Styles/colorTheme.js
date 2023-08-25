import { css } from 'styled-components';

const colors = {
  primary: '#fff',
  background: '#181823',
  pink: 'rgba(240, 46, 170, 0.9)',
  pink5: 'rgba(240, 46, 170, 0.5)',
  pink4: 'rgba(240, 46, 170, 0.4)',
  pink3: 'rgba(240, 46, 170, 0.3)',
  pink2: 'rgba(240, 46, 170, 0.2)',
  pink1: 'rgba(240, 46, 170, 0.1)',
  pink05: 'rgba(240, 46, 170, 0.05)',
  blue: 'rgba(83,127,231)',
  lightBlue: 'rgba(83, 127, 231, 0.2)'
};

export const colorTheme = css`
  :root {
    ${Object.keys(colors).map((colorKey) => `--color-${colorKey}: ${colors[colorKey]};`).join('\n')}
  }
`;
