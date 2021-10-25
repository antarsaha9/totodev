import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { paths, signOut } from "src/helper";

const MenuNav = () => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const handleSignOut = () => {
    signOut(router);
  };
  const collapse = () => setExpanded(false);

  return (
    <section className="pt-7">
      <Container>
        <Row>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="hor-menu-nav">
              <Navbar expanded={expanded} onToggle={setExpanded} className="navbar-light p-0" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  Dashboard-Menu
                  <i className="fe fe-align-left" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav as="ul">
                    <NavLink to={paths.EditProfile} name="Edit profile" icon="fe fe-user nav-icon" onClick={collapse} />
                    <NavLink to={paths.Upload} name="Upload Items" icon="fe fe-download nav-icon" onClick={collapse} />
                    <NavLink to={paths.ManageItems} name="Managed Items" icon="fe fe-folder-plus nav-icon" onClick={collapse} />
                    <NavLink to={paths.PurchasedItems} name="Purchase" icon="fe fe-shopping-cart nav-icon" onClick={collapse} />
                    <NavLink to={paths.Credits} name="Credits" icon="fe fe-credit-card nav-icon" onClick={collapse} />
                    <NavLink to={paths.Statement} name="Statements" icon="fe fe-edit nav-icon" onClick={collapse} />
                    <NavLink to={paths.Settings} name="Settings" icon="fe fe-settings nav-icon" onClick={collapse} />
                    <NavLink to={paths.Withdrawls} name="Withdrawals" icon="fe fe-edit nav-icon" onClick={collapse} />
                    <li className="nav-item">
                      <a onClick={handleSignOut} className="nav-link">
                        <i className="fe fe-power nav-icon" />
                        Logout
                      </a>
                    </li>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

function NavLink({ to, name, icon, onClick }) {
  const { asPath } = useRouter();

  return (
    <Link href={to} scroll={false}>
      <Nav.Item
        as={'li'}
        onClick={onClick}
        className={asPath === to ? 'active' : ''}
      >
        <a className="nav-link">
          <i className={icon} />{name}
        </a>
      </Nav.Item>
    </Link>
  )
}

export default MenuNav;
