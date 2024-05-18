import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(image => (
        <PhotosGalleryItem
          key={image.id}
          alt={image.alt}
          avg_color={image.avg_color}
          src={image.src}
        />
      ))}
    </Grid>
  );
};
