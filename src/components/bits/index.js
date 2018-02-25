import * as React from 'react';
import styles from './styles.css';

class Bits extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <section className={styles.bits}>
        {props.children}
      </section>
    );
  }
}

export default Bits;
