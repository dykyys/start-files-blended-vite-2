// import { getPhotos } from 'apiService/photos';
import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button } from 'components';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (query === '') return;

    async function asyncWrapper() {
      try {
        setIsLoading(true);

        const result = await getPhotos(query, page);
        setImages(prevState => [...prevState, ...result.photos]);
        setTotalImages(result.total_results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    asyncWrapper();
  }, [query, page]);

  const getQuery = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const onHandleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Form onSubmit={getQuery} />
      {query === '' && <Text textAlign="center">Let`s begin search 🔎</Text>}
      {images.length > 0 && <PhotosGallery images={images} />}
      {images.length < totalImages && !isLoading && (
        <Button onClick={onHandleLoadMore}>Load more</Button>
      )}
    </>
  );
};
