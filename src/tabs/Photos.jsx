import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (query === '') return;

    async function setGallery() {
      setIsLoading(true);
      const data = await getPhotos(query, page);
      if (!data.photos) {
        setIsError(true);
      }
      setImages(data.photos);
    }

    setGallery();
    setIsLoading(false);
  }, [query, page]);

  const uploadMorePhotos = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Form onSubmit={setQuery} />
      {images.length > 0 && !isLoading && !isError && (
        <PhotosGallery images={images} />
      )}
      {isLoading && <Loader />}
      {isError && <p>Oops... Something went wrong...</p>}
      <Button onClick={uploadMorePhotos} disabled={false}>
        <p>Load more</p>
      </Button>
    </>
  );
};

export default Photos;
