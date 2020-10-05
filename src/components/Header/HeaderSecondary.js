import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import styled from "styled-components";

const HeaderSecondaryMain = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  position: relative;
  flex: 1;
  height: 60px;
`;

const SearchWrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.isFocus ? "-30%" : "5%")};
  right: ${(props) => (props.isFocus ? "-30%" : "5%")};
  box-shadow: ${(props) =>
    props.isFocus ? "0 20px 30px 10px rgba(0,0,0,.1)" : "none"};
  top: 10px;
  font-size: 0.8rem;
  display: inline-block;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  border-radius: 22px;
`;

const Input = styled.input`
  outline: none;
  border: 0px;
  height: 40px;
  padding: 0 25px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: ${(props) => (props.isFocus ? "1px solid #e2e2e2" : "none")};
`;

const Placeholders = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: ${(props) => (props.isFocus ? "5px" : "40%")};
  transition: left 0.3s ease-in-out;
`;

const SearchIcon = styled(FaSearch)`
  align-self: center;
  cursor: inherit;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  font-size: medium;
`;

const SearchList = styled.div`
  width: 100%;
  background-color: #fff;
  height: ${(props) => (props.isFocus ? "170px" : "0px")};
  transition: all 0.3s ease-in-out 0.3s;
  z-index: 100;
`;

const Label = styled.label`
  cursor: inherit;
  margin-left: 0.5rem;
  opacity: ${(props) => (props.isFocus ? "0" : "1")};
  transition: opacity 0.3s ease-in-out;
  font-weight: 300;
`;

const ClearWrapper = styled.span`
  align-items: center;
  position: absolute;
  right: ${(props) => (props.isFocus ? "0" : "100px")};
  top: 5px;
  margin-right: 10px;
  display: ${(props) => (props.isFocus ? "flex" : "none")};
  transition: all 0.3s ease-in-out 0.3s;
`;

const Clear = styled.label`
  font-weight: 100;
  margin-right: 10px;
`;

const ClearIcon = styled(IoMdCloseCircle)`
  margin: 5px;
  color: #2bc5b4;
  font-size: 20px;
`;

function HeaderSecondary() {
  const [toggleInput, setToggleInput] = useState(false);

  return (
    <HeaderSecondaryMain>
      <Form action="#">
        <SearchWrapper
          isFocus={toggleInput}
          onClick={() => setToggleInput((state) => !state)}
        >
          <Input isFocus={toggleInput} type="text" />
          <SearchList isFocus={toggleInput}>
            <div>Helo</div>
          </SearchList>
          <Placeholders isFocus={toggleInput}>
            <SearchIcon isFocus={toggleInput} />
            <Label isFocus={toggleInput}>Search</Label>
          </Placeholders>
          <ClearWrapper isFocus={toggleInput}>
            <Clear>Clear</Clear>
            <ClearIcon />
          </ClearWrapper>
        </SearchWrapper>
      </Form>
    </HeaderSecondaryMain>
  );
}

export default HeaderSecondary;
