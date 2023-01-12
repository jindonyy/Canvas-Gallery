import styled from 'styled-components';

const $ColumnList = styled.ul`
  border-top: 3px solid ${({ theme }) => theme.palette.black};
  & > * {
    border-bottom: 1px solid ${({ theme }) => theme.palette.neutral_light};
  }
`;

export default $ColumnList;
