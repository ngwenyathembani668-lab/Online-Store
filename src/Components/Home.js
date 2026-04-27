import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='hero'>

      <section className='hero-section'>
        <div className='overlay'></div>
        <h1>Streetwear for the next generation</h1>
        <Link to={'/Products'}>
          <button className='cta'>
            View Products
          </button>
        </Link>
      </section>

      <section className="category">

        <div className="category-list">
          <img src="https://img.ltwebstatic.com/v4/j/spmp/2025/06/21/70/1750505463994e98d021a7ce3ff2e01738599eb794_thumbnail_900x.webp" alt='' />
          <span>Hoodies</span>
        </div>

        <div className="category-list">
          <img src="https://img.ltwebstatic.com/images3_spmp/2024/08/31/04/1725069367d67dc55a5824dbb82dc5d4364997772a_thumbnail_900x.webp" alt='' />
          <span>Mens T-shirts</span>
        </div>

        <div className="category-list">
          <img src="https://img.ltwebstatic.com/v4/j/spmp/2025/07/02/ce/1751419061371e1a1566376ce95ea337bcc3920b63_thumbnail_900x.webp" alt='' />
          <span>Women's Sneakers</span>
        </div>

        <div className="category-list">
          <img src="https://img.ltwebstatic.com/images3_spmp/2024/10/09/48/1728464455f806c54cfe17d58f008725559a7684d0_thumbnail_900x.webp" alt='' />
          <span>Accessories</span>
        </div>

      </section>

    </div>
  );
};

export default Home;
