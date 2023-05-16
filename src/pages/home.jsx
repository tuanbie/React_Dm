import Hero from "../components/Hero";
import Food from "../components/Singer";
import HeadlineCards from "../components/HeadlineCards";
import React, { useState } from 'react';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const choseImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div>
      <Hero selectedImage={selectedImage} />
      <Food onImageSelect={choseImage} />
      <HeadlineCards />
    </div>
  );
}

export default Home;
