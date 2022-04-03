import { ElbowRight } from "./Elbow";
import styles from "./styles.module.scss";
import { WristRight } from "./Wrist";

export function ArmRightComponent(){
    return (
        <div className={styles.container}>
            <h3>BRAÇO DIREITO</h3>
            <ElbowRight/>
            <WristRight/>
        </div>
    );
}