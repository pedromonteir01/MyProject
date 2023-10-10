import styles from '@/app/test/test.module.css'

const Abilities = ({key, name, icon}) => {
    return (
        <>
            <div key={key} className={styles.icons}>
                <p>{name}</p>
                <img src={icon} width={50} height={50} />
            </div>
        </>
    );
}

export default Abilities;