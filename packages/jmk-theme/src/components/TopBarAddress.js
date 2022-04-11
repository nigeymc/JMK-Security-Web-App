import React from 'react';
import { styled } from "frontity"
import { FaMapMarkerAlt } from 'react-icons/fa';

const TbAdress = () => {
    return (

        <TopInfo>
            <li><FaMapMarkerAlt /> <p className="info-text">Sedennan, Loughmuck Road, Omagh, Co.Tyrone BT78 1SE</p>
            </li>
        </TopInfo>

    )
}

const TopInfo = styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
      
        li {
        position: relative;
        line-height: 10px;
        display: flex;
        margin-left: 0;
        padding-right: 15px;
        justify-content: center;
        @media (min-width: 992px) {
            justify-content: flex-start;
        }
        text-align: center;

        svg {
            font-size: 18px;
            position: relative;
            margin-right: 5px;
          }

          p.info-text {
            margin: 0;
            line-height: normal;
            display: inline-block;
            flex-direction: column;
          }
      }
`

export { TbAdress as default };