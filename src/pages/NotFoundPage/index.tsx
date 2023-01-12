import $Error from 'components/styled/Error/$ErrorArea';
import $PageLayout from 'components/styled/PageLayout';

const NotFound = () => (
  <$PageLayout>
    <$Error>
      <$Error.Title>페이지를 찾을 수 없습니다.</$Error.Title>
      <$Error.Description>경로를 확인해주세요.</$Error.Description>
    </$Error>
  </$PageLayout>
);

export default NotFound;
