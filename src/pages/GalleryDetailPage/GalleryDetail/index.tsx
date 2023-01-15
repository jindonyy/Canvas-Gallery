import { useEffect, useRef, useState, useLayoutEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { $ColumnItem } from 'components/styled/Item';
import useThrottle from 'hooks/useThrottle';
import useFetchGalleryItem from 'queries/useFetchGallery';

const devicePixelRatio = window.devicePixelRatio ?? 1;

const GalleryDetail = () => {
  const navigate = useNavigate();

  const { data = [] } = useFetchGalleryItem();
  const { imageId = '' } = useParams();
  const initialImageIndex = useMemo(
    () => data?.findIndex(({ id }) => id === imageId),
    [data, imageId]
  );
  const [imageIndex, setImageIndex] = useState(initialImageIndex);
  const { author = '', download_url: src, width, height } = data[imageIndex] || {};
  const image = new Image();
  image.src = src;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = { offset: { x: 0, y: 0 }, page: { x: 0, y: 0 } };
  let canvasPosition = { x: 0, y: 0 };

  const createCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas?.getContext) throw new Error('canvas를 지원하지 않습니다.');

    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;

    const context = canvas.getContext('2d');
    context?.scale(devicePixelRatio, devicePixelRatio);

    return context;
  };

  const drawImage = () => {
    image.src = src;

    image.onload = () => {
      const context = createCanvas(); // 이미지 로딩 전에는 그전 이미지가 보이도록 (로딩 화면을 보이는게 나을까?)
      context?.drawImage(image, 0, 0);
    };
  };

  const handleCanvasWheel = (event: WheelEvent) => {
    let newImageIndex = imageIndex + (event.deltaY > 0 ? 1 : -1); // deltaY 값에 상관없이 한번만 이미지가 바뀌는게 나을까?
    if (newImageIndex < 0) newImageIndex = 0;
    if (newImageIndex >= data.length) newImageIndex = data.length - 1;
    if (imageIndex === newImageIndex) return;

    setImageIndex(newImageIndex); // 로딩 화면이 안보이므로 인덱스로 넘어간게 보이도록 (onload 후에 넣는게 나을까?)
    drawImage();
  };

  const updateMouseOffset = (event: MouseEvent) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scale = { x: canvas.width / rect.width, y: canvas.height / rect.height };
    mousePosition.offset = {
      x: (event.pageX - rect.left) * scale.x,
      y: (event.pageY - rect.y) * scale.y
    };
  };

  const handleCanvasMouseMove = (event: MouseEvent) => {
    event.preventDefault();

    updateMouseOffset(event);
    const zoom = 1 + (event.pageY - mousePosition.page.y) * 0.1;

    const context = canvasRef.current?.getContext('2d');
    if (!context) return;
    const { a: scaleX } = context.getTransform();
    // if (scaleX * zoom <= devicePixelRatio) {
    //   context.translate(0, 0);
    //   context.scale(1, 1);
    //   const storedTransform = context.getTransform();
    //   context.setTransform(storedTransform);
    //   context.drawImage(image, 0, 0);
    //   return;
    // }
    const newCanvasPosition = {
      x: canvasPosition.x + (mousePosition.offset.x / scaleX) * (1 - 1 / zoom),
      y: canvasPosition.y + (mousePosition.offset.y / scaleX) * (1 - 1 / zoom)
    };

    context.translate(canvasPosition.x, canvasPosition.y);
    context.scale(zoom, zoom);
    context.translate(-newCanvasPosition.x, -newCanvasPosition.y);
    canvasPosition = newCanvasPosition;
    mousePosition.page = { x: event.pageX, y: event.pageY };
    const transform = context.getTransform();
    context.setTransform(transform);
    context.drawImage(image, 0, 0);
  };

  const handleCanvasMouseUp = () => {
    document.removeEventListener('mousemove', handleCanvasMouseMove);
    document.removeEventListener('mouseup', handleCanvasMouseUp);
  };

  const handleCanvasMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (event.nativeEvent.button !== 0) return;

    mousePosition.page = { x: event.pageX, y: event.pageY };

    document.addEventListener('mousemove', handleCanvasMouseMove);
    document.addEventListener('mouseup', handleCanvasMouseUp);
  };

  const handleCanvasContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (initialImageIndex < 0) {
      alert('잘못된 경로입니다.');
      navigate('/gallery');
    }
  }, [initialImageIndex]);

  useLayoutEffect(() => {
    createCanvas();
    drawImage();
  }, [canvasRef]);

  return (
    <$GalleryItem>
      <$ItemIndex>{`${imageIndex + 1} / ${data.length}`}</$ItemIndex>
      <$Canvas
        ref={canvasRef}
        onWheel={useThrottle(handleCanvasWheel, 500)}
        onMouseDown={handleCanvasMouseDown}
        onContextMenu={handleCanvasContextMenu}
      />
      <$ColumnItem.Title>{author}</$ColumnItem.Title>
    </$GalleryItem>
  );
};

const $GalleryItem = styled($ColumnItem)`
  width: fit-content;
  margin: 0 auto;
`;

const $ItemIndex = styled.p`
  margin: -1rem 0 1rem;
  text-align: right;
`;

const $Canvas = styled.canvas`
  max-width: 100%;
  max-height: 55vh;
  background: ${({ theme }) => theme.colors.grey100};
`;

export default GalleryDetail;
