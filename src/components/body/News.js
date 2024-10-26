import React from 'react';
import './Card.css'; // Import your CSS file

const News = () => {
  return (
    <div className="card">
      <div className="card-img"></div> {/* Image placeholder */}
      <div className="card-content">
        <div className="content-capsules">
          <span>Topic 1</span>
          <span>Topic 2</span>
        </div>
        <div className="content-head">
          <h2>Card Heading</h2>
        </div>
        <div className="content-body">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            debitis aut sequi quaerat. Nobis deleniti quibusdam perspiciatis
            perferendis dicta. Dicta, quia voluptas. Quos amet cupiditate pariatur
            perspiciatis ipsa optio accusamus. Dignissimos dolore incidunt
            deleniti, illo quam quis quas reprehenderit aliquid tenetur sapiente
            aperiam ea, ex facere nisi soluta nostrum voluptatem perferendis
            asperiores libero, at sint mollitia?
          </p>
        </div>
        <div className="button">
          <button><b>Read More</b></button>
        </div>
      </div>
    </div>
  );
};

export default News;
        