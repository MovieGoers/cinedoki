import classNames from "classnames";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx("home-container")}>
            <h1>Deploy test</h1>
        </div>
    );
}

export default Home;