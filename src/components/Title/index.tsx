import styled from 'styled-components';

type $TitleProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const TitleFontSizes = {
  h1: '3.2rem',
  h2: '2.8rem',
  h3: '2.4rem',
  h4: '2.2rem',
  h5: '2rem',
  h6: '1.8rem'
};

const $Title = styled.h1<$TitleProps>`
  font-size: ${({ variant = 'h1' }) => TitleFontSizes[variant]};
`;

export default $Title;
