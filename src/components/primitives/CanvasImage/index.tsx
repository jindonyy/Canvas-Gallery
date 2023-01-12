import { useEffect, useRef } from 'react';
import styled from 'styled-components';

type CanvasImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

const $Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.grey100};
`;

const CanvasImage = ({ width, height, src, alt }: CanvasImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const createCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas?.getContext) throw new Error('canvas를 지원하지 않습니다.');

    const devicePixelRatio = window.devicePixelRatio ?? 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;

    const context = canvas.getContext('2d');
    if (!context) return null;
    context.scale(devicePixelRatio, devicePixelRatio);

    return context;
  };

  const drawImage = () => {
    const context = createCanvas();
    if (!context) return;

    const image = new Image();
    image.src = src;
    image.alt = alt;

    image.onload = () => context.drawImage(image, 0, 0, width, height);
  };

  useEffect(drawImage, [canvasRef]);

  return <$Canvas ref={canvasRef} />;
};

export default CanvasImage;
