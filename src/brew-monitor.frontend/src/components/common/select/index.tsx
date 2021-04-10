import React, { FC, Fragment, useState } from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import './styles.scss';
import Brew from '../../../types/Brew';
import { useHistory } from 'react-router-dom';

type BrewSelectorProps = {
  activeBrew?: Brew;
  brews: Brew[];
};

const BrewSelector: FC<BrewSelectorProps> = ({ activeBrew, brews }) => {
  const history = useHistory();

  const [selectedBrew, setSelectedBrew] = useState<string>(activeBrew?.name ?? '');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedBrew(event.target.value as string);
    history.push(`/brew/${event.target.value as string}`);
  };

  return (
    <Fragment>
      <FormControl>
        <InputLabel id="brewSelector__label" style={{ color: 'white' }}>
          Brews
        </InputLabel>
        <Select
          style={{ borderColor: 'white' }}
          className="select"
          onChange={handleChange}
          labelId="brewSelector__label"
          value={selectedBrew}
        >
          {brews.map((brew) => (
            <MenuItem key={`brew__${brew.id}`} value={brew.id}>
              {brew.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default BrewSelector;
