import React from "react";

const LisrGroup = (props) => {
  const {
    items,
    onItemSelect,
    textProperty,
    valueProperty,
    selectedItem,
  } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

LisrGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default LisrGroup;
