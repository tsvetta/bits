/* Example:
  <PieChart
    hasLegend
    legendTitle='Распределение расходов'
    data={[
      {
          text: 'Таня',
          num: 20000,
      },
      {
          text: 'Берта',
          num: 4000,
      },
      {
          text: 'Полина',
          num: 500,
      },
    ]}
  />
*/

import * as React from 'react';
import { zip, last } from 'lodash';
import styles from './styles.css';

/* ::
type PieChartData = {|
  +text: string,
  +num: number,
|};

type Props = {|
  +data: $ReadOnlyArray<PieChartData>,
  +hasLegend?: boolean,
  +legendTitle?: string,
|};
*/

class PieChart extends React.PureComponent/* :: <Props>*/ {
  render() {
    const { props } = this;
    const R = 60;
    const circleLength = 2 * Math.PI * R;
    const piecesData = this.getPiePiecesData(props.data, circleLength);

    return (
      <div className={styles.wrapper}>
        {Boolean(props.legendTitle) &&
          <p className={styles.legendTitle}>
            {props.legendTitle}
          </p>
        }

        <figure className={styles.figure}>
          {this.renderLegend()}
          <figure className={styles.chart}>
            <svg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'>
              {piecesData.map(piece => (
                <circle
                  key={piece.text}
                  r={R}
                  cx='75'
                  cy='75'
                  className={styles.piece}
                  strokeDashoffset={-1 * piece.offset}
                  strokeDasharray={`${piece.size} ${circleLength}`}
                />
              ))}
            </svg>
          </figure>
        </figure>
      </div>
    );
  }

  renderLegend() {
    const { props } = this;

    return (
      <figcaption className={styles.legend}>
        <dl className={styles.legendContent}>
          {props.data.map((item, index) => {
            return (
              <div key={item.text} className={styles.legendRow}>
                <dt className={[styles.legendItemColor, styles[`color-${index}`]].join(' ')} />
                <dd className={styles.legendItemContent}>
                  <span>{item.text}</span>
                  <span className={styles.legendNum}>{item.num}</span>
                </dd>
              </div>
            );
          })}
        </dl>
      </figcaption>
    );
  }

  getPiePiecesData(data/*: $ReadOnlyArray<PieChartData>*/, circleLength/*: number*/) {
    const nums = data.map(p => p.num);
    const sumNums = nums.reduce((acc, x) => acc + x, 0);
    const sizes = nums.map(num => (num / sumNums) * circleLength);

    const offsets = sizes
      .reduce((acc, size) => [ ...acc, last(acc) + size ], [ 0 ])
      .slice(0, -1);

    return zip(sizes, offsets, data)
      .map(([ size, offset, { text } ]) => ({ size, offset, text }));
  }
}

export default PieChart;
