import styles from './LoginPage.module.scss';
import classNames from 'classnames/bind';
import Logo from "../../atoms/Logo";
import LoginForm from "../../molecules/LoginForm";

const cx = classNames.bind(styles);

const LoginPage = () => {
    return (
        <main className={cx('main')}>
            <p className={cx('phrase')}>one movie please,</p>
            <Logo className={cx('logo')} />
            <LoginForm className={cx('login_form')} />
        </main>
    );
}

export default LoginPage;