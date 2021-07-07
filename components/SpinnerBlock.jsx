import s from "../styles/SpinnerBlock.module.css";
import { FaSpinner } from "react-icons/fa";

export const SpinnerBlock = () => {
  return (
    <div className={s.spinnerContainer}>
      <FaSpinner className={s.spinner} />
    </div>
  );
};
