import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/42549670?s=400&u=5eae3ebd9b88f4f5ac3fdd85c9d7d1f5ba1946c7&v=4" alt="Luisa Dirce" />
            <div>
                <strong>Luisa Dirce</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
    
}