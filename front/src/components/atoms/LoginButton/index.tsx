import styles from "./LoginButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface LoginButtonProps {
  className?: string;
}

const LoginButton = ({ className }: LoginButtonProps) => {
  return (
    <button type="submit" className={cx("button", className)}>
      로그인
    </button>
  );
};

export default LoginButton;
