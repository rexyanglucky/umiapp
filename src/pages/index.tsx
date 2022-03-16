import styles from './index.less';
import test from '../test';

export default function IndexPage() {
  test.said();
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
