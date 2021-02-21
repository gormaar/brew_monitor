import React, { FC, Fragment, useState } from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import './styles.scss';
import Brew from '../../../types/Brew';
import { useHistory } from 'react-router-dom';

type BrewSelectorProps = {
  activeBrew: Brew | undefined;
  brews: Brew[];
};

const BrewSelector: FC<BrewSelectorProps> = ({ activeBrew, brews }) => {
  const [active, setActive] = useState<Brew>(activeBrew ?? brews[-1]);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent, brew: Brew) => {
    event.preventDefault();
    setActive(brew);
    history.push(`/${brew.id}`);
  };

  // useEffect(() => {
  //   history.push(`/${active?.id}`);
  // }, [activeBrew]);

  return (
    <Fragment>
      <FormControl>
        <InputLabel id="brewSelector__label">{active?.name}</InputLabel>
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
