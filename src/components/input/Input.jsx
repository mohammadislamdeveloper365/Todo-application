import styles from "./Input.module.css";
import classNames from "classnames";

function Input(props) {
  const { className, type, name, value, handleChange } = props;

  const getInputProps = () => {
    return {
      className: classNames(styles.input, className),
      type,
      name,
      value,
      onChange: handleChange,
    };
  };

  return <input {...getInputProps()} />;
}

export default Input;
