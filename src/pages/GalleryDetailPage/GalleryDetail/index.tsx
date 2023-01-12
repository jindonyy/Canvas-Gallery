import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CanvasImage from 'components/primitives/CanvasImage';
import { $ColumnItem } from 'components/styled/Item';
import useFetchGallery from 'queries/useFetchGallery';

const GalleryDetail = () => {
  const { imageId = '' } = useParams();
  const { data } = useFetchGallery();
  const navigate = useNavigate();
  const currentImage = data?.find(({ id }) => id === imageId);
  const { width = 0, height = 0, download_url: src = '', author } = currentImage || {};

  useEffect(() => {
    if (!currentImage) {
      alert('잘못된 경로입니다.');
      navigate('/gallery');
    }
  }, [currentImage]);

  return (
    <$ColumnItem>
      <CanvasImage width={width} height={height} src={src} alt={`${author}의 사진`} />
      <$ColumnItem.Title>{author}</$ColumnItem.Title>
    </$ColumnItem>
  );
};

export default GalleryDetail;
