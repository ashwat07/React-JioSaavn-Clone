import React, { Fragment } from "react";
import styled from "styled-components";
import { FaHistory, FaPodcast } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { MdAlbum } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

const Wrapper = styled.div`
  flex: 0 0 20%;
  position: relative;
  z-index: 999;
`;

const Aside = styled.aside`
  position: fixed;
  top: 61px;
  left: 0;
  /* z-index: 10; */
  padding: 99px 11px 0 44px;
  margin-bottom: 8rem;
  /* overflow: hidden; */
`;

const H3 = styled.h3`
  text-transform: uppercase;
  color: #828da8;
  font-size: 0.7rem;
  line-height: 1.83333;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const UL = styled.ul`
  list-style: none;
  margin-bottom: 2.2rem;
  margin-top: 12px;
  font-size: 0.9rem;
`;

const LI = styled.li`
  /* display: block; */
  padding: 8px;
`;

const IconSpan = styled.span`
  margin-right: 5px;
`;

const Btn = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 100px;
  border: 1px solid #2bc5b4;
  padding: 0.8rem;
  color: #2bc5b4;

  &:hover {
    color: #258f83;
  }
`;

const BtnSpan = styled.span`
  /* padding: 0.8rem; */
  font-size: inherit;
  display: flex;
`;

const PlusIcon = styled(IoIosAdd)``;

const navOptions = [
  { id: 1, label: "History", icon: <FaHistory /> },
  { id: 2, label: "Songs", icon: <BsMusicNote /> },
  { id: 3, label: "Albums", icon: <MdAlbum /> },
  { id: 4, label: "Podcasts", icon: <FaPodcast /> },
  { id: 5, label: "Artists", icon: <GiMicrophone /> },
];

function Sidebar() {
  return (
    <Wrapper>
      <Aside>
        <H3>Library</H3>
        <Nav>
          <UL>
            {navOptions.map(({ id, label, icon }) => (
              <Fragment key={id}>
                <LI>
                  <IconSpan>{icon}</IconSpan>
                  {label}
                </LI>
              </Fragment>
            ))}
          </UL>
        </Nav>
        <Btn>
          <BtnSpan>
            <PlusIcon />
            New Playlist
          </BtnSpan>
        </Btn>
      </Aside>
    </Wrapper>
  );
}

export default Sidebar;
