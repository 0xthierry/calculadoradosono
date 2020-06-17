type ISize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default {
  spacing: (size: ISize = 1) => `${0.4 * size}rem`,
  container: {
    min: '32rem',
    max: '130rem',
  },
  colors: {
    primary: '',
    secondary: '',
    white: '#FFF',
    black: '#000',
  },
  fontFamily: '"Roboto", sans-serif',
};
