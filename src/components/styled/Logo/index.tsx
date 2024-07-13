import styled from 'styled-components';

type $LogoProps = {
  variant?: 'logo' | 'text';
  size?: 'sm' | 'md' | 'lg';
};

const logoSizes = {
  logo: {
    sm: '60px',
    md: '120px',
    lg: '240px'
  },
  text: {
    sm: '184px',
    md: '368px',
    lg: '736px'
  }
};

const $Image = styled.img<$LogoProps>`
  display: block;
  width: ${({ variant = 'logo', size = 'md' }) => logoSizes[variant][size]};
`;

const $Logo = (props: $LogoProps) => {
  const { variant = 'logo', ...rest } = props;
  const src = `/assets/images/${variant === 'logo' ? 'logo.png' : 'logo_text.png'}`;

  return <$Image src={src} variant={variant} {...rest} />;
};

export default $Logo;
