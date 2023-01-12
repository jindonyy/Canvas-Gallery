import { $RowList } from 'components/styled/List';
import Item from 'pages/GalleryPage/Gallery/Item';
import useFetchGallery from 'queries/useFetchGallery';

const Gallery = () => {
  const { data } = useFetchGallery();

  return (
    <$RowList>
      {data?.map(({ id, author, download_url: src }) => (
        <Item key={id} id={id} author={author} src={src} />
      ))}
    </$RowList>
  );
};
export default Gallery;
