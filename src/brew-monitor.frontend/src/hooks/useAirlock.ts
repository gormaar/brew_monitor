import { useState, useEffect } from 'react';
import Airlock from '../types/Airlock';

const header = {
  headers: {
    'Content-type': 'application/json',
  },
};

export default () => {
  const [airlock, setAirlock] = useState<Airlock>();

  const fetchAirlock = () => {};
};
