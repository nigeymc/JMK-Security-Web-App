import React from "react";
import { styled } from "frontity";
import { Badge, Col } from "reactstrap";

const Categories = ({ category }) => {
  return (
    <BadgeSpacer>
      <Badge color="secondary" pill>
        {category}
      </Badge>
    </BadgeSpacer>
  );
};

export { Categories as default };

const BadgeSpacer = styled.div`
  display: inline-flex;
  padding-right: 5px;

  span {
    background-color: #43486d !important;
  }
`;
