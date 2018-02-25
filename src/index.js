import * as ReactDOM from 'react-dom';

import Bits from './components/bits';
import Bit from './components/bit';
import PieChart from '@bits/pie-chart';

import './common.css';

ReactDOM.render(
  <Bits>
    <Bit>
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
          {
            text: 'Боря',
            num: 30000,
          },
        ]}
      />
    </Bit>
  </Bits>,
  document.getElementById('app')
);
