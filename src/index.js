import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Bits from './components/bits';
import Bit from './components/bit';
import PieChart from '@bits/pie-chart';

import pieChartExampleData from '../server/pie-chart.json';

import { getRandomColor } from './utils/colors';

import './common.css';

document.body.style.backgroundColor = getRandomColor();

ReactDOM.render(
  <Bits>
    <Bit>
      <PieChart
        hasLegend
        legendTitle='Города России'
        data={pieChartExampleData}
      />
    </Bit>
  </Bits>,
  document.getElementById('app')
);
