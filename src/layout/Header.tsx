import styled from 'styled-components';

import Logo from 'components/Logo';

const $Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.size.height.header};
  background-color: ${({ theme }) => theme.palette.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutral_light};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const $Contents = styled.div`
  max-width: ${({ theme }) => theme.size.media.max};
  min-width: ${({ theme }) => theme.size.media.min};
  height: ${({ theme }) => theme.size.height.header};
  margin: 0 auto;
  padding: 0 20px;
  ${({ theme }) => theme.mixins.flexBox({ justify: 'space-between', align: 'center' })}
`;

const Header = () => (
  <$Header>
    <$Contents>
      <Logo />
    </$Contents>
  </$Header>
);

export default Header;
