import React, { FC, Fragment, useState } from 'react';
import { FormControl, MenuItem, InputLabel, makeStyles, Input, colors } from '@material-ui/core';
import Select from '@material-ui/core/Select';

import './styles.scss';
import Brew from '../../../types/Brew';
import { useHistory } from 'react-router-dom';

type BrewSelectorProps = {
  activeBrew?: Brew;
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

  const [selectedBrew, setSelectedBrew] = useState<string>(activeBrew?.name ?? '');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedBrew(event.target.value as string);
    history.push(`/brew/${event.target.value as string}`);
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
          value={selectedBrew ?? ''}
          defaultValue=""
          input={<Input classes={{ underline: classes.underline }} />}
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
