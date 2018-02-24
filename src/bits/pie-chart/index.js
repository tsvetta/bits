{/* <PieChart
  hasLegend
  legendTitle={i18n('legend_title')}
  data={[
      {
          text: i18n('active_offers'),
          num: props.userOffersSummary.active,
      },
      {
          text: i18n('moderating_offers'),
          num: props.userOffersSummary.moderation,
      },
      {
          text: i18n('banned_offers'),
          num: props.userOffersSummary.banned,
      },
  ]}
/> */}

// @flow
import * as React from 'react';
// import bem from 'view/lib/bem';
// const b = bem.with('pie-chart');
import { zip, last } from 'ramda';

import './styles.css';

// type PieChartData = {|
//     text: string,
//     num: number,
// |};

// type Props = {|
//     +data: $ReadOnlyArray<PieChartData>,
//     +hasLegend?: boolean,
//     +legendTitle?: string,
// |};

class PieChart extends React.PureComponent/*<Props>*/ {
  render() {
    const { props } = this;
    const R = 60;
    const circleLength = 2 * Math.PI * R;
    const piecesData = this.getPiePiecesData(props.data, circleLength);

    return (
      <div className={b()}>
        {Boolean(props.legendTitle) &&
            <p className={b('legend-title')}>
              {props.legendTitle}
            </p>
        }

        <figure className={b('figure')}>
          {this.renderLegend()}
          <figure className={b('chart')}>
            <svg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'>
              {piecesData.map(piece => (
                <circle
                  key={piece.text}
                  r={R}
                  cx='75'
                  cy='75'
                  className={b('piece')}
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
      <figcaption className={b('legend')}>
        <dl className={b('legend-content')}>
          {props.data.map((item, index) => {
            return (
              <div key={item.text} className={b('legend-row')}>
                <dt className={b('legend-item-color', { mods: { color: index } })} />
                <dd className={b('legend-item-content')}>
                  <span>{item.text}</span>
                  <span className={b('legend-num')}>{item.num}</span>
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
