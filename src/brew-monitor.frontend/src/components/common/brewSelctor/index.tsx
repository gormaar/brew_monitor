import React, { FC, Fragment } from 'react';
import { FormControl, MenuItem, InputLabel, makeStyles, Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';

import { Brew } from '../../../types';
import './styles.scss';

type BrewSelectorProps = {
  activeBrew: Brew;
  brews: Brew[];
};

const useStyles = makeStyles({
  select: {
    color: '#e9ecf0',
  },
  underline: {
    '&:after': {
      borderBottom: '2px solid #7fc97f',
    },
  },
});

const BrewSelector: FC<BrewSelectorProps> = ({ activeBrew, brews }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectBrew = brews.find((b) => b.name === event.target.value);
    if (selectBrew) {
      history.push(`/brew/${selectBrew?.id}`);
    }
  };

  return (
    <Fragment>
      <FormControl>
        <InputLabel id="brewSelector__label" className="select" disabled>
          Brews
        </InputLabel>
        <Select
          style={{ borderColor: '#e9ecf0', color: '#e9ecf0' }}
          className="select"
          onChange={handleChange}
          labelId="brewSelector__label"
          value={activeBrew?.name}
          input={<Input classes={{ underline: classes.underline }} />}
        >
          {brews?.map((brew) => (
            <MenuItem key={`brew__${brew.id}`} value={brew?.name}>
              {brew.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default BrewSelector;
