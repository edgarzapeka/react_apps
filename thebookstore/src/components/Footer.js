import React from 'react';
import { Row, Col } from 'reactstrap';

import { footer_border } from './../styles/componenets/footer.scss';

const Footer = props => {

    return (
        <Row>
            <Col md="12" className={footer_border}></Col>
        </Row>
    );
};

export default Footer;