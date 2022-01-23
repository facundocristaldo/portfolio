import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { Bar, ChartProps, Doughnut } from 'react-chartjs-2';
import colors from 'styles/variablesExport.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { CardTitle } from 'components/CardTitle';
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const InOutPatientsTrend = () => {
  const InOutPatientsTrendConfig: Omit<ChartProps, 'type'> = {
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
        'Oct 2019',
        'Nov 2019',
        'Dev 2019',
        'Jan 2020',
        'Feb 2020',
        'Mar 2020',
      ],
      datasets: [
        {
          label: 'Inpatients',
          data: [2785, 3020, 4450, 2099, 2640, 3800],
          backgroundColor: colors.primaryColor,
        },
        {
          label: 'Outpatients',
          data: [1400, 1568, 865, 1035, 1352, 1253],
          backgroundColor: colors.green,
        },
      ],
    },
  };
  const incoming = InOutPatientsTrendConfig.data.datasets[0].data.reduce(
    (p, c) => (c as number) + (p as number)
  ) as number;
  const outcoming = InOutPatientsTrendConfig.data.datasets[1].data.reduce(
    (p, c) => (c as number) + (p as number)
  ) as number;
  const total = incoming + outcoming;
  const doughnutConfig: Omit<ChartProps, 'type'> = {
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    },
    data: {
      labels: ['Inpatients', 'Outpatients'],
      datasets: [
        {
          data: [(incoming * 100) / total, (outcoming * 100) / total],
          backgroundColor: [colors.primaryColor, colors.green],
        },
      ],
    },
  };
  return (
    <>
      <CardTitle title={'Outpatiens vs. Inpatients Trend'} />
      <div className={styles.outinPatientsCardContent}>
        <div style={{ flex: '4' }}>
          <Bar
            {...(InOutPatientsTrendConfig as any)}
            className={styles.chart}
          />
        </div>
        <div style={{ flex: '2' }}>
          <Doughnut {...(doughnutConfig as any)} className={styles.chart} />
        </div>
      </div>
    </>
  );
};
