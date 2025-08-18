import { useEffect, useRef, useState } from 'react';

import { getPhotos } from '../apiService/photos';

import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isEndOfGallery = useRef(false);

  useEffect(() => {
    if (query === '') return;

    async function uploadGallery() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getPhotos(query, page);
        const { photos, per_page, total_results } = data;
        setImages(prevPhotos => {
          return [...prevPhotos, ...photos];
        });
        if (total_results - per_page * page < 0) {
          isEndOfGallery.current = true;
        } else {
          isEndOfGallery.current = false;
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    uploadGallery();
  }, [query, page]);

  const onSearch = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const uploadMorePhotos = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Form onSubmit={onSearch} />
      {images.length > 0 && !isLoading && !isError && (
        <PhotosGallery images={images} />
      )}
      {isLoading && <Loader />}
      {isError && <p>Oops... Something went wrong...</p>}
      {query && (
        <Button onClick={uploadMorePhotos} disabled={isEndOfGallery.current}>
          <p>Load more</p>
        </Button>
      )}
    </>
  );
};

export default Photos;
