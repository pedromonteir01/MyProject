import styles from '@/app/components/input/input.module.css'

const Input = ({type, value, name, onChange, classe}) => {
    return(
        <input 
            type={type}
            name={name} 
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            className={styles.inputS}
        />
    );
}

export default Input;