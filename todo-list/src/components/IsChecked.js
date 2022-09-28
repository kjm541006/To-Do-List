import React from "react";

const IsChecked = (props) => {
  const onChangeCheckbox = () => {
    props.onChange();
  };

  return (
    <>
      <input type="checkbox" checked={props.checked} onChange={onChangeCheckbox} />
    </>
  );
};

export default IsChecked;
