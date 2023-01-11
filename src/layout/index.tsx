import { Outlet } from 'react-router-dom';

import Header from 'layout/Header';
import Main from 'layout/Main';

const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default Layout;
