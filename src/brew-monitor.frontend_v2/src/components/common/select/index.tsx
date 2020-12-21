import React, { FC, Fragment, useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './styles.scss';
import Brew from '../../../types/Brew';
import { useHistory } from 'react-router';

type BrewSelectorProps = {
  activeBrew: Brew | null;
  brews: Brew[];
};

const BrewSelector: FC<BrewSelectorProps> = ({ brews }) => {
  const [activeBrew, setActiveBrew] = useState<Brew>(brews[brews.length - 1] || null);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent, brew: Brew) => {
    event.preventDefault();
    setActiveBrew(() => {
      return brew;
    });
    history.push(`/${brew.id}`);
  };

  useEffect(() => {
    history.push(`/${activeBrew?.id}`);
  }, []);

  return (
    <Fragment>
      <FormControl>
        <InputLabel id="brewSelector__label">{activeBrew?.name}</InputLabel>
        <Select className="select" onChange={() => handleChange} labelId="brewSelector__label">
          {brews.map((brew) => {
            return <MenuItem key={`brew__${brew.id}`}>{brew}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default BrewSelector;
