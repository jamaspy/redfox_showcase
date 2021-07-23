import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  ${tw`bg-fox-blue p-6 static flex flex-row items-center justify-center relative`}
`;

export const StyledLink = styled.p`
  ${tw`text-2xl text-white mx-4 mb-0 hover:border-b`}
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <img src={Logo} width="50px" alt="redfox" className="absolute left-4" />
      <Link to="dashboard">
        <StyledLink>Dashboard</StyledLink>
      </Link>
      <Link to="customers">
        <StyledLink>Customers</StyledLink>
      </Link>
      <Link to="customers">
        <StyledLink>Partners</StyledLink>
      </Link>
      {children}
    </StyledHeader>
  );
};

export default Header;
