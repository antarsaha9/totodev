import React from "react";
import { Container, Tab, Nav, Row } from "react-bootstrap";
import SelectBox from "./components/SelectBox";
import styled from "styled-components";

const SelectBoxWrapper = styled.div`
  .rc-menu-button {
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
  }
  .rc-menu {
    top: 0 !important;
    left: 0 !important;
    max-height: 200px;
    overflow-y: auto;
  }
`;
const PurchaseSection = () => {
  return (
    <>
      <Container className="spb">
        <Row>
          <div className="col-lg-12 col-md-12">
            <div className="card mb-0">
              <div className="card-header">
                <h3 className="card-title">Settings</h3>
              </div>
              <div className="card-body">
                <Tab.Container defaultActiveKey="general">
                  <div className="settings-tab">
                    <Nav className="tabs-menu nav" as="ul">
                      <Nav.Item as="li">
                        <Nav.Link eventKey="general">
                          <i className="icon icon-speedometer" /> General
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="chat">
                          <i className="icon icon-bubble" /> Chat
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="advanced">
                          <i className="icon icon-settings" /> Advanced
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="general">
                        <div className="tab-pane show active" id="tab1">
                          <form className="form-horizontal">
                            <div className="form-group ">
                              <div className="row">
                                <div className="col-md-3">
                                  <label
                                    className="form-label"
                                    id="examplenameInputname2"
                                  >
                                    Currency
                                  </label>
                                </div>
                                <div className="col-md-9">
                                  <SelectBoxWrapper>
                                    <SelectBox
                                      data={["USD", "INR", "EUR", "GBP"]}
                                      filterBox={true}
                                      defaultValue="Choose Currency"
                                    />
                                  </SelectBoxWrapper>
                                </div>
                              </div>
                            </div>
                            <div className="form-group ">
                              <div className="row">
                                <div className="col-md-3">
                                  <label
                                    className="form-label"
                                    id="examplenameInputname3"
                                  >
                                    Langague:
                                  </label>
                                </div>
                                <div className="col-md-9">
                                  <SelectBoxWrapper>
                                    <SelectBox
                                      data={[
                                        "Afrikanns",
                                        "Albanian",
                                        "Arabic",
                                        "Armenian",
                                        "Basque",
                                        "Bengali",
                                        "Bulgarian",
                                        "Catalan",
                                        "Cambodian",
                                        "Chinese (Mandarin)",
                                        "Croation",
                                        "Czech",
                                        "Danish",
                                        "Dutch",
                                        "English",
                                        "Estonian",
                                        "Fiji",
                                        "Finnish",
                                        "French",
                                        "Georgian",
                                        "German",
                                        "Greek",
                                        "Gujarati",
                                        "Hebrew",
                                        "Hindi",
                                        "Hungarian",
                                        "Icelandic",
                                        "Indonesian",
                                        "Irish",
                                        "Italian",
                                        "Japanese",
                                        "Javanese",
                                        "Korean",
                                        "Latin",
                                        "Latvian",
                                        "Lithuanian",
                                        "Macedonian",
                                        "Malay",
                                        "Malayalam",
                                        "Maltese",
                                        "Maori",
                                        "Marathi",
                                        "Mongolian",
                                        "Nepali",
                                        "Norwegian",
                                        "Persian",
                                        "Polish",
                                        "Portuguese",
                                        "Punjabi",
                                        "Quechua",
                                        "Romanian",
                                        "Russian",
                                        "Samoan",
                                        "Serbian",
                                        "Slovak",
                                        "Slovenian",
                                        "IT Itemsnish",
                                        "Swahili",
                                        "Swedish",
                                        "Tamil",
                                        "Tatar",
                                        "Telugu",
                                        "Thai",
                                        "Tibetan",
                                        "Tonga",
                                        "Turkish",
                                        "Ukranian",
                                        "Urdu",
                                        "Uzbek",
                                        "Vietnamese",
                                        "Welsh",
                                        "Xhosa",
                                      ]}
                                      filterBox={true}
                                      defaultValue="Choose Language"
                                    />
                                  </SelectBoxWrapper>
                                </div>
                              </div>
                            </div>
                            <div className="form-group ">
                              <div className="row">
                                <div className="col-md-3">
                                  <label className="form-label">
                                    Phone Number:
                                  </label>
                                </div>
                                <div className="col-md-9">
                                  <div className="custom-controls-stacked d-md-flex">
                                    <label className="custom-control custom-radio mr-4">
                                      <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="example-radios3"
                                        defaultValue="option1"
                                        defaultChecked
                                      />
                                      <span className="custom-control-label">
                                        Visible to everyone
                                      </span>
                                    </label>
                                    <label className="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="example-radios3"
                                        defaultValue="option2"
                                      />
                                      <span className="custom-control-label">
                                        Visible to only my Customers
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-0">
                              <div className="row">
                                <div className="col-md-3">
                                  <label
                                    className="form-label"
                                    id="inputPassword5"
                                  >
                                    Profile:
                                  </label>
                                </div>
                                <div className="col-md-9">
                                  <div className="custom-controls-stacked d-md-flex">
                                    <label className="custom-control custom-radio mr-4">
                                      <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="example-radios4"
                                        defaultValue="option1"
                                        defaultChecked
                                      />
                                      <span className="custom-control-label">
                                        Visible to everyone
                                      </span>
                                    </label>
                                    <label className="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="example-radios4"
                                        defaultValue="option2"
                                      />
                                      <span className="custom-control-label">
                                        Visible to only my Customers
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="chat">
                        <div className="form-group ">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">Font-size:</label>
                            </div>
                            <div className="col-md-9">
                              <div className="custom-controls-stacked d-sm-flex">
                                <label className="custom-control custom-radio mr-4">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios3"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <span className="custom-control-label">
                                    Small
                                  </span>
                                </label>
                                <label className="custom-control custom-radio mr-4">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios3"
                                    defaultValue="option2"
                                  />
                                  <span className="custom-control-label">
                                    Medium
                                  </span>
                                </label>
                                <label className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios3"
                                    defaultValue="option2"
                                  />
                                  <span className="custom-control-label">
                                    Large
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">Chat:</label>
                            </div>
                            <div className="col-md-9">
                              <label className="custom-switch pl-0">
                                <input
                                  type="checkbox"
                                  name="custom-switch-checkbox"
                                  className="custom-switch-input"
                                />
                                <span className="custom-switch-indicator" />
                                <span className="custom-switch-description">
                                  On/Off
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">Chat Type:</label>
                            </div>
                            <div className="col-md-9">
                              <div className="custom-controls-stacked d-md-flex">
                                <label className="custom-control custom-radio mr-4">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios4"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <span className="custom-control-label">
                                    Public Chat
                                  </span>
                                </label>
                                <label className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios4"
                                    defaultValue="option2"
                                  />
                                  <span className="custom-control-label">
                                    Private Chat
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">
                                Enable Email Notifications:
                              </label>
                            </div>
                            <div className="col-md-9">
                              <label className="custom-switch pl-0">
                                <input
                                  type="checkbox"
                                  name="custom-switch-checkbox"
                                  className="custom-switch-input"
                                />
                                <span className="custom-switch-indicator" />
                                <span className="custom-switch-description">
                                  On/Off
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">
                                Back Up Chat:
                              </label>
                            </div>
                            <div className="col-md-9">
                              <label className="custom-switch pl-0">
                                <input
                                  type="checkbox"
                                  name="custom-switch-checkbox"
                                  className="custom-switch-input"
                                />
                                <span className="custom-switch-indicator" />
                                <span className="custom-switch-description">
                                  On/Off
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">Delete Chat:</label>
                            </div>
                            <div className="col-md-9">
                              <div className="custom-controls-stacked d-md-flex">
                                <label className="custom-control custom-radio mr-4">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios5"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <span className="custom-control-label">
                                    Delete Read Chat
                                  </span>
                                </label>
                                <label className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios5"
                                    defaultValue="option2"
                                  />
                                  <span className="custom-control-label">
                                    Delete All
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="advanced">
                        <form className="form-horizontal">
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  Auto-Advance:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <label className="custom-switch pl-0">
                                  <input
                                    type="checkbox"
                                    name="custom-switch-checkbox"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator" />
                                  <span className="custom-switch-description">
                                    Enable/Disable
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label" id="inputEmail4">
                                  Color Theme:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <div className="custom-controls-stacked d-flex">
                                  <label className="custom-control custom-radio mr-4">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="example-radios"
                                      defaultValue="option1"
                                      defaultChecked
                                    />
                                    <span className="custom-control-label">
                                      Light
                                    </span>
                                  </label>
                                  <label className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="example-radios"
                                      defaultValue="option2"
                                    />
                                    <span className="custom-control-label">
                                      Dark
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  Dashboard Theme:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <SelectBoxWrapper>
                                  <SelectBox
                                    data={[
                                      "Default",
                                      "Light Theme",
                                      "Dark Theme",
                                      "Sidebar Dark Theme",
                                      "RTL",
                                    ]}
                                    filterBox={true}
                                    defaultValue="Choose Theme"
                                  />
                                </SelectBoxWrapper>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label" id="inputEmail5">
                                  Posted ADs:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <div className="custom-controls-stacked d-md-flex">
                                  <label className="custom-control custom-radio mr-4">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="example-radios1"
                                      defaultValue="option1"
                                      defaultChecked
                                    />
                                    <span className="custom-control-label">
                                      Directly
                                    </span>
                                  </label>
                                  <label className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="example-radios1"
                                      defaultValue="option2"
                                    />
                                    <span className="custom-control-label">
                                      By Admin Conformation
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  Comments Visible:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <div className="custom-controls-stacked d-md-flex">
                                  <label className="custom-control custom-radio mr-4">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="example-radios2"
                                      defaultValue="option1"
                                      defaultChecked
                                    />
                                    <span className="custom-control-label">
                                      Directly
                                    </span>
                                  </label>
                                  <label className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="example-radios2"
                                      defaultValue="option2"
                                    />
                                    <span className="custom-control-label">
                                      By Admin Conformation
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  System Notification:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <label className="custom-switch d-inline-block mr-5 pl-0">
                                  <input
                                    type="checkbox"
                                    name="custom-switch-checkbox"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator" />
                                  <span className="custom-switch-description">
                                    On/Off
                                  </span>
                                </label>
                                <label className="custom-switch d-inline-block">
                                  <a href="#" className="btn ripple -link">
                                    Itemsd Another Settings
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  Mail Notification:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <label className="custom-switch d-inline-block mr-5 pl-0">
                                  <input
                                    type="checkbox"
                                    name="custom-switch-checkbox"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator" />
                                  <span className="custom-switch-description">
                                    On/Off
                                  </span>
                                </label>
                                <label className="custom-switch d-inline-block">
                                  <a href="#" className="btn ripple -link">
                                    Itemsd Another Settings
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="form-label">
                                  Auto Watch Comments:
                                </label>
                              </div>
                              <div className="col-md-9">
                                <label className="custom-switch d-inline-block mr-5 pl-0">
                                  <input
                                    type="checkbox"
                                    name="custom-switch-checkbox"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator" />
                                  <span className="custom-switch-description">
                                    On/Off
                                  </span>
                                </label>
                                <label className="custom-switch d-inline-block">
                                  <a href="#" className="btn ripple -link">
                                    Itemsd Another Settings
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
              <div className="card-footer">
                <a href="#" className="btn ripple  btn-primary">
                  Save Changes
                </a>
                <a href="#" className="btn ripple  btn-secondary">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default PurchaseSection;
