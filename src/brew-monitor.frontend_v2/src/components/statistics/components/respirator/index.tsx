import React, { FC, Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import './styles.scss';

type RespiratorProps = {
  frequency: number;
};

const Respirator: FC<RespiratorProps> = ({ frequency }) => {
  const [blink, setBlink] = useState<boolean>(false);
  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const simulateAirlockFrequency = () => {
    const frequencyTimeout = 60 / frequency;
    for (let i = 0; i <= frequency; i++) {
      setBlink(true);
      sleep(1000);
      setBlink(false);
      sleep(frequencyTimeout * 1000);
    }
  };
  return (
    <Fragment>
      {simulateAirlockFrequency}
      {blink ? <Box className="respirator" /> : <Box className="respirator--blink" />}
    </Fragment>
  );
};

export default Respirator;
