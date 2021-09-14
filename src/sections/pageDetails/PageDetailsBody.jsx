import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getItemDetails } from "~services/itemService";
import ProductOverviewCard from "./Components/Sidebar/ProductOverviewCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import SliderBlock from "./Components/SliderBlock";
import TabBlockMain from "./Components/TabBlock/TabBlockMain";

const PageDetailsBody = () => {
  const [product, setProduct] = useState({});
  const { query } = useRouter();

  useEffect(() => {
    if (query?.id) {
      getItemDetails(query.id).then((data) => {
        if (data) setProduct(data);
      });
    }
  }, [query]);

  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <ProductOverviewCard product={product} />
            <TabBlockMain product={product} />
            <h3 className="mb-5 mt-6">Related Posts</h3>
            {/*Related Posts*/}
            <SliderBlock product={product} />
            {/*/Related Posts*/}
          </div>
          {/*Right Side Content*/}
          <div className="col-xl-4 col-lg-4 col-md-12">
            <Sidebar product={product} />
          </div>
          {/*Rightside Content*/}
        </div>
      </div>
    </section>
  );
};

export default PageDetailsBody;
