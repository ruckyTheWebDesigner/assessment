import productImage from "./assets/product-image.png";
import { useState, useRef } from "react";
import { GrNext } from "react-icons/gr";

import MockData from "./data/MockData";

function App() {
  const [productData, setProductData] = useState(MockData);

  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className='App'>
        <section className='section-wrapper'>
          <div className='product-img'>
            <img src={productImage} alt='product-img' />
          </div>
          <div className='product-wrapper'>
            <div className='product-title'>
              <h1>
                Everyday items, we have something to suit every occassion.
              </h1>
              <p>
                At suspendisse augue lectus arcu, accumsan ut sit poseuere vitae
                sit tincidunt semper eu proin gravida cursus.
              </p>
              <a href='/#'>Shop All Everyday Items</a>
            </div>

            <div className='products' ref={ref}>
              <button className='scroll-btn' onClick={() => scroll(20)}>
                <GrNext />
              </button>
              {productData.map((product) => {
                return (
                  <div className='product-card' key={product.id}>
                    <img src={product.productImg} alt='' />
                    <div className='product_description'>
                      <p>{product.name}</p>
                      <div className='product-price_color'>
                        <span className='product_price'>{product.price}</span>
                        <div className='swatches'>
                          <span
                            className='dot'
                            style={{
                              backgroundColor: product.avaliableColors[0],
                            }}></span>
                          <span
                            className='dot'
                            style={{
                              backgroundColor: product.avaliableColors[1],
                            }}></span>
                          <span
                            className='dot'
                            style={{
                              backgroundColor: product.avaliableColors[2],
                            }}></span>
                          <span
                            className='dot'
                            style={{
                              backgroundColor: product.avaliableColors[3],
                            }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
