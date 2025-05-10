import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 onClick={handleBack}>{`<=`}Back to store</h1>
    </div>
  );
};

export default Cart; 
