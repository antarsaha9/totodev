import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const LoadingButton = ({
  children,
  variant = "primary",
  type = "submit",
  onClick,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);
  function _onCLick() {
    setLoading(true);
    onClick(() => setLoading(false));
  }

  return (
    <Button variant={variant} type={type} disabled={loading} onClick={_onCLick} {...rest}>
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
