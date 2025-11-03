import styles from "./LoginPage.module.scss";
import classNames from "classnames/bind";
import Logo from "../../atoms/Logo";
import LoginForm from "../../molecules/LoginForm";

const cx = classNames.bind(styles);

const LoginPage = () => {
  return (
    <main className={cx("main")}>
      <p className={cx("phrase")}>one movie please,</p>
      <Logo className={cx("logo")} />
      <LoginForm className={cx("login_form")} />
      <div className={cx("link_group")}>
        <a href="#" className={cx("find_pw_link")}>
          비밀번호 찾기
        </a>
        <a href="#" className={cx("signup_link")}>
          회원가입
        </a>
      </div>
    </main>
  );
};

export default LoginPage;
