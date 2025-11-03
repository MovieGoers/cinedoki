import styles from "./InputText.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface InputTextProps {
  id: string;
  labelText: string;
  placeholder: string;
  className?: string;
  type?: string;
  isRequired?: boolean;
}

const InputText = ({
  id,
  className,
  labelText,
  placeholder,
  type = "text",
  isRequired = false,
}: InputTextProps) => {
  return (
    <div className={cx("input_wrap", className)}>
      <label htmlFor={id} className={cx("label", "blind")}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={cx("input")}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};

export default InputText;
