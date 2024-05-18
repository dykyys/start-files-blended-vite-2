// import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery } from 'components';
import { useState } from 'react';

export const Photos = () => {
  const [images, setImages] = useState([]);
  const getQuery = query => {
    console.log(query);
  };
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={getQuery} />
      <PhotosGallery images={images} />
    </>
  );
};
