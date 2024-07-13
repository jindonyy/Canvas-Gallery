import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Logo from 'components/styled/Logo';
import PageLayout from 'components/styled/PageLayout';

const HomePage = () => (
  <PageLayout>
    <$Container>
      <Logo variant="text" size="lg" />
      <$ArrowWrap>
        <Link to="/gallery">
          <div>
            <MdOutlineArrowRightAlt size="50px" />
          </div>
        </Link>
      </$ArrowWrap>
    </$Container>
  </PageLayout>
);

const $Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const boxFade = keyframes`
  0% {
    clip-path: inset(0 50px 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

const $ArrowWrap = styled.div`
  display: flex;
  justify-content: end;
  max-width: 700px;
  width: 100%;
  margin-top: -60px;

  a {
    overflow: hidden;
    &:hover {
      svg {
        fill: ${({ theme }) => theme.palette.neutral_dark};
      }
    }

    div {
      animation: ${boxFade} 1.5s 1s infinite ease;
    }
  }
`;

export default HomePage;
