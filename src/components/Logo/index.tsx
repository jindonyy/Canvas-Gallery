import { Link } from 'react-router-dom';
import styled from 'styled-components';

type $LogoProps = {
  size?: keyof typeof logoSizes;
};

const logoSizes = {
  medium: '18rem'
};

const $Link = styled(Link)<$LogoProps>`
  display: block;
  width: ${({ size = 'medium' }) => logoSizes[size]};
`;

const $Logo = (props: $LogoProps) => (
  <$Link to="/" {...props}>
    <img src="https://iheuron.com/html/_img/comm/logo.png" alt="Heuron 로고" />
  </$Link>
);

export default $Logo;
