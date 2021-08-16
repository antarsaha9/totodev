import React, { Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "..";

const HeaderTop = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-sm-4 col-7">
            <div className="top-bar-left d-flex">
              <div className="clearfix">
                <ul className="socials">
                  <li>
                    <a className="social-icon text-dark" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="social-icon text-dark" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="social-icon text-dark" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="social-icon text-dark" href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix">
                <ul className="contact">
                  <li className="d-lg-none">
                    <a href="#" className="callnumber text-dark">
                      <span>
                        <i className="fa fa-phone mr-1" />: +425 345 8765
                      </span>
                    </a>
                  </li>
                  {/* <li className="select-country">
                <select className="form-control select2-flag-search" data-placeholder="Select Country">
                  <option value="UM">United States of America</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="AD">Andorra</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AU">Australia</option>
                  <option value="AM">Armenia</option>
                  <option value="AO">Angola</option>
                  <option value="AR">Argentina</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BB">Barbados</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BE">Belgium</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BH">Bahrain</option>
                  <option value="BJ">Benin</option>
                  <option value="BN">Brunei</option>
                  <option value="BO">Bolivia</option>
                  <option value="BT">Bhutan</option>
                  <option value="BY">Belarus</option>
                  <option value="CD">Congo</option>
                  <option value="CA">Canada</option>
                  <option value="CF">Central African Republic</option>
                  <option value="CI">Cote d'Ivoire</option>
                  <option value="CL">Chile</option>
                  <option value="CM">Cameroon</option>
                  <option value="CN">China</option>
                  <option value="CO">Colombia</option>
                  <option value="CU">Cuba</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="CY">Cyprus</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DK">Denmark</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EE">Estonia</option>
                  <option value="ER">Eritrea</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FI">Finland</option>
                  <option value="FJ">Fiji</option>
                  <option value="FR">France</option>
                  <option value="GA">Gabon</option>
                  <option value="GD">Grenada</option>
                  <option value="GE">Georgia</option>
                  <option value="GH">Ghana</option>
                  <option value="GH">Ghana</option>
                  <option value="HN">Honduras</option>
                  <option value="HT">Haiti</option>
                  <option value="HU">Hungary</option>
                  <option value="ID">Indonesia</option>
                  <option value="IE">Ireland</option>
                  <option value="IL">Israel</option>
                  <option value="IN">India</option>
                  <option value="IQ">Iraq</option>
                  <option value="IR">Iran</option>
                  <option value="IS">Iceland</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JO">Jordan</option>
                  <option value="JP">Japan</option>
                  <option value="KE">Kenya</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="KI">Kiribati</option>
                  <option value="KW">Kuwait</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="LA">Laos</option>
                  <option value="LB">Lebanons</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LR">Liberia</option>
                  <option value="LS">Lesotho</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="LV">Latvia</option>
                  <option value="LY">Libya</option>
                  <option value="MA">Morocco</option>
                  <option value="MC">Monaco</option>
                  <option value="MD">Moldova</option>
                  <option value="ME">Montenegro</option>
                  <option value="MG">Madagascar</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MK">Macedonia (FYROM)</option>
                  <option value="ML">Mali</option>
                  <option value="MM">Myanmar (formerly Burma)</option>
                  <option value="MN">Mongolia</option>
                  <option value="MR">Mauritania</option>
                  <option value="MT">Malta</option>
                  <option value="MV">Maldives</option>
                  <option value="MW">Malawi</option>
                  <option value="MX">Mexico</option>
                  <option value="MZ">Mozambique</option>
                  <option value="NA">Namibia</option>
                  <option value="NG">Nigeria</option>
                  <option value="NO">Norway</option>
                  <option value="NP">Nepal</option>
                  <option value="NR">Nauru</option>
                  <option value="NZ">Online Zealand</option>
                  <option value="OM">Oman</option>
                  <option value="PA">Panama</option>
                  <option value="PF">Paraguay</option>
                  <option value="PG">Papua Online Guinea</option>
                  <option value="PH">Philippines</option>
                  <option value="PK">Pakistan</option>
                  <option value="PL">Poland</option>
                  <option value="QA">Qatar</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russia</option>
                  <option value="RW">Rwanda</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SC">Seychelles</option>
                  <option value="SD">Sudan</option>
                  <option value="SE">Sweden</option>
                  <option value="SG">Singapore</option>
                  <option value="TG">Togo</option>
                  <option value="TH">Thailand</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TN">Tunisia</option>
                  <option value="TO">Tonga</option>
                  <option value="TR">Turkey</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TW">Taiwan</option>
                  <option value="UA">Ukraine</option>
                  <option value="UG">Uganda</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VA">Vatican City (Holy See)</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Vietnam</option>
                  <option value="VU">Vanuatu</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </li> */}
                  <Dropdown as="li">
                    <Dropdown.Toggle
                      as="a"
                      bsPrefix="none"
                      href="#"
                      className="text-dark"
                    >
                      <span>
                        {" "}
                        Language <i className="fa fa-caret-down text-muted" />
                      </span>{" "}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      align="right"
                      className="dropdown-menu-right dropdown-menu-arrow"
                    >
                      <a href="#" className="dropdown-item">
                        English
                      </a>
                      <a className="dropdown-item" href="#">
                        Arabic
                      </a>
                      <a className="dropdown-item" href="#">
                        German
                      </a>
                      <a href="#" className="dropdown-item">
                        Greek
                      </a>
                      <a href="#" className="dropdown-item">
                        Spanish
                      </a>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as="li">
                    <Dropdown.Toggle
                      href="#"
                      className="text-dark"
                      bsPrefix="none"
                      as="a"
                    >
                      <span>
                        Currency <i className="fa fa-caret-down text-muted" />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      align="right"
                      className="dropdown-menu-right dropdown-menu-arrow"
                    >
                      <a href="#" className="dropdown-item">
                        USD
                      </a>
                      <a className="dropdown-item" href="#">
                        EUR
                      </a>
                      <a className="dropdown-item" href="#">
                        INR
                      </a>
                      <a href="#" className="dropdown-item">
                        GBP
                      </a>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
            <div className="top-bar-right">
              <ul className="custom">
                {!!!user ? (
                  <Fragment>
                    <li>
                      <Link to="/register" className="text-dark">
                        <i className="fa fa-user mr-1" /> <span>Register</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="text-dark">
                        <i className="fa fa-sign-in mr-1" /> <span>Login</span>
                      </Link>
                    </li>
                  </Fragment>
                ) : (
                  <Dropdown as="li">
                    <Dropdown.Toggle
                      className="text-dark cursor-pointer"
                      bsPrefix="none"
                      as="span"
                    >
                      <i className="fa fa-home mr-1" />
                      <span>
                        My Dashboard
                        <i className="fa fa-caret-down ml-1" />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      align="right"
                      className="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                    >
                      <Link to="/profile" className="dropdown-item">
                        <i className="dropdown-icon icon icon-user" /> My
                        Profile
                      </Link>
                      <a className="dropdown-item" href="#">
                        <i className="dropdown-icon icon icon-speech" /> Inbox
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="dropdown-icon icon icon-bell" />{" "}
                        Notifications
                      </a>
                      <a href="mydash.html" className="dropdown-item">
                        <i className="dropdown-icon  icon icon-settings" />{" "}
                        Account Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="dropdown-icon icon icon-power" /> Log out
                      </a>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
