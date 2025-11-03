import InputText from "../../atoms/InputText";
import Logo from "../../atoms/Logo";

const MarkupPage = () => {
    return (
        <div>
            <Logo />
            <InputText id={"email"} placeholder={"email / 이메일"} labelText={"이메일"} />
            <InputText id={"password"} placeholder={"password / 비밀번호"} labelText={"비밀번호"} />
        </div>
    )
}

export default MarkupPage;
