import styled from 'styled-components';

const $PageLayout = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.size.media.max};
  min-width: ${({ theme }) => theme.size.media.min};
  min-height: calc(100vh - ${({ theme }) => theme.size.height.header});
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export default $PageLayout;
