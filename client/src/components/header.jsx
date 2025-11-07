import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleAddFormClick = () => {
    navigate("/addproduct");
  };

  return (
    <div className="header">
      <h1>Product List</h1>
      <button
        type="button"
        className="btn btn-success add-btn"
        onClick={handleAddFormClick}
      >
        Add Product
      </button>
    </div>
  );
};

export default Header;
