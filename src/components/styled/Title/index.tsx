import { ReactNode } from 'react';
import styled from 'styled-components';

type $TitleProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
};

const TitleFontSizes = {
  h1: '2.8rem',
  h2: '2.4rem',
  h3: '2.2rem',
  h4: '2rem',
  h5: '1.8rem',
  h6: '1.6rem'
};

const $TitleRoot = styled.h1<$TitleProps>`
  margin-bottom: 2rem;
  font-size: ${({ variant = 'h1' }) => TitleFontSizes[variant]};
`;

const $Title = ({ variant, children }: $TitleProps) => (
  <$TitleRoot as={variant}>{children}</$TitleRoot>
);

export default $Title;
