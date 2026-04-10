import styles from "./Button.module.css";
import classNames from "classnames";

function Button(props) {
  const { className, type, text, handleClick } = props;

  const getButtonProps = () => {
    return {
      className: classNames(styles.button, className),
      type,
      text,
      onClick: handleClick,
    };
  };

  return <button {...getButtonProps()}>{text}</button>;
}

export default Button;
