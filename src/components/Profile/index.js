import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProfileContainer from './ProfileContainer';
import RentContainer from './RentContainer';
import OrderContainer from './OrderContainer';

const Profile = () => (
  <Container fluid={true}>
    <Row>
      <ProfileContainer />
      <Col xs={12} sm={12} md={8} lg={9}>
        <RentContainer />
        <OrderContainer />
      </Col>
    </Row>
  </Container>
);

export default Profile;
