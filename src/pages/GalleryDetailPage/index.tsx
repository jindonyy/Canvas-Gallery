import { lazy, Suspense } from 'react';

import $ApiErrorBoundary from 'components/styled/Error/ApiErrorBoundary';
import $LoadingArea from 'components/styled/Loading/LoadingArea';
import PageLayout from 'components/styled/PageLayout';
import $Title from 'components/styled/Title';

const LazyGalleryDetail = lazy(() => import('pages/GalleryDetailPage/GalleryDetail'));

const GalleryDetailPage = () => {
  return (
    <PageLayout>
      <$Title variant="h2">Gallery Detail Page</$Title>
      <$ApiErrorBoundary>
        <Suspense
          fallback={
            <$LoadingArea>
              <$LoadingArea.Loader />
            </$LoadingArea>
          }
        >
          <LazyGalleryDetail />
        </Suspense>
      </$ApiErrorBoundary>
    </PageLayout>
  );
};

export default GalleryDetailPage;
