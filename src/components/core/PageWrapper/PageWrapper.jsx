import React from "react";
import GlobalHeaderContext, {
  headerDefault,
} from "../../../context/GlobalHeaderContext";

const PageWrapper = ({ children, themeConfig = null }) => {
  const sitectx = React.useContext(GlobalHeaderContext);

  React.useEffect(() => {
    sitectx.changeHeader({ ...headerDefault, ...themeConfig });
  }, [themeConfig]);

  return <>{children}</>;
};

export default PageWrapper;
