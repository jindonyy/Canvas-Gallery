import { ComponentProps } from 'react';

import ApiErrorBoundary from 'components/primitives/Error/ApiErrorBoundary';
import $ErrorArea from 'components/styled/Error/ErrorArea';

const ServerErrorFallback = () => (
  <$ErrorArea>
    <$ErrorArea.Title>잠시 후 다시 시도해주세요.</$ErrorArea.Title>
    <$ErrorArea.Description>요청에 실패했습니다.</$ErrorArea.Description>
  </$ErrorArea>
);

const ClientErrorFallback = () => (
  <$ErrorArea>
    <$ErrorArea.Title>잘못된 요청입니다.</$ErrorArea.Title>
    <$ErrorArea.Description>요청을 확인해주세요.</$ErrorArea.Description>
  </$ErrorArea>
);

interface $ApiErrorBoundaryProps
  extends ComponentProps<typeof ApiErrorBoundary>,
    ComponentProps<typeof $ErrorArea> {}

const $ApiErrorBoundary = ({ children }: $ApiErrorBoundaryProps) => (
  <ApiErrorBoundary
    serverFallback={<ServerErrorFallback />}
    clientFallback={<ClientErrorFallback />}
  >
    {children}
  </ApiErrorBoundary>
);

export default $ApiErrorBoundary;
