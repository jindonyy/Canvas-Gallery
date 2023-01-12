import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { fetchGallery, ImageEntity } from 'api/gallery';
import { galleryQueryKey } from 'api/queryKeys';
import { $RowList } from 'components/styled/List';
import $LoadingSpinner from 'components/styled/LoadingSpinner';
import { MINUTE } from 'utils/unit';

const GalleryLoading = styled.div`
  position: relative;
  height: 40vw;
`;

const LazyGalleryItem = lazy(() => import('./Item'));

const Gallery = () => {
  const { data } = useQuery<ImageEntity[], AxiosError>({
    queryKey: galleryQueryKey,
    queryFn: fetchGallery,
    staleTime: 10 * MINUTE,
    cacheTime: 15 * MINUTE,
    retry: 1,
    suspense: true
  });

  return (
    <Suspense
      fallback={
        <GalleryLoading>
          <$LoadingSpinner />
        </GalleryLoading>
      }
    >
      <$RowList>
        {data?.map(({ id, author, download_url: src }) => (
          <LazyGalleryItem key={id} id={id} author={author} src={src} />
        ))}
      </$RowList>
    </Suspense>
  );
};
export default Gallery;
