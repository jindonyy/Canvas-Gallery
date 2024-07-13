import { Suspense, lazy } from 'react';

import $ApiErrorBoundary from 'components/styled/Error/ApiErrorBoundary';
import $LoadingArea from 'components/styled/Loading/LoadingArea';
import PageLayout from 'components/styled/PageLayout';
import $Title from 'components/styled/Title';

const LazyGallery = lazy(() => import('pages/GalleryPage/Gallery'));

const GalleryPage = () => (
  <PageLayout>
    <$Title variant="h2">Gallery Page</$Title>
    <$ApiErrorBoundary>
      <Suspense
        fallback={
          <$LoadingArea>
            <$LoadingArea.Loader />
          </$LoadingArea>
        }
      >
        <LazyGallery />
      </Suspense>
    </$ApiErrorBoundary>
  </PageLayout>
);

export default GalleryPage;
