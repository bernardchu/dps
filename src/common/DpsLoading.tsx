import * as React from 'react';
import styles from './loading.module.scss';

export default class DpsLoading extends React.PureComponent {
  public render() {
    return (
      // source: https://loading.io/css/ (CC0 license)
      <div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
    );
  }
}
