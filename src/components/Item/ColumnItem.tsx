import { ReactNode, ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled, { CSSObject } from 'styled-components';

interface $ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  css?: CSSObject;
  children?: ReactNode;
}

type $TitleProps = {
  ellipsis?: number;
};

const $ColumnItemRoot = styled.div``;

const $ImageWrap = styled.div`
  position: relative;
  padding-top: 66.6%;
  background: #ededed;
  overflow: hidden;
  & > img {
    ${({ theme }) => theme.mixins.position('absolute', { top: '50%', left: '50%' })}
    transform: translate(-50%, -50%);
  }
`;

const $Image = ({ src, alt, children, css, ...restProps }: $ImageProps) => (
  <$ImageWrap css={css}>
    <img src={src} alt={alt} {...restProps} />
    {children}
  </$ImageWrap>
);

const $Link = styled(Link)`
  display: block;
`;

const $Title = styled.h3<$TitleProps>`
  display: -webkit-box;
  margin-top: 1.5rem;
  text-align: center;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ ellipsis = 1 }) => ellipsis};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const $ColumnItem = Object.assign($ColumnItemRoot, {
  Image: $Image,
  Link: $Link,
  Title: $Title
});

export default $ColumnItem;
