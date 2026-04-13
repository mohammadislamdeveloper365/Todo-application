import styles from "./Input.module.css";
import classNames from "classnames";

function Input(props) {
  const {
    className,
    placeholder = "",
    type,
    name,
    value,
    handleChange,
  } = props;

  const getInputProps = () => {
    return {
      className: classNames(styles.input, className),
      placeholder,
      type,
      name,
      value,
      onChange: handleChange,
    };
  };

  return <input {...getInputProps()} />;
}

export default Input;
