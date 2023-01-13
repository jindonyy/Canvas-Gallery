import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import CanvasImage from 'components/primitives/CanvasImage';
import { $ColumnItem } from 'components/styled/Item';
import useThrottle from 'hooks/useThrottle';
import useFetchGallery from 'queries/useFetchGallery';

const $GalleryItem = styled($ColumnItem)`
  width: fit-content;
  margin: 0 auto;
`;

const $ItemIndex = styled.p`
  margin: -1rem 0 1rem;
  text-align: right;
`;

const $GalleryImage = styled(CanvasImage)`
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 58vh;
  margin: 0 auto;
`;

const GalleryDetail = () => {
  const { imageId = '' } = useParams();
  const { data = [] } = useFetchGallery();
  const navigate = useNavigate();
  const initialImageIndex = data?.findIndex(({ id }) => id === imageId);
  const [currentImageIndex, setCurrentImage] = useState(initialImageIndex);
  const { author = '', download_url: src, ...rest } = data[currentImageIndex] || {};

  useEffect(() => {
    if (initialImageIndex < 0) {
      alert('잘못된 경로입니다.');
      navigate('/gallery');
    }
  }, [initialImageIndex]);

  const handleCanvasWheel = (event: WheelEvent) => {
    const newImageIndex = currentImageIndex + (event.deltaY > 0 ? 1 : -1);
    if (newImageIndex >= 0 && newImageIndex < data.length) setCurrentImage(newImageIndex);
  };

  return (
    <$GalleryItem>
      <$ItemIndex>{`${currentImageIndex + 1} / ${data.length}`}</$ItemIndex>
      <$GalleryImage
        src={src}
        alt={`${author}의 사진`}
        onWheel={useThrottle(handleCanvasWheel, 1000)}
        {...rest}
      />
      <$ColumnItem.Title>{author}</$ColumnItem.Title>
    </$GalleryItem>
  );
};

export default GalleryDetail;
