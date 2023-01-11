import { ReactNode } from 'react';
import styled from 'styled-components';

type ImageProps = {
  src: string;
  alt: string;
  children?: ReactNode;
};

const $ColumnImageRoot = styled.div``;

const $ImageWrap = styled.div`
  position: relative;
  padding-top: 66.6%;
  overflow: hidden;
  & > img {
    ${({ theme }) => theme.mixins.position('absolute', { top: '50%', left: '50%' })}
    transform: translate(-50%, -50%);
  }
`;

const $Image = ({ src, alt, children, ...restProps }: ImageProps) => (
  <$ImageWrap {...restProps}>
    <img src={src} alt={alt} />
    {children}
  </$ImageWrap>
);

const $Author = styled.p`
  display: -webkit-box;
  margin-top: 1.5rem;
  text-align: center;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const $ColumnImage = Object.assign($ColumnImageRoot, {
  Image: $Image,
  Author: $Author
});

export default $ColumnImage;
