import React from "react";
import { styled } from "frontity";

const FooterAddress = () => {
  return (
    <FooterWidget className="col-lg-4 col-md-12 mt-5 mt-lg-0">
      <h3 className="widget-title">Find Us</h3>
      <address>
        Sedennan, <br />
        Loughmuck Road, <br />
        Omagh, Co.Tyrone <br />
        BT78 1SE
      </address>
      <p>
        Our services are available for hire in Antrim, Armagh, Carlow, Cavan,
        Clare, Cork, Derry, Donegal, Down, Dublin, Fermanagh, Galway, Kerry,
        Kildare, Kilkenny, Laois, Leitrim, Limerick, Longford, Louth, Mayo,
        Meath, Monaghan, Offaly, Roscommon, Sligo, Tipperary, Tyrone, Waterford,
        Westmeath, Wexford & Wicklow.
      </p>
    </FooterWidget>
  );
};

export { FooterAddress as default };

const FooterWidget = styled.div`
  .widget-title {
    font-size: 16px;
    font-weight: 700;
    position: relative;
    margin: 0 0 30px;
    padding-left: 15px;
    text-transform: uppercase;
    color: #fff;
    border-left: 3px solid #ed532b;
  }
`;
