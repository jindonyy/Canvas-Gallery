import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchGallery, ImageEntity } from 'api/gallery';
import { MINUTE } from 'utils/unit';

const useFetchGallery = () =>
  useQuery<ImageEntity[], AxiosError>(['gallery'], fetchGallery, {
    staleTime: 1 * MINUTE,
    cacheTime: 10 * MINUTE,
    retry: 1,
    suspense: true,
    useErrorBoundary: true
  });

export default useFetchGallery;
