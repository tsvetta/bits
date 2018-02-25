import * as React from 'react';
import styles from './styles.css';

class Bit extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <article className={styles.bit}>
        {props.children}
      </article>
    );
  }
}

export default Bit;
