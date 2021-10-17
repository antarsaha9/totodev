import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectBox from "../../components/Forms/SelectBox";
import RightSidebar from "./components/RightSidebar";
import ProductCardList from "~components/Cards/ProductCardList";
import { getAdList } from "~services/itemService";
import ProductCardTwo from "../../components/Cards/ProductCardTwo";
import { Nav, Tab, Pagination } from "react-bootstrap";
import { addToCart } from "src/helper";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
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
  const [data, setData] = useState({});
  const [selected, setSelected] = useState("list");
  const [pagination, setPaination] = useState({
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 2,
    currentPage: 1,
    token: null
  });
  const dispatch = useDispatch();
  const { push, query } = useRouter();
  const payload = {
    category_name: query.category_name
  }
  useEffect(() => {
    setData({ 1: { loading: true } });
    getAdList({
      ...payload,
      limit: pagination.itemsPerPage,
      page_number: pagination.currentPage
    }).then((data) => {
      const pgn = {
        ...pagination,
        token: data?.next_token,
        totalItems: data?.total_items,
        totalPages: Math.ceil(data?.total_items / pagination.itemsPerPage),
        // currentPage: 1
      };
      var pl = {};
      Array.from({ length: pgn.totalPages }, (_, i) => pl[i + 1] = false);
      pl[1] = data?.items || [];
      setData(pl);
      setPaination(pgn);
    })
  }, [])


  const buyNow = function (item_id, callback) {
    console.log(item_id);
    addToCart([], item_id, dispatch, () => {
      if (callback) callback();
      push('/cart');
    });
  }

  const handlePageChange = function (page_number) {
    if (data[page_number]) {
      setPaination({
        ...pagination,
        currentPage: page_number
      });
    }
    else {
      const prevData = data;
      setData({ ...prevData, page_number: { loading: true } });
      setPaination({
        ...pagination,
        currentPage: page_number
      });
      getAdList({
        ...payload,
        next_token: pagination.token,
        page_number: page_number,
        limit: pagination.itemsPerPage
      }).then((data) => {
        setData({ ...prevData, [page_number]: (data?.items || []) });
      })
    }
  }
  const items = data?.[pagination.currentPage] || { loading: true };
  return (
    <section className="sptb">
      <div className="container">
        <Tab.Container defaultActiveKey={selected} onSelect={(selectedKey) => setSelected(selectedKey)}>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="mb-lg-0">
                <div className="item2-gl">
                  <div className="mb-0">

                    <div className="p-5 bg-white item2-gl-nav d-flex align-items-center flex-wrap">
                      <h6 className="mb-0 mt-2">
                        {`Showing ${pagination.totalItems ? ((pagination.currentPage - 1) * pagination.itemsPerPage) + 1 : 0} to ${Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of ${pagination.totalItems} entries`}
                      </h6>
                      <TabNav className=" item2-gl-menu ml-auto" as="ul" >
                        <Nav.Item as="li">
                          <Nav.Link title="List style" eventKey="list" bsPrefix={`show${selected === "list" ? " active" : ""}`}>
                            <i className="fa fa-list" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                          <Nav.Link title="Grid" eventKey="grid" bsPrefix={`show${selected === "grid" ? " active" : ""}`}>
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
                      {items.loading ? <LoaderSpinner /> : items.map(
                        ({
                          image_url,
                          tags,
                          overall_rating,
                          price,
                          seller_image,
                          seller_name,
                          seller_id,
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
                              userId={seller_id}
                              saleCount={saleCount}
                              title={item_name}
                              categoryName={category_name}
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
                        {items.loading ? <LoaderSpinner /> : items.map(
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
                            seller_id
                          }, index) => {
                            return (
                              <div className="col-lg-6 col-md-6 col-xl-4" key={"pld" + index}>
                                <ProductCardTwo
                                  id={id}
                                  image={image_url}
                                  tag={tags}
                                  star={overall_rating}
                                  price={price}
                                  userImage={seller_image}
                                  userName={seller_name}
                                  userId={seller_id}
                                  saleCount={saleCount}
                                  title={item_name}
                                  categoryName={category_name}
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
                  <Pagination className="mb-5 mb-lg-0">
                    <Pagination.Prev disabled={pagination.currentPage <= 1} onClick={() => handlePageChange(pagination.currentPage - 1)}>Prev</Pagination.Prev>
                    {Array.from({ length: pagination.totalPages }, (_, i) => <Pagination.Item active={pagination.currentPage === (i + 1)} onClick={() => handlePageChange(i + 1)} disabled={pagination.currentPage === (i + 1)}>{(i + 1)}</Pagination.Item>)}
                    <Pagination.Next disabled={pagination.currentPage >= pagination.totalPages} onClick={() => handlePageChange(pagination.currentPage + 1)}>Next</Pagination.Next>
                  </Pagination>
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