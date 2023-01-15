import { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

const $Main = styled.main`
  position: relative;
  padding-top: ${({ theme }) => theme.size.height.header};
`;

const Main = ({ children }: MainProps) => <$Main>{children}</$Main>;

export default Main;
