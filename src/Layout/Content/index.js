import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import ProductMenu from "../../components/ProductMenu";

// import { Container } from './styles';

function Content() {
  const [products] = useState([
    {
      name: "Apple Watch Series",
      company: "Apple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
      price: "100,00",
      rating: 3.4,
    },
    {
      name: "Apple Watch Series",
      company: "Apple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
      price: "100,00",
      rating: 3.4,
    },
    {
      name: "Apple Watch Series",
      company: "Apple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
      price: "100,00",
      rating: 3.4,
    },
    {
      name: "Apple Watch Series",
      company: "Apple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book.",
      price: "100,00",
      rating: 3.4,
    },
  ]);
  return (
    <div>
      <div className="bg-white d-flex justify-content-between align-items-center rounded p-2 shadow-sm only-desktop">
        <div className="d-flex ml-3">
          <i className="fal fa-check-square mr-2 icon-menu"></i>
          <i className="fal fa-comment-alt mr-2 icon-menu"></i>
          <i className="fal fa-envelope  mr-2 icon-menu"></i>
          <i className="fal fa-calendar  mr-2 icon-menu"></i>
          <i className="fal fa-star  mr-2 icon-menu"></i>
        </div>
        <div className="d-flex align-items-center  mr-3">
          <span className="mr-2 icon-menu">English</span>
          <i className="fal fa-bell mr-2 icon-menu"></i>
          <i className="fal fa-search mr-2 icon-menu"></i>
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column m-2">
              <span className="m-0">John Doe</span>
              <span className="small  text-right">Available</span>
            </div>
            <i className="fal fa-user-circle fa-2x" mr-1></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4 only-desktop">
        <div className="d-flex align-items-center">
          <div className="border-end border-dark mr-2">
            <h5 className="mr-2">Card Actions</h5>
          </div>
          <nav aria-label="breadcrumb ml-2">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">
                  <i className="far fa-home  mr-2"></i>
                </a>
              </li>
              <li class="breadcrumb-item">eCommerce</li>
              <li class="breadcrumb-item active" aria-current="page">
                Eletronics
              </li>
            </ol>
          </nav>
        </div>
        <div
          className="rounded-circle bg-dark d-flex align-items-center justify-content-center"
          style={{ width: 30, height: 30 }}
        >
          <i className="far fa-cog " style={{ color: "#fff" }}></i>
        </div>
      </div>
      <div className="mt-4">
        <div className="row col-md-12 mb-2">
          <div className="col-md-3">Filters</div>
          <div className="col-md-9">
            <div className="row col-md-12">
              <div className="col-md-8">
                <span>7,618 results found in 5ms</span>
              </div>
              <div className="col-md-4">
                <div className="d-flex">
                  <select
                    class="form-select form-select-sm mr-2"
                    name="category"
                    id=""
                  >
                    <option value="default">Default</option>
                  </select>
                  <button className="btn btn-light shadow-sm mr-2">
                    <i class="fal fa-grip-horizontal"></i>
                  </button>
                  <button className="btn btn-light shadow-sm">
                    <i class="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-12">
          <ProductMenu />
          <div className="col-md-9">
            <div class="input-group mb-3 shadow-sm">
              <input
                type="text"
                class="form-control"
                style={{ borderColor: "#fff" }}
                placeholder="Search hear"
              />
              <button class="btn bg-white" type="button" id="button-addon2">
                <i className="far fa-search "></i>
              </button>
            </div>
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
