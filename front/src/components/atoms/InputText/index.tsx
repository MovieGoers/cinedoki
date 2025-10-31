import styles from './InputText.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface InputTextProps {
    id: string;
    labelText: string;
    placeholder: string;
    className?: string;
}

const InputText = ({ id, className, labelText, placeholder }: InputTextProps) => {
    return (
        <div className={cx('input_wrap', className)}>
            <label htmlFor={id} className={cx('label', 'blind')}>
                {labelText}
            </label>
            <input type="text" id={id} className={cx('input')} placeholder={placeholder} />
        </div>
    )
}

export default InputText;