import { useState } from "react";
import {Alert, Button} from "react-bootstrap";
;

const Welcome = function () {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert  className ='m-5' variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Special Offer!</Alert.Heading>
        <p>
          Free shipping on orders over $50. Explore our latest collection of
          bestsellers and classics!
        </p>
      </Alert>
    );
  }
  return <Button className ='m-5' variant="outline-success" onClick={() => setShow(true)}>Show Offer</Button>;
};

export default Welcome;
