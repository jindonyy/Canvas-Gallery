import { Link } from 'react-router-dom';
import styled from 'styled-components';

const $GNBRoot = styled.ul`
  ${({ theme }) => theme.mixins.flexBox({ gap: '1rem' })};
  margin-top: 1rem;
`;

const $Item = styled.li``;

const $Link = styled(Link)`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  &:hover {
    color: ${({ theme }) => theme.palette.neutral_dark};
  }
`;

const $GNB = Object.assign($GNBRoot, {
  Item: $Item,
  Link: $Link
});

export default $GNB;
