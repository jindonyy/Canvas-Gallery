import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Layout from 'layout/index';
import GalleryDetailPage from 'pages/GalleryDetailPage';
import GalleryPage from 'pages/GalleryPage';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFoundPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/gallery" element={<Layout />}>
        <Route index element={<GalleryPage />} errorElement={<NotFound />} />
        <Route path=":imageId" element={<GalleryDetailPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
