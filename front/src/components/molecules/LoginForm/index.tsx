import InputText from "../../atoms/InputText";
import LoginButton from "../../atoms/LoginButton";
import styles from "./LoginForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div className={cx("form_wrap", className)}>
      <form>
        <div className={cx("form_group")}>
          <InputText
            id="email"
            labelText="이메일"
            placeholder="이메일을 입력해주세요."
            type="email"
            isRequired={true}
          />
          <InputText
            id="password"
            labelText="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            isRequired={true}
          />
          <LoginButton className={cx("button")} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
