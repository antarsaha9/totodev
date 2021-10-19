import { useRouter } from "next/router";
import React from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { signOut } from "src/helper";
import ActiveLink from "../core/Link/ActiveLink";

const MenuNav = () => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut(router);
  };
  return (
    <section className="pt-7">
      <Container>
        <Row>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="hor-menu-nav">
              <Navbar className="navbar-light p-0" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  Dashboard-Menu
                  <i className="fe fe-align-left" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul className="navbar-nav">
                    <ActiveLink activeClassName="active" href="/dashboard">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-user nav-icon" /> Edit Profile
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/upload"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-download nav-icon" /> Upload Items
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/managed"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-folder-plus nav-icon" />
                          Managed Items
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/purchase"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-shopping-cart nav-icon" />
                          Purchase
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/credits"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-credit-card nav-icon" />
                          Credits
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/statements"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-edit nav-icon" />
                          Statements
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/settings"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-settings nav-icon" />
                          Settings
                        </a>
                      </li>
                    </ActiveLink>
                    <ActiveLink
                      activeClassName="active"
                      href="/dashboard/withdrawals"
                    >
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fe fe-edit nav-icon" />
                          Withdrawals
                        </a>
                      </li>
                    </ActiveLink>
                    <li className="nav-item">
                      <a onClick={handleSignOut} className="nav-link">
                        <i className="fe fe-power nav-icon" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default MenuNav;
