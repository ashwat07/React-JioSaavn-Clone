import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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
  left: ${(props) => (props.isfocus ? "-30%" : "5%")};
  right: ${(props) => (props.isfocus ? "-30%" : "5%")};
  box-shadow: ${(props) =>
    props.isfocus ? "0 20px 30px 10px rgba(0,0,0,.1)" : "none"};
  top: 10px;
  font-size: 0.8rem;
  display: inline-block;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  border-radius: 22px;
  padding: ${(props) => (props.isfocus ? "1rem" : "0")};
  background-color: #fff;
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
  border-bottom: ${(props) => (props.isfocus ? "1px solid #e2e2e2" : "none")};
`;

const Placeholders = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: ${(props) => (props.isfocus ? "20px" : "10px")};
  left: ${(props) => (props.isfocus ? "5px" : "40%")};
  transition: left 0.3s ease-in-out;
`;

const SearchIcon = styled(FaSearch)`
  align-self: center;
  cursor: inherit;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  font-size: medium;
  margin: 5px;
`;

const SearchListWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  height: ${(props) => (props.isfocus ? "275px" : "0px")};
  transition: all 0.3s ease-in-out 0.3s;
  z-index: 100;
  padding: ${(props) => (props.isfocus ? "1.5rem" : "0rem")};
`;

const SearchList = styled.div`
  width: 100%;
`;

const SearchListImgWrapper = styled.div`
  width: 30%;
  display: inline-block;
  vertical-align: middle;
`;

const Figure = styled.figure`
  display: flex;
  align-items: center;
  margin: 0.3rem;
`;

const FigCaption = styled.figcaption`
  margin: 5px;
`;

const SongName = styled.h4`
  font-size: 0.86667rem;
  line-height: 1.4;
  color: #3e3e3e;
  background-color: transparent;
  opacity: 0.8;
`;

const SongCategory = styled.p`
  opacity: 0.5;
  margin-top: 2px;
`;

const Img = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

const Label = styled.label`
  cursor: inherit;
  margin-left: 0.5rem;
  opacity: ${(props) => (props.isfocus ? "0" : "1")};
  transition: opacity 0.3s ease-in-out;
  font-weight: 300;
`;

const ClearWrapper = styled.span`
  align-items: center;
  position: absolute;
  right: ${(props) => (props.isfocus ? "0" : "100px")};
  top: ${(props) => (props.isfocus ? "20px" : "0")};
  margin-right: 10px;
  display: ${(props) => (props.isfocus ? "flex" : "none")};
  transition: all 0.1s ease-in-out 0.3s;
  cursor: pointer;
`;

const Clear = styled.label`
  font-weight: 100;
  margin-right: 10px;
  cursor: inherit;
`;

const ClearIcon = styled(IoMdCloseCircle)`
  margin: 5px;
  color: #2bc5b4;
  font-size: 20px;
  cursor: inherit;
  &:hover {
    color: #258f83;
  }
`;

const Trending = styled.h5`
  opacity: 0.5;
  font-size: 0.8rem;
  line-height: 1.83333;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const searchList = [
  {
    id: uuidv4(),
    name: "Tum Hi Aana",
    category: "Song",
    img:
      "https://c.saavncdn.com/287/Tum-Hi-Aana-From-Marjaavaan--Hindi-2019-20191003024542-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Aashiqui 2",
    category: "Album",
    img: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Rockstar",
    category: "Album",
    img: "https://c.saavncdn.com/274/Rockstar-2011-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Arijit Singh",
    category: "Artist",
    img: "https://c.saavncdn.com/artists/Arijit_Singh_150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Atif Aslam",
    category: "Artist",
    img: "https://c.saavncdn.com/artists/Atif_Aslam_150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Aashiqui 2",
    category: "Album",
    img: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Aaj Bhi",
    category: "Song",
    img:
      "https://c.saavncdn.com/710/Aaj-Bhi-Hindi-2020-20200407000137-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Kabir Singh",
    category: "Album",
    img:
      "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Love Aaj Kal",
    category: "Album",
    img:
      "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Kabir Singh",
    category: "Album",
    img:
      "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20190614075009-150x150.jpg",
  },
  {
    id: uuidv4(),
    name: "Love Aaj Kal",
    category: "Album",
    img:
      "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-150x150.jpg",
  },
];

function HeaderSecondary() {
  const [toggleInput, setToggleInput] = useState(false);
  const outsideRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputClick = () => setToggleInput((toggle) => !toggle);

  const handleClickOutside = (e) => {
    if (!outsideRef.current.contains(e.target)) setToggleInput(false);
  };

  return (
    <HeaderSecondaryMain>
      <Form action="#">
        <SearchWrapper isfocus={toggleInput} ref={outsideRef}>
          <Input isfocus={toggleInput} type="text" onClick={handleInputClick} />
          <SearchListWrapper isfocus={toggleInput}>
            <Trending>Trending</Trending>
            <SearchList>
              {searchList.map(({ id, name, category, img }) => (
                <SearchListImgWrapper key={id}>
                  <Figure>
                    <Img src={img} />
                    <FigCaption>
                      <SongName>{name}</SongName>
                      <SongCategory>{category}</SongCategory>
                    </FigCaption>
                  </Figure>
                </SearchListImgWrapper>
              ))}
            </SearchList>
          </SearchListWrapper>
          <Placeholders isfocus={toggleInput}>
            <SearchIcon />
            <Label isfocus={toggleInput}>Search</Label>
          </Placeholders>
          <ClearWrapper isfocus={toggleInput}>
            <Clear>Clear</Clear>
            <ClearIcon onClick={handleInputClick} />
          </ClearWrapper>
        </SearchWrapper>
      </Form>
    </HeaderSecondaryMain>
  );
}

export default HeaderSecondary;
