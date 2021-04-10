import React, { FC, Fragment, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import './styles.scss';

type RespiratorProps = {
  frequency: number | undefined;
};

const Respirator: FC<RespiratorProps> = ({ frequency }) => {
  const [blink, setBlink] = useState<boolean>(false);
  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const simulateAirlockFrequency = async () => {
    if (frequency !== undefined) {
      const frequencyTimeout = 60 / frequency;
      for (let i = 0; i <= frequency; i++) {
        setBlink(true);
        await sleep(1000);
        setBlink(false);
        await sleep(frequencyTimeout * 1000);
      }
    }
  };

  useEffect(() => {
    simulateAirlockFrequency();
  }, [frequency]);

  return <Fragment>{blink ? <Box className="respirator" /> : <Box className="respirator--blink" />}</Fragment>;
};

export default Respirator;
