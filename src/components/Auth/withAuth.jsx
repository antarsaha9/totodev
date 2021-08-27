import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "~components/Loader/Loader";

const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { loading, user } = useSelector((store) => store.auth);

  if (loading) return <Loader show={true} />;
  else if (!loading && !user) {
    router.push("/login");
    return null;
  }
  return <Component {...props} />;
};

export default withAuth;
