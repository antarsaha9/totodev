import React from "react";
import { Container, Row } from "react-bootstrap";
import PricCard from "./components/Card";
import PaymentMethodTab from "../../../components/Widgets/PaymentMethodWidget";
const creditsSection = () => {
  return (
    <Container className="spb">
      <Row>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row">
            <div className="col">
              <PricCard title="Small" price="10" />
            </div>
            <div className="col">
              <PricCard title="Medium" price="20" />
            </div>
            <div className="col">
              <PricCard title="Big" price="50" />
            </div>
            <div className="col">
              <PricCard title="Premium" price="100" />
            </div>
            <div className="col">
              <PricCard title="Diamond" price="500" />
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <PaymentMethodTab
            title="Payment Method & Confirmation"
            classBtnOne="btn-secondary"
            classBtnTwo="btn-secondary"
          />
        </div>
      </Row>
    </Container>
  );
};

export default creditsSection;
