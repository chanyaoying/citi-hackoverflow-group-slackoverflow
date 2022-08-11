import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Tags() {
  return (
      <Autocomplete
        sx={{maxWidth:1000}}
        multiple
        id="tags-standard"
        options={fav}
        getOptionLabel={(option) => option.title}
        defaultValue={[fav[1]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Article preferences"
          />
        )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const fav = [
  { title: 'Investment Strategy' },
  {title: 'Property Market'},
  {title: 'Environment'},
  {title:"Healthcare"},
  {title: 'Global Business'},
  {title: 'Blockchain'},
];
