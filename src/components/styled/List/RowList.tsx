import styled from 'styled-components';

type $RowListProps = {
  rowCount?: number[];
};

const $RowList = styled.ul<$RowListProps>`
  display: grid;
  grid-template-columns: repeat(${({ rowCount = [4, 3, 2] }) => rowCount[0]}, 1fr);
  column-gap: 1.5rem;
  row-gap: 2.5rem;
  @media (max-width: ${({ theme }) => theme.size.media.tablet}) {
    grid-template-columns: repeat(${({ rowCount = [4, 3, 2] }) => rowCount[1] || rowCount[0]}, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.size.media.mobile}) {
    grid-template-columns: repeat(${({ rowCount = [4, 3, 2] }) => rowCount[2] || rowCount[0]}, 1fr);
  }
`;

export default $RowList;
