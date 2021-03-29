import React, { useEffect } from 'react';
import M from 'materialize-css';
import image1 from '../../assets/pexels-bulbfish-1143754.jpeg';
import image2 from '../../assets/pexels-jatuphon-buraphon-348689.jpeg';
import image3 from '../../assets/pexels-maria-orlova-4947354.jpeg';
import logo from '../../assets/pexels-vegan-liftz-2377164.jpeg';

const Home = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.parallax');
    M.Parallax.init(elements);
  }, []);
  return (
    <>
      <div>
        <div className="row row-one">
          <div className="col s6 row-one-left">
            <div className="parallax-container">
              <div className="parallax">
                <img src={image1} alt="Vegan Food" className="" />
              </div>
            </div>
          </div>
          <div className="col s6 row-one-right">
            <div className="parallax-container">
              <div className="parallax">
                <img src={image2} alt="Lettuce Fiels" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-two">
          <div className="col s4 white row-two-left">
            <h2>Test Parallax</h2>
            <p>Demo for materialize css parallax</p>
          </div>

          <div className="col s4 row-two-center">
            <img src={logo} alt="Lettuce Fiels" className="" />
          </div>
          <div className="col s4 row-two-right">
            <img src={image3} alt="Lettuce Fiels" className="" />
          </div>
        </div>
      </div>
      <div className="container container-home">
        <div className="row row-three grey white-text">
          <h3>End of demo</h3>
        </div>
      </div>
    </>
  );
};
export default Home;
