import classNames from "classnames";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

export function Home() {
    return (
        <div className={cx("home-container")}>
            <h1>Welcome to Vite + React + TS + SCSS</h1>
        </div>
    );
}
