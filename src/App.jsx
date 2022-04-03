import StatesProvider from './api/ContextAPI';
import styles from './styles.module.scss';
import { ArmLeftComponent } from './components/armLeft'
import { ArmRightComponent } from './components/armRight';
import { HeadComponent } from './components/head';

function App() {
  return (
    <StatesProvider>
    <div className={styles.container}>
      <HeadComponent/>
      <ArmLeftComponent/>
      <ArmRightComponent/>
    </div>
    </StatesProvider>
  );
}

export default App;
