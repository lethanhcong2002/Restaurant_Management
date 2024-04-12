import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

function Select_Basic({data}) {
  const [selected, setSelected] = React.useState('');

  return (
    <SelectList
      setSelected={val => setSelected(val)}
      data={data}
      save="value"
    />
  );
}

export default Select_Basic;
