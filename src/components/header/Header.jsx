import classNames from "classnames";
import styles from "./Header.module.css";

function Header(props) {
  const { className, title, level = 1 } = props;
  const Tag = `h${level}`;

  return <Tag className={classNames(styles.header, className)}>{title}</Tag>;
}

export default Header;
