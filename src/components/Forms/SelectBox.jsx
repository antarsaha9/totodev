import { FocusableItem, Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  .rc-menu-button {
    border-radius: 4px !important;
    background: transparent;
    width: 100%;
    border: 1px solid #eaebf7;
    text-align: left;
    height: 41px;
    position: relative;
    &:after {
      border-color: #677294 transparent transparent transparent;
      border-style: solid;
      border-width: 5px 4px 0 4px;
      height: 0;
      right: 2%;
      margin-left: -12px;
      margin-top: -2px;
      position: absolute;
      top: 50%;
      width: 0;
      content: "";
    }
  }
  .rc-menu-container {
    width: 100%;
  }
  .rc-menu {
    width: 100%;
    padding: 0;
  }
  .rc-menu__item--focusable {
    padding: 4px;
    min-height: 37px;
    input {
      padding: 4px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #eaebf7 !important;
    }
  }
`;

const SelectBox = ({
  data = [],
  defaultValue = "Select",
  filterBox,
  setFieldValue,
  name,
}) => {
  const [filter, setFilter] = useState("");
  const [value, setvalue] = useState(defaultValue);

  useEffect(() => {
    setvalue(defaultValue);
  }, [defaultValue]);

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleMenuClick = (item) => () => {
    setvalue(item);
    console.log(item);
    if (name && setFieldValue) setFieldValue(name, item);
  };

  return (
    <MenuWrapper>
      <Menu
        menuButton={<MenuButton>{value}</MenuButton>}
        onChange={(e) => e.open && setFilter("")}
      >
        {filterBox ? (
          <FocusableItem>
            {({ ref }) => (
              <input
                ref={ref}
                type="text"
                placeholder="Type to filter"
                value={filter}
                onChange={handleFilterChange}
              />
            )}
          </FocusableItem>
        ) : null}

        {data
          .filter((fruit) =>
            fruit.toUpperCase().includes(filter.trim().toUpperCase())
          )
          .map((fruit, index) => (
            <MenuItem key={fruit + index} onClick={handleMenuClick(fruit)}>
              {fruit}
            </MenuItem>
          ))}
      </Menu>
    </MenuWrapper>
  );
};
export default SelectBox;
