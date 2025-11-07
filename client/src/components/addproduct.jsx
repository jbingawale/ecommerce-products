import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../services/productSlice";
import "./addproduct.css";
import { convertKeysToSnakeCase } from '../services/utility'

const AddProductForm = () => {
    const navigate = useNavigate()
  const [addProduct, { isLoading: isAdding, isSuccess, isError, error }] = useAddProductMutation();

  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    category: "",
    stockStatus: "in-stock", // Default value
  });

  const stockOptions = ["in-stock", "low-stock", "out-of-stock"];

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Convert form data keys from camelCase to snake_case
    // const submissionData = convertKeysToSnakeCase(formData);

    try {
      await addProduct(formData).unwrap();

      setFormData({
        productName: "",
        price: "",
        category: "",
        stockStatus: "in-stock",
      });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit} className="add-product-form">
        {/* Product Name (product_name) */}
        <div className="field-wrapper">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price (price) */}
        <div className="field-wrapper">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0.01"
            step="0.01"
          />
        </div>

        {/* Category (category) */}
        <div className="field-wrapper">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        {/* Stock Status (stock_status) */}
        <div className="field-wrapper">
          <label htmlFor="stockStatus">Stock Status</label>
          <select
            name="stockStatus"
            id="stockStatus"
            value={formData.stockStatus}
            onChange={handleChange}
            required
          >
            {stockOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() +
                  option.slice(1).replace(/-/g, " ")}
              </option>
            ))}
          </select>
        </div>

        {isSuccess && (
          <p className="text-green-600 mt-2">✅ Product added successfully!</p>
        )}
        {isError && (
          <p className="text-red-600 mt-2">❌ Error: {error?.message}</p>
        )}

        <div className="field-wrapper">
          <button type="submit" disabled={isAdding} className="btn btn-success">
            {isAdding ? "Adding..." : "Save Product"}
          </button>
          <button type="submit" onClick={handleBackButtonClick} className="btn btn-success">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
