import React from "react";
import { Button, Spinner } from "react-bootstrap";

const LoadingButton = ({
  children,
  loading,
  variant = "primary",
  type = "submit",
  ...rest
}) => {
  return (
    <Button variant={variant} type={type} disabled={loading} {...rest}>
      {loading && (
        <Spinner
          className="mr-2"
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      {children}
    </Button>
  );
};

export default LoadingButton;
