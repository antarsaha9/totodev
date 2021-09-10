import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import brandLogo from "../../../assets/images/brand/logo1.png";
import GlobalHeaderContext from "../../../context/GlobalHeaderContext";
import NestedMenu from "../NestedMenu";
import Offcanvas from "../Offcanvas";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const SiteHeader = styled.header`
  .smllogo {
    margin-top: 5px;
  }
  .smllogo {
    margin-top: 5px;
  }
`;

const ToggleButton = styled.button``;
const HeaderButton = styled.button`
  font-size: 14px !important;
  margin: 10px 0;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  color: #fff !important;
  background-color: #f84242;
  border-color: #f84242;
  box-shadow: 0 5px 10px rgb(248 66 66 / 30%);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 9px 20px;
  line-height: 1.538;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 3px;
  min-height: 38px;
  min-width: 172px;
  font-weight: 400;
  letter-spacing: 0.03em;
  font-size: 0.8125rem;
  min-width: 2.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  &:hover {
    color: #fff;
    background-color: #f34a4a;
    border-color: #f34a4a;
  }
`;

const Header = () => {
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [isAlive, setAlive] = useState(true);

  const gContext = useContext(GlobalHeaderContext);

  useScrollPosition(({ prevPos, currPos }) => {
    if (isAlive) {
      if (currPos.y < 0) {
        setShowScrolling(true);
      } else {
        setShowScrolling(false);
      }
      if (currPos.y < -300) {
        setShowReveal(true);
      } else {
        setShowReveal(false);
      }
    }
  });

  useEffect(() => {
    return () => setAlive(false);
  }, []);

  return (
    <>
      <div className="headerstyle1">
        <div
          className={
            !gContext.header.bannerClasses
              ? "banner-1 bg-background2 cover-image"
              : `${gContext.header.bannerClasses} cover-image`
          }
          // style={{backg}}
        >
          <div className="header-main">
            <HeaderTop />
            <HeaderMiddle />
            <div
              className={`sticky-wrapper ${showScrolling ? "scrolling" : ""} ${
                showReveal ? "reveal-header " : ""
              }`}
              style={{ height: "60px" }}
            >
              <SiteHeader className="header-style horizontal-main bg-dark-transparent clearfix">
                <Container
                  className={`horizontal-mainwrapper ${gContext.header.headerClassName}`}
                >
                  <nav className="horizontalMenu clearfix d-md-flex">
                    <Menu />
                    <HeaderButton
                      className="btn btn-danger d-flex align-items-center justify-content-center mt-2 mb-2 "
                      href="/"
                      as="a"
                    >
                      <i className="fa fa-cart-plus mr-2 text-white fs-16"></i>
                      Become a Seller
                    </HeaderButton>
                  </nav>
                </Container>
              </SiteHeader>
            </div>

            <div
              className="sticky-wrapper "
              // style={{ height: "31.5781px" }}
              className={`sticky-wrapper ${showScrolling ? "scrolling" : ""} ${
                showReveal ? "reveal-header " : ""
              }`}
            >
              <div
                className="horizontal-header clearfix "
                style={{ width: 434 }}
              >
                <div className="container">
                  <a
                    id="horizontal-navtoggle"
                    className="animated-arrow"
                    onClick={() => gContext.toggleOffCanvas()}
                  >
                    <span />
                  </a>
                  <span className="smllogo">
                    <img src={brandLogo.src} width={120} alt="img" />
                  </span>
                  <span className="smllogo-white">
                    <img src={brandLogo.src} width={120} alt="img" />
                  </span>
                  <a href="tel:245-6325-3256" className="callusbtn">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="d-block d-lg-none">
              <Offcanvas
                show={gContext.visibleOffCanvas}
                onHideOffcanvas={gContext.toggleOffCanvas}
              >
                <NestedMenu />
              </Offcanvas>
            </div>
          </div>
          {gContext.header.bannerSearch ? (
            <section>
              <div className="sptb-2 sptb-tab">
                <div className="header-text mb-0">
                  {gContext.header.bannerSearch}
                </div>
              </div>
            </section>
          ) : null}

          {gContext.header.bannerInner ? gContext.header.bannerInner : null}
        </div>
      </div>
      {gContext.header.seperateBredcrumb
        ? gContext.header.seperateBredcrumb
        : null}
    </>
  );
};
export default Header;
