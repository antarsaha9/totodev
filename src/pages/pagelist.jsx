import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionThree from "../components/Breadcrumb/BreadcrumbSectionThree";
import Sepbreadcrumb from "../components/Breadcrumb/Sepbreadcrumb";
import PageListBody from "../sections/pagelist";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionThree number="6,894" title="Wordpress Themes Available Now!" />,
  bannerClasses:"bg-background",
  seperateBredcrumb:<Sepbreadcrumb  nestedPageName="Pages" currentPageName="List"/>
}
const Payment = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <PageListBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Payment;
