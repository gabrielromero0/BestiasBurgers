import { ScaleLoader } from "react-spinners";
import styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={styles.container}>
      <ScaleLoader color="#000000" />
    </div>
  );
};

export default LoadingPage;
