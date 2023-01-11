import { ReactNode } from 'react';
import styled from 'styled-components';

type $ImageProps = {
  src: string;
  alt: string;
  children?: ReactNode;
};

const $RowImageRoot = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ gap: '3rem' })}
  padding: 2rem;
`;

const $ImageWrap = styled.div`
  width: 12rem;
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center', align: 'center' })}
`;

const $Image = ({ src, alt, children, ...restProps }: $ImageProps) => (
  <$ImageWrap {...restProps}>
    <img src={src} alt={alt} />
    {children}
  </$ImageWrap>
);

const $Author = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const $RowImage = Object.assign($RowImageRoot, {
  Image: $Image,
  Author: $Author
});

export default $RowImage;
