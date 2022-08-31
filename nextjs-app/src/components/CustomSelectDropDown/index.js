import React, { useState } from "react";
import styled from "styled-components";

const CustomReactSelectDropDown = () => {
  //     const Main = styled("div")`
  //   font-family: sans-serif;
  //   background: #f0f0f0;
  //   height: 100vh;
  // `;

  const DropDownContainer = styled("div")`
  position:absolute;
  left:0px;
  top:-50px;
`;

  const DropDownHeader = styled("div")`
  margin-bottom: 0px;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: cyan;
`;

  const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

  const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  ${'' /* padding-left: 1em; */}
  background: #000;
  border: 2px solid #fff;
  box-sizing: border-box;
  color: cyan;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 10px;
  }
`;

  const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  color:#fff;
  &:hover {
    color: #000;
    background:cyan;
    cursor:pointer;
  }
`;
  const ArrowDown = styled("span")`
  display:inline-block;
  width:15px;
  height:15px;
  background-color:cyan;
  clip-path:polygon(0 0 , 100% 0% , 50% 100%)
`;

  const options = ["Mangoes", "Apples", "Oranges"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    // <Main>
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <ArrowDown />  {selectedOption || "Mangoes"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
    // </Main>
  );
}
export default CustomReactSelectDropDown