import styled from 'styled-components';

import Logo from 'components/styled/Logo';
import $GNB from 'layout/Header/GNB';

const $Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.size.height.header};
  background-color: ${({ theme }) => theme.palette.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutral_light};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const $Contents = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ align: 'center', gap: '4rem' })}
  max-width: ${({ theme }) => theme.size.media.max};
  min-width: ${({ theme }) => theme.size.media.min};
  height: ${({ theme }) => theme.size.height.header};
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = () => (
  <$Header>
    <$Contents>
      <Logo />
      <$GNB>
        <$GNB.Item>
          <$GNB.Link to="/gallery">Gallery</$GNB.Link>
        </$GNB.Item>
      </$GNB>
    </$Contents>
  </$Header>
);

export default Header;
