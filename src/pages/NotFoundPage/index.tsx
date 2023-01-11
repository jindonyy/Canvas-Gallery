import styled from 'styled-components';

import $PageLayout from 'components/PageLayout';
import $Title from 'components/Title';

const $NotFoundPageLayout = styled($PageLayout)`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center', align: 'center' })}
`;

const NotFound = () => (
  <$NotFoundPageLayout>
    <$Title>페이지를 찾을 수 없습니다 &#40;ㅠ_ㅠ&#41;</$Title>
  </$NotFoundPageLayout>
);

export default NotFound;
