import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ProductCard from "../../../components/Cards/ProductCard";
import {allProduct,htmlProduct,wordpressProduct,phpProduct,angularProduct,psdProduct} from "./data/index";

const FeaturedTemplateSection = () =>{
  return (
    <section className="sptb">
      <div className="container">
        <div className="section-title center-block text-center">
          <h2>Featured Templates</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="panel panel-primary">
            <div>
              <div className="tabs-menu ">
                {/* Tabs */}
                <Nav
                  variant="pills"
                  className="flex-column"
                  className="nav panel-tabs eductaional-tabs mb-6"
                  as="ul"
                >
                  <li>
                    <Nav.Link eventKey="first">All</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link eventKey="second">HTML</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link eventKey="third">Wordpress</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link eventKey="fourth">PHP</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link eventKey="fifth">Angular</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link eventKey="sixth">PSD</Nav.Link>
                  </li>
                </Nav>
              </div>
            </div>
            <div className="panel-body">
              <Tab.Content className="tab-content p-0 pt-3">
                <Tab.Pane eventKey="first">
                  <div className="row">
                    {allProduct.map(
                      ({
                        image,
                        title,
                        text,
                        pricing,
                        star,
                        userName,
                        cartCount,
                        userImage,
                        tag,
                        badge
                      },index) => {
                        return (
                          <div className="col-xl-4 col-md-6" key={index + "product"}>
                            <ProductCard
                              image={image}
                              title={title}
                              text={text}
                              pricing={pricing}
                              star={star}
                              tag={tag}
                              userName={userName}
                              userImage={userImage}
                              cartCount={cartCount}
                              badge={badge}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="ad-list.html"
                      className="btn ripple  btn-primary btn-lg"
                    >
                      View All Products
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="row">
                  {htmlProduct.map(
                      ({
                        image,
                        title,
                        text,
                        pricing,
                        star,
                        userName,
                        cartCount,
                        userImage,
                        tag,
                        badge
                      },index) => {
                        return (
                          <div className="col-xl-4 col-md-6" key={index + "html"}>
                            <ProductCard
                              image={image}
                              title={title}
                              text={text}
                              pricing={pricing}
                              star={star}
                              tag={tag}
                              userName={userName}
                              userImage={userImage}
                              cartCount={cartCount}
                              badge={badge}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="ad-list.html"
                      className="btn ripple  btn-primary btn-lg"
                    >
                      View All Products
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="row">
                  {wordpressProduct.map(
                      ({
                        image,
                        title,
                        text,
                        pricing,
                        star,
                        userName,
                        cartCount,
                        userImage,
                        tag,
                        badge
                      },index) => {
                        return (
                          <div className="col-xl-4 col-md-6" key={index + "wordpress"}>
                            <ProductCard
                              image={image}
                              title={title}
                              text={text}
                              pricing={pricing}
                              star={star}
                              tag={tag}
                              userName={userName}
                              userImage={userImage}
                              cartCount={cartCount}
                              badge={badge}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="ad-list.html"
                      className="btn ripple  btn-primary btn-lg"
                    >
                      View All Products
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="row">
                  {phpProduct.map(
                      ({
                        image,
                        title,
                        text,
                        pricing,
                        star,
                        userName,
                        cartCount,
                        userImage,
                        tag,
                        badge
                      },index) => {
                        return (
                          <div className="col-xl-4 col-md-6" key={index + "php"}>
                            <ProductCard
                              image={image}
                              title={title}
                              text={text}
                              pricing={pricing}
                              star={star}
                              tag={tag}
                              userName={userName}
                              userImage={userImage}
                              cartCount={cartCount}
                              badge={badge}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="ad-list.html"
                      className="btn ripple  btn-primary btn-lg"
                    >
                      View All Products
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div className="row">
                  {angularProduct.map(
                      ({
                        image,
                        title,
                        text,
                        pricing,
                        star,
                        userName,
                        cartCount,
                        userImage,
                        tag,
                        badge
                      },index) => {
                        return (
                          <div className="col-xl-4 col-md-6" key={index + "angu"}>
                            <ProductCard
                              image={image}
                              title={title}
                              text={text}
                              pricing={pricing}
                              star={star}
                              tag={tag}
                              userName={userName}
                              userImage={userImage}
                              cartCount={cartCount}
                              badge={badge}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="ad-list.html"
                      className="btn ripple  btn-primary btn-lg"
                    >
                      View All Products
                    </a>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div className="row">
                  {psdProduct.map(
                      ({
                        image,
                        title,
                        text,
                        pricing,
                        star,
                        userName,
                        cartCount,
                        userImage,
                        tag,
                        badge
                      },index) => {
                        return (
                          <div className="col-xl-4 col-md-6" key={index + "psd"}>
                            <ProductCard
                              image={image}
                              title={title}
                              text={text}
                              pricing={pricing}
                              star={star}
                              tag={tag}
                              userName={userName}
                              userImage={userImage}
                              cartCount={cartCount}
                              badge={badge}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <a
                      href="ad-list.html"
                      className="btn ripple  btn-primary btn-lg"
                    >
                      View All Products
                    </a>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
}
export default  FeaturedTemplateSection;