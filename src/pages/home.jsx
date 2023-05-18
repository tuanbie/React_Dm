import Hero from "../components/Hero";
import Food from "../components/Singer";
import HeadlineCards from "../components/HeadlineCards";
import React, { useState } from 'react';

function Home() {
  // const [getImgae, setSelectedImage] = useState(null);

  // const choseImage = (tm) => {
  //   setSelectedImage(tm);
  // };
  return (
    <div>
      <Hero/>
      <Food />
      <HeadlineCards />
    </div>
  );
}

export default Home;
