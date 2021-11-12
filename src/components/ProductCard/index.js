import React from "react";
import SampleProduct from "../../assets/img/sample-product.png";

function ProductCard({ product }) {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <div className="row col-md-12">
            <div className="col-md-2 d-flex align-items-center mb-3">
              <img src={SampleProduct} alt="Produto" width="100%" />
            </div>
            <div className="col-md-7 border-end border-dark">
              <h5 className="card-title">{product.name}</h5>
              <span className="small">By {product.company}</span>
              <p className="card-text">{product.description}</p>
            </div>
            <div className="col-md-3">
              <div className="text-right">
                <span className="badge bg-secondary">
                  {product.rating} <i className="far fa-star"></i>
                </span>
              </div>
              <div className="text-center mt-2">
                <span>R$ {product.price}</span>
                <br />
                <span className="small">
                  <i className="fal fa-shopping-cart"></i> Free Shipping
                </span>
                <div className="mt-2">
                  <button className="btn btn-light w-100 mb-2">
                    <i className="fal fa-heart"></i> Wishlist
                  </button>
                  <button className="btn btn-primary  w-100">
                    <i className="far fa-box-check"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
