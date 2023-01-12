import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type $ImageProps = {
  src: string;
  alt: string;
  children?: ReactNode;
};

type $TitleProps = {
  ellipsis?: number;
};

const $RowItemRoot = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ gap: '3rem' })}
  padding: 2rem;
`;

const $ImageWrap = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center', align: 'center' })}
  width: 12rem;
  background: #ededed;
`;

const $Image = ({ src, alt, children, ...restProps }: $ImageProps) => (
  <$ImageWrap {...restProps}>
    <img src={src} alt={alt} />
    {children}
  </$ImageWrap>
);

const $Link = styled(Link)`
  display: block;
`;

const $Title = styled.h3<$TitleProps>`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ ellipsis = 1 }) => ellipsis};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const $RowItem = Object.assign($RowItemRoot, {
  Image: $Image,
  Link: $Link,
  Title: $Title
});

export default $RowItem;
