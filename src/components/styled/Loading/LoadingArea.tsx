import styled, { css } from 'styled-components';

import $LoadingSpinner from 'components/styled/Loading/LoadingSpinner';

type $LoadingAreaProps = {
  size?: 'small' | 'medium' | 'large';
};

type $LoaderProps = {
  variant?: keyof typeof LoaderType;
  size?: 'small' | 'medium' | 'large';
};

const sizeStyles = {
  small: css`
    height: 20vw;
    max-height: 25rem;
  `,
  medium: css`
    height: 40vw;
    max-height: 40rem;
  `,
  large: css`
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
  `
};

const $LoadingAreaRoot = styled.div<$LoadingAreaProps>`
  position: relative;
  ${({ theme }) =>
    theme.mixins.flexBox({ justify: 'center', align: 'center', direction: 'column' })};
  ${({ size = 'medium' }) => sizeStyles[size]};
`;

const LoaderType = {
  spinner: $LoadingSpinner
};

const $Loader = ({ variant = 'spinner', size = 'medium' }: $LoaderProps) => {
  const Component = LoaderType[variant];

  return <Component size={size} />;
};

const $LoadingArea = Object.assign($LoadingAreaRoot, {
  Loader: $Loader
});

export default $LoadingArea;
