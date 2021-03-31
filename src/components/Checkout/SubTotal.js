import React from "react";
import { useStateValue } from "../Context/StateProvider";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { getCartTotal } from "../Context/Reducer";
const SubTotal = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({cart?.length} items): <strong>{`${value}::`}</strong>
            </p>
            <small>
              <input type="checkbox" />
              <span className="subtotal_input">This Order Contains gift</span>
            </small>
          </>
        )}
        decimalScale={"2"}
        value={getCartTotal(cart)}
        displayType={"text"}
        prefix={"₹"}
        thousandSeparator={true}
      />
      <button>Checkout</button>
    </div>
  );
};

export default SubTotal;
