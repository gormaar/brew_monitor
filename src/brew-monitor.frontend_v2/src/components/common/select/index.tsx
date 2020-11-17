import React, { FC, Fragment } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './styles.scss';

const BrewSelector: FC = () => {
  const activeBrew = '';
  const brews = ['a', 'b'];
  return (
    <Fragment>
      <FormControl>
        <InputLabel>{activeBrew}</InputLabel>
        <Select className="select">
          {brews.map((brew) => {
            return <MenuItem>{brew}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default BrewSelector;
