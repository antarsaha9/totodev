import React from "react";
import styled from "styled-components";
import { Tab, Nav } from "react-bootstrap";
import SelectBox from "../../../components/Forms/SelectBox";
import Pagination from "../../../components/Pagination";
// import tableRowImage from "../../../assets/images/media/pictures/small/01.jpg"
import ProductRow from "../../../components/Widgets/ProductRow"
import FollowerRow from "./FollowerRow"
import ProductRowHead from "../../../components/Widgets/ProductRow/Head";
import { portfolioData, uploadData , followerData } from "../data";


const SortSelectWrapper = styled.div`
  .rc-menu-button{
    width: 150px !important;
    text-align: left;
    height: 1.775rem !important;
  }
  .rc-menu{
    text-align:left;

  }
  .rc-menu__item {
    padding: 0.375rem 1rem;
}
`


const MyAdTab =()=> {
  return (
    <Tab.Container defaultActiveKey="portfolio">
      <div className="card ads-tabs">
        <div className="card-body">
          <div className="d-flex tabs-menus mb-0 item2-gl-nav bg-white p-0 border-0">
            <Nav className="nav panel-tabs mt-1" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="portfolio">
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="upload">
                  Upload Items
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="d-flex align-items-start">
                <Nav.Link eventKey="followers">
                  Followers
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="ml-auto d-flex align-items-center">
              <SortSelectWrapper className="d-flex select2-sm">
                <label className="mr-2 mt-1 mb-sm-1">Sort By:</label>
                <SelectBox data={["Latest","Oldest","Fees:Low-to-High","Fees:Hight-to-Low"]} defaultValue="Latest" className="select2 select2-container"/>
              </SortSelectWrapper>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <Tab.Content>
          
          <Tab.Pane
          eventKey="portfolio"
            className="table-responsive userprof-tab manged-ad"
          >
            	<ProductRowHead/>

            {portfolioData.map(({title,date,tag,price,badge,badgeText,image},index)=>{
              return(
                  <ProductRow title={title} date={date} tag={tag} badge={badge} badgeText={badgeText} price={price} key={index + "tr"} image={image}/>
              )
            })}
            
          </Tab.Pane>
          <Tab.Pane
          eventKey="upload"
            className="table-responsive userprof-tab manged-ad"
          >
            <ProductRowHead/>
            {uploadData.map(({title,date,tag,price,badge,badgeText,image},index)=>{
              return(
                  <ProductRow title={title} image={image} date={date} tag={tag} badge={badge} badgeText={badgeText} price={price} key={index + "tr"}/>
              )
            })}
          </Tab.Pane>
          <Tab.Pane className="table-responsive userprof-tab" eventKey="followers">
          {followerData.map(({title,image,authors,items,followers,date,freelanceWork,sales},index)=>{
              return(
                <FollowerRow image={image} title={title} authors={authors} items={items} followers={followers} date={date} freelanceWork={freelanceWork} sales={sales} key={index + "ft"}/>
              )
            })}
            
          </Tab.Pane>
        </Tab.Content>
      </div>
      <Pagination/>
    </Tab.Container>
  );
}
export default  MyAdTab;