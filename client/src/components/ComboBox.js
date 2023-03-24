import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox({options, handleChange}) {
    const comboBox = [];
    
    for (const opt in options) {
        let obj = {
            "label": options[opt].name,
            "id": options[opt].id
          };
          comboBox.push(obj);
      }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={comboBox}
      sx={{ width: 300 }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Carrera" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const options2 = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 }
// ];
