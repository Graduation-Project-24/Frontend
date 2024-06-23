import React from "react";
import Input from "../../../component/Input/Input";
import "./Price.css";

function Price({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container ms-0">
        <input type="radio" onChange={handleChange} value="" name="priceFilter" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="0-50"
        title="$0-$50"
        name="priceFilter"
      />
      <Input
        handleChange={handleChange}
        value="50-100"
        title="$50-$100"
        name="priceFilter"
      />
      <Input
        handleChange={handleChange}
        value="100-150"
        title="$100-$150"
        name="priceFilter"
      />
      <Input
        handleChange={handleChange}
        value="150-1000"
        title="Over $150"
        name="priceFilter"
      />
    </div>
  );
}

export default Price;
