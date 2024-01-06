import React from "react";
import Type from "../../components/Type";

export default function OrderPage() {
  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType={"products"} />
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ flex: 1 }}>
          <Type orderType={"options"} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Total Price : </h2>
          <button type="button">주문</button>
        </div>
      </div>
    </div>
  );
}
