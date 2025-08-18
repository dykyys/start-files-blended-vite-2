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
  let isEndOfGallery = useRef(false);

  useEffect(() => {
    if (query === '') return;

    async function uploadGallery() {
      setIsLoading(true);
      try {
        const data = await getPhotos(query, page);
        const { per_page, total_results, photos } = data;
        setImages(images => {
          return [...images, ...photos];
        });
        total_results / per_page > 1
          ? (isEndOfGallery.current = false)
          : (isEndOfGallery.current = true);
        console.log(total_results / per_page > 1);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    uploadGallery();
  }, [query, page]);

  const onSearch = query => {
    setQuery(query);
    setPage(1);
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
