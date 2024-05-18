import { GridItem } from 'components';
import css from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ src, avg_color, alt }) => {
  return (
    <GridItem>
      <div
        className={css.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
