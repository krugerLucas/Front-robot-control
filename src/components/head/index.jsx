import { InclinationHead } from "./Inclination";
import { RotationHead } from "./Rotation";
import styles from "./styles.module.scss";

export function HeadComponent(){
    return (
        <div className={styles.container}>
            <h3>CABEÇA</h3>
            <RotationHead/>
            <InclinationHead/>
        </div>
    );
}