import React, { useState } from "react";

// import { Container } from './styles';

function ProductMenu() {
  const [categories] = useState([
    { name: "Cell Phones" },
    { name: "Computer and Tablets" },
    { name: "Cell Phone Accessories" },
    { name: "Appliance" },
    { name: "Audio" },
    { name: "Iphone Accessories" },
  ]);
  const [brands] = useState([
    { name: "Insigni" },
    { name: "Samsung" },
    { name: "Apple" },
    { name: "HP" },
    { name: "Sony" },
    { name: "Metra" },
  ]);
  return (
    <div className="col-md-3 bg-white rounded p-3 mb-3">
      <div>
        <p>
          <b>Multi Range</b>
        </p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="multirange"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            $10
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="multirange"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            $10-$100
          </label>
        </div>
        <div class="form-check disabled">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="multirange"
            value="option3"
          />
          <label class="form-check-label" for="exampleRadios3">
            $100-$500
          </label>
        </div>
        <div class="form-check disabled">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="multirange"
            value="option3"
          />
          <label class="form-check-label" for="exampleRadios3">
            $500
          </label>
        </div>
        <div class="form-check disabled">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="multirange"
            value="option3"
          />
          <label class="form-check-label" for="exampleRadios3">
            All
          </label>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p for="customRange1" class="form-label">
          <b>Slider</b>
        </p>
        <p for="customRange1" class="form-label">
          <b>1.99 - 4098</b>
        </p>
      </div>
      <input type="range" class="form-range" id="customRange1" />
      <hr />
      <p>
        <b>Category</b>
      </p>
      {categories.map((category) => (
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            {category.name}
          </label>
        </div>
      ))}
      <hr />
      <p>
        <b>Brands</b>
      </p>
      {brands.map((brand) => (
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            {brand.name}
          </label>
        </div>
      ))}
      <hr />
      <p>
        <b>Rating</b>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex mt-2">
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>& Up
          </div>
          <b>8500</b>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex mt-2">
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="far fa-star  mr-2"></i>& Up
          </div>
          <b>3250</b>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex mt-2">
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="fas fa-star  mr-2"></i>
            <i className="far fa-star  mr-2"></i>
            <i className="far fa-star  mr-2"></i>& Up
          </div>
          <b>1120</b>
        </div>
      </p>
    </div>
  );
}

export default ProductMenu;
