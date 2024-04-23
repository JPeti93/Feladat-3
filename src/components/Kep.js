import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Kep = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const randomImage = response.data.hits[Math.floor(Math.random() * response.data.hits.length)];
        setImageUrl(randomImage.largeImageURL);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Random kutya kep" />}
    </div>
  );
};

export default Kep;
