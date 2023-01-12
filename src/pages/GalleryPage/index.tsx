import $ApiErrorBoundary from 'components/styled/Error/ApiErrorBoundary';
import PageLayout from 'components/styled/PageLayout';
import $Title from 'components/styled/Title';
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
