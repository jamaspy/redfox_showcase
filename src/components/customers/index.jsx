import React from "react";
import { CustomerRow } from "./components";
import { customers } from "../../data/customers";
const index = () => {
  return (
    <div>
      {customers.map((c, i) => (
        <CustomerRow
          key={i}
          name={c.name}
          address={c.address}
          number={c.number}
          email={c.email}
          status={c.status}
        />
      ))}
    </div>
  );
};

export default index;
