import { ClipLoader } from "react-spinners";
import styles from "./LoadingPage.module.css";
import { Col, Row } from "react-bootstrap";

const LoadingPage = () => {
  return (
      <div className={`d-flex align-items-center justify-content-center`} style={{ height: "100vh" }}>
        <ClipLoader color="#000000" />
      </div>
  );
};

export default LoadingPage;