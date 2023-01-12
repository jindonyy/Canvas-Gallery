import $ErrorArea from 'components/styled/Error/ErrorArea';

const NotFound = () => (
  <$ErrorArea size="large">
    <$ErrorArea.Title size="large">페이지를 찾을 수 없습니다.</$ErrorArea.Title>
    <$ErrorArea.Description size="large">경로를 확인해주세요.</$ErrorArea.Description>
  </$ErrorArea>
);

export default NotFound;
