import React from 'react';
import styles from './index.module.scss';
import colors from 'styles/variablesExport.module.scss';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { ChartProps, Doughnut } from 'react-chartjs-2';
import { CardTitle } from 'components/CardTitle';
ChartJS.register(ArcElement, Tooltip, Legend);

export const PatientsByGenter = () => {
  const patientsByGenderConfig: Omit<ChartProps, 'type'> = {
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
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [46, 54],
          backgroundColor: [colors.primaryColor, colors.orange],
        },
      ],
    },
  };
  return (
    <>
      <CardTitle title={'Patients by Gender'} />
      <div className={styles.patientsByGenderCardContent}>
        <Doughnut
          {...(patientsByGenderConfig as any)}
          className={styles.patientsByGenderChart}
        />
      </div>
    </>
  );
};
