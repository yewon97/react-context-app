import React, { useState } from "react";

export default function SummaryPage() {
  const [checked, setChecked] = useState(false);

  const onChangeChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <form action="">
        <input
          type="checkbox"
          name=""
          id="confirm-checkbox"
          checked={checked}
          onChange={onChangeChecked}
        />{" "}
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button type="submit" disabled={!checked}>
          확인
        </button>
      </form>
    </div>
  );
}
