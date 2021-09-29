import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

export default function LoaderSpinner() {
  return (
    <Card className="p-10">
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    </Card>)
}