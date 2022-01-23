import React from 'react';
import styles from './index.module.scss';
import colors from 'styles/variablesExport.module.scss';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CardTitle } from 'components/CardTitle';
ChartJS.register(ArcElement, Tooltip, Legend);

export const PatientsByGenter = () => {
  const patientsByGenderConfig = {
    data: {
      labels: ['Male', 'Female'],
      datasets: [
        {
          id: 1,
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
          {...patientsByGenderConfig}
          className={styles.patientsByGenderChart}
        />
      </div>
    </>
  );
};
