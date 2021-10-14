import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectBox from "../../components/Forms/SelectBox";
import RightSidebar from "./components/RightSidebar";
import ProductCardList from "~components/Cards/ProductCardList";
import { getAdList } from "~services/itemService";
import ProductCardTwo from "../../components/Cards/ProductCardTwo";
import { Nav, Tab } from "react-bootstrap";
import { addToCart } from "src/helper";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const SortSelectWrapper = styled.div`
  .rc-menu-button {
    width: 150px !important;
    text-align: left;
    height: 1.775rem !important;
  }
  .rc-menu {
    text-align: left;
  }
  .rc-menu__item {
    padding: 0.375rem 1rem;
  }
  label{
    @media(max-width:768px){
      width:auto;
    }
  }
`;
const TabNav = styled(Nav)`
    display: flex!important;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;
// const FilterBar = styled(Nav)`
//     display: flex;
//     flex-wrap: wrap;
//     padding-left: 0;
//     margin-bottom: 0;
//     list-style: none;
// `;
const PageListBoady = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAdList().then((data) => {
      console.log(data);
      setData(data?.items || []);
      // setLoading(false);
    })
  }, [])

  const dispatch = useDispatch();
  const { push } = useRouter();
  const buyNow = function (item_id, callback) {
    console.log(item_id);
    addToCart([], item_id, dispatch, () => {
      if (callback) callback();
      push('/cart');
    });
  }
  return (
    <section className="sptb">
      <div className="container">
        <Tab.Container defaultActiveKey="list">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="mb-lg-0">
                <div className="item2-gl ">
                  <div className=" mb-0">

                    <div className="p-5 bg-white item2-gl-nav d-flex align-items-center flex-wrap">
                      <h6 className="mb-0 mt-2">
                        Showing 1 to 10 of 30 entries
                      </h6>
                      <TabNav className=" item2-gl-menu ml-auto" as="ul">
                        <Nav.Item as="li">
                          <Nav.Link title="List style" eventKey="list">
                            <i className="fa fa-list" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link title="Grid" eventKey="grid">
                            <i className="fa fa-th" />
                          </Nav.Link>
                        </Nav.Item>
                      </TabNav>
                      <SortSelectWrapper className="d-flex select2-sm">
                        <label className="mr-2 mt-1 mb-sm-1">Sort By:</label>
                        <SelectBox
                          data={[
                            "Latest",
                            "Oldest",
                            "Fees:Low-to-High",
                            "Fees:Hight-to-Low",
                          ]}
                          defaultValue="Latest"
                          className="select2 select2-container"
                        />
                      </SortSelectWrapper>
                    </div>
                  </div>
                  <Tab.Content className="Marketplace">
                    <Tab.Pane eventKey="list">
                      {data.map(
                        ({
                          image_url,
                          tags,
                          overall_rating,
                          price,
                          seller_image,
                          seller_name,
                          saleCount,
                          item_name,
                          category_name,
                          date,
                          id
                        }, index) => {
                          return (
                            <ProductCardList
                              id={id}
                              image={image_url}
                              tag={tags}
                              star={overall_rating}
                              price={price}
                              userImage={seller_image}
                              userName={seller_name}
                              saleCount={saleCount}
                              title={item_name}
                              className={category_name}
                              date={date}
                              key={"pl" + index}
                              buy={(callback) => buyNow(id, callback)}
                            />
                          );
                        }
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="grid">
                      <div className="row">
                        {data.map(
                          ({
                            id,
                            image_url,
                            tags,
                            overall_rating,
                            price,
                            seller_image,
                            seller_name,
                            saleCount,
                            item_name,
                            category_name,
                            date,
                          }, index) => {
                            return (
                              <div className="col-lg-6 col-md-6 col-xl-4" key={"pld" + index}>
                                <ProductCardTwo
                                  image={image_url}
                                  tag={tags}
                                  star={overall_rating}
                                  price={price}
                                  userImage={seller_image}
                                  userName={seller_name}
                                  saleCount={saleCount}
                                  title={item_name}
                                  className={category_name}
                                  date={date}
                                  key={"pl" + index}
                                  buy={(callback) => buyNow(id, callback)}
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
                <div className="center-block text-center">
                  <ul className="pagination mb-5 mb-lg-0">
                    <li className="page-item page-prev disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item page-next">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Right Side Content*/}
            <div className="col-xl-3 col-lg-4 col-md-12">
              <RightSidebar />
            </div>
            {/*/Right Side Content*/}
          </div>
        </Tab.Container>
      </div>
    </section>
  );
}
export default PageListBoady;