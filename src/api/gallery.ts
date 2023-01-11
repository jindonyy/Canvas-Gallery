import http from 'api/core';

export type ImageEntity = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export const fetchGallery = () => http.get<ImageEntity[]>('list');
