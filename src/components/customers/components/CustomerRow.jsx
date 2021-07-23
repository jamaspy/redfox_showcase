import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { getInitials } from "../utilities";
const CustomerRow = styled.div`
  ${tw`cursor-pointer font-poppins border border border-gray-300 grid grid-cols-11 gap-2 hover:bg-fox-green hover:text-white py-2 `};
`;
const Avatar = styled.div`
  ${tw`col-span-1 flex justify-center items-center text-2xl`};
`;
const Initials = styled.div`
  ${tw`font-poppins font-thin border flex justify-center items-center rounded-full h-12 w-12`};
`;
const Name = styled.div`
  ${tw`col-span-2 flex justify-center items-center text-2xl`};
`;
const Address = styled.div`
  ${tw`col-span-2 flex justify-center items-center text-2xl`};
`;
const Email = styled.div`
  ${tw`col-span-2 flex justify-center items-center text-2xl`};
`;
const Number = styled.div`
  ${tw`col-span-2 flex justify-center items-center text-2xl`};
`;
const Status = styled.div`
  ${tw`col-span-1 flex justify-center items-center text-2xl`};
`;
const Edit = styled.div`
  ${tw`col-span-1 flex justify-center items-center text-2xl`};
`;
const Customer = ({ name, address, number, email, status }) => {
  return (
    <CustomerRow>
      <Avatar>
        <Initials>{getInitials(name)}</Initials>
      </Avatar>
      <Name>{name}</Name>
      <Address>{address}</Address>
      <Number>{number}</Number>
      <Email>{email}</Email>
      <Status>{status}</Status>
      <Edit>Edit</Edit>
    </CustomerRow>
  );
};

export default Customer;
