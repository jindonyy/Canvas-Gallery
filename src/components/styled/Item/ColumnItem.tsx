import { ReactNode, ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface $ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

type $TitleProps = {
  ellipsis?: number;
  size?: 'small' | 'medium' | 'large';
};

const $ColumnItemRoot = styled.div``;

const $ImageWrap = styled.div`
  position: relative;
  padding-top: 66.6%;
  background: ${({ theme }) => theme.colors.grey100};
  overflow: hidden;
  & > img {
    ${({ theme }) => theme.mixins.position('absolute', { top: '50%', left: '50%' })}
    transform: translate(-50%, -50%);
  }
`;

const $Image = ({ src, alt, className, children, ...restProps }: $ImageProps) => (
  <$ImageWrap className={className}>
    <img src={src} alt={alt} {...restProps} />
    {children}
  </$ImageWrap>
);

const $Link = styled(Link)`
  display: block;
`;

const SizeStyle = {
  small: css`
    font-size: 1.7rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  large: css`
    font-size: 2.4rem;
  `
};

const $Title = styled.h3<$TitleProps>`
  display: -webkit-box;
  margin-top: 1.5rem;
  text-align: center;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ ellipsis = 1 }) => ellipsis};
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${({ size = 'medium' }) => SizeStyle[size]}
`;

const $ColumnItem = Object.assign($ColumnItemRoot, {
  Image: $Image,
  Link: $Link,
  Title: $Title
});

export default $ColumnItem;
