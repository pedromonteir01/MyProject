import styles from '@/app/test/test.module.css'
import Abilities from '../cardAbilities/CardAbilities';

const Card = ({key, agentName, agentPhoto, agentDescription, abilities}) => {
    return (
        <>
            <div key={key} className={styles.agent}>
                <h2>{agentName}</h2>
                <img src={agentPhoto} width={200} height={200} />
                <span>{agentDescription}</span>
                <span className={styles.abilities}>Skills</span>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        {
                            abilities.map((abilitie) => (
                                <Abilities key={abilitie.displayName} name={abilitie.displayName} icon={abilitie.displayIcon}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;