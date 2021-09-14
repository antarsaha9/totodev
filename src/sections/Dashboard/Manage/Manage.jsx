import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";
import Loader from "~components/Loader";
import { getMyItemList, updateItemStatus } from "~services/itemService";
import Pagination from "../../../components/Pagination";
import ProductRow from "../../../components/Widgets/ProductRow";
import ProductRowHead from "../../../components/Widgets/ProductRow/Head";
import ProductSortBlock from "./components/ProductSortBlock";

const ManageSection = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogInput, setDialogInput] = useState(null);
  const [deletableProductId, setDeletableProductId] = useState(null);

  const { user } = useSelector((store) => store.auth);
  const seller_id = user?.seller_id;
  const itemsPerPage = 12;

  useEffect(() => {
    if (seller_id) {
      getMyItemList().then((data) => {
        console.log(data);
        setProductList(data?.items || []);
        setLoading(false);
      });
    }
  }, [seller_id]);

  const toggleDialog = () => {
    setShowDialog((show) => !show);
  };

  const handleItemStatusChange = (item_id, status) => async () => {
    if (status === "DELETE") {
      setShowDialog(true);
      setDeletableProductId(item_id);
      return;
    }

    const data = await updateItemStatus(item_id, status);

    if (data) {
      const temp = productList.map((item) => {
        if (item.id === item_id) {
          item.item_status = status + "ED";
        }
        return item;
      });
      setProductList(temp);
      NotificationManager.success("Status changed successfully");
    } else NotificationManager.error("Couldn't change status");
  };

  const handleDeleteConfirmation = async () => {
    setShowDialog(false);
    setDialogInput(null);

    const status = "DELETE";
    const data = await updateItemStatus(deletableProductId, status);

    if (data) {
      const temp = productList.filter((item) => item.id !== deletableProductId);
      setProductList(temp);
      NotificationManager.success("Deleted successfully");
    } else NotificationManager.error("Couldn't delete");
  };

  return (
    <>
      <Container className="spb">
        <Loader show={loading} />
        <div className="mb-5">
          <ProductSortBlock totalProducts={productList.length} />
        </div>
        <div className="card manged-ad">
          <ProductRowHead />

          {productList.map((product) => {
            return (
              <ProductRow
                key={product.id}
                handleItemStatusChange={handleItemStatusChange}
                {...product}
              />
            );
          })}
        </div>

        <Pagination pageCount={productList.length / itemsPerPage} />
      </Container>

      <Modal show={showDialog} onHide={toggleDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter DELETE to confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormControl
            placeholder="DELETE"
            onChange={(e) => setDialogInput(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={toggleDialog}>
            Close
          </Button>
          <Button
            variant="danger"
            disabled={dialogInput !== "DELETE"}
            onClick={handleDeleteConfirmation}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ManageSection;
