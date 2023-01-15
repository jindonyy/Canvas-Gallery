import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { fetchGallery, ImageEntity } from 'api/gallery';
import { MINUTE } from 'utils/unit';

const useFetchGallery = (
  options?: UseQueryOptions<ImageEntity[], AxiosError, ImageEntity[], ['gallery']>
) =>
  useQuery(['gallery'], fetchGallery, {
    staleTime: 1 * MINUTE,
    cacheTime: 10 * MINUTE,
    retry: 1,
    suspense: true,
    useErrorBoundary: true,
    ...options
  });

export default useFetchGallery;
