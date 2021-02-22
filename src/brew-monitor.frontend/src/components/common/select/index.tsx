import React, { FC, Fragment } from 'react';
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

  const handleChange = (event: React.ChangeEvent, brewId: string) => {
    event.preventDefault();
    //setNewActive(brew);
    history.push(`/${brewId}`);
  };

  return (
    <Fragment>
      <FormControl>
        <InputLabel id="brewSelector__label" className="label">
          Brews
        </InputLabel>
        <Select className="select" onChange={() => handleChange} labelId="brewSelector__label" value={activeBrew}>
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
