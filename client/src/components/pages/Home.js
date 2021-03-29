import React from 'react';
import { Parallax } from 'react-materialize';
import image1 from '../../assets/pexels-bulbfish-1143754.jpeg';
import image2 from '../../assets/pexels-jatuphon-buraphon-348689.jpeg';
import image3 from '../../assets/pexels-maria-orlova-4947354.jpeg';
import logo from '../../assets/pexels-vegan-liftz-2377164.jpeg';

const Home = () => {
  return (
    <div>
      <Parallax
        image={<img alt="" src={image1} />}
        options={{
          responsiveThreshold: 5,
        }}
      />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
      <Parallax
        image={<img alt="" src={image2} />}
        options={{
          responsiveThreshold: 0,
        }}
      />
    </div>
  );
};
export default Home;
