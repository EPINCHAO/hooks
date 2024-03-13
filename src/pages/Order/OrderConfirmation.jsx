import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Order Confirmation</h1>
      <button onClick={handleNavigate}> Go Back</button>
    </div>
  );
};

export default OrderConfirmation;
