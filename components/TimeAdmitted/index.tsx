import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { ChartProps, Line, PolarArea } from 'react-chartjs-2';
import colors from 'styles/variablesExport.module.scss';

import { CardTitle } from 'components/CardTitle';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export const TimeAdmitted = () => {
  const TimeAdmittedConfig: Omit<ChartProps, 'type'> = {
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
      },
    },
    data: {
      labels: [
        '00 am',
        '01 am',
        '02 am',
        '03 am',
        '04 am',
        '05 am',
        '06 am',
        '07 am',
        '08 am',
        '09 am',
        '10 am',
        '11 am',
        '12 am',
        '01 pm',
        '02 pm',
        '03 pm',
        '04 pm',
        '05 pm',
        '06 pm',
        '07 pm',
        '08 pm',
        '09 pm',
        '10 pm',
        '11 pm',
      ],
      datasets: [
        {
          data: [
            10, 5, 3, 0, 3, 0, 12, 20, 25, 20, 30, 50, 80, 50, 80, 60, 75, 51,
            63, 48, 56, 85, 74, 5, 62,
          ],
          backgroundColor: colors.orange,
          fill: true,
        },
      ],
    },
  };

  return (
    <>
      <CardTitle title={'Time Admitted'} />
      <div className={styles.outinPatientsCardContent}>
        <div style={{ flex: '4' }}>
          <Line {...(TimeAdmittedConfig as any)} className={styles.chart} />
        </div>
      </div>
    </>
  );
};
