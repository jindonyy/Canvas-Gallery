import { $ColumnItem } from 'components/styled/Item';

type ItemProps = {
  id: string;
  author: string;
  src: string;
};

const Item = ({ id, author, src }: ItemProps) => (
  <$ColumnItem>
    <$ColumnItem.Link to={`/gallery/${id}`}>
      <$ColumnItem.Image src={src} alt={`${author}의 사진`} />
      <$ColumnItem.Title>{author}</$ColumnItem.Title>
    </$ColumnItem.Link>
  </$ColumnItem>
);

export default Item;
