import React from 'react';
import { connect, styled } from "frontity";
import Link from "./Link";
import { FaAngleRight } from 'react-icons/fa';

const FooterServices = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}`).items;
    const [, services, , , ,] = items;

    return (
        <FooterWidget className="col-lg-4 col-md-12 mt-5 mt-lg-0">
            <h3 className="widget-title">Our Services</h3>
            <ul className="list-arrow">
                {services.child_items.map((service) => <li key={service.ID}><Link title={service.title} link={service.url}><FaAngleRight />{service.title}</Link></li>)}
            </ul>
        </FooterWidget>
    )
}

export default connect(FooterServices);

const FooterWidget = styled.div`

.widget-title {
    font-size: 16px;
    font-weight: 700;
    position: relative;
    margin: 0 0 30px;
    padding-left: 15px;
    text-transform: uppercase;
    color: #fff;
    border-left: 3px solid #ED532B;
  }
  
/* Links */
ul.list-arrow {
    list-style: none;
    padding: 0;

    li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        padding: 8px 0;
    }

    li:last-child {
        border-bottom: 0;
    }

    li a, li:before {
        margin-right: 10px;
        font-size: 15px;
    }

    li:hover a,
    li:hover {
        color: #ED532B;
    }
}
  
`
