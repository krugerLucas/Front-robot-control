import { ElbowLeft } from "./Elbow";
import styles from "./styles.module.scss";
import { WristLeft } from "./Wrist";

export function ArmLeftComponent(){
  
    return (
        <div className={styles.container}>
            <h3>BRAÇO ESQUERDO</h3>
            <ElbowLeft/>
            <WristLeft/>
        </div>
    );
}