import $ApiErrorBoundary from 'components/Error/ApiErrorBoundary';
import PageLayout from 'components/PageLayout';
import $Title from 'components/Title';
import Gallery from 'pages/GalleryPage/Gallery';

const GalleryPage = () => (
  <PageLayout>
    <$Title>Gallery Page</$Title>
    <$ApiErrorBoundary>
      <Gallery />
    </$ApiErrorBoundary>
  </PageLayout>
);

export default GalleryPage;
