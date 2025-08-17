import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(img => (
        <GridItem key={img.id}>
          <PhotosGalleryItem img={img} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PhotosGallery;
