import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DataGridDemo from './DataTableGrid';
import ComboBox from './ComboBox';
import { useEffect, useState } from 'react';

const HOST = "http://localhost:4000/api";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Search() {

  const [options, setOptions] = useState([]);
  const [token, setToken] = useState('');
  const [rows, setRows] = useState([]);
  const [optionSelected, setOptionSelected] = useState('');

  const loadToken = async () => {
    //Para obtención de token se le pasa por paremetro username y password por no requerimiendo de authetización en el requisito
    // de la prueba
    const response = await fetch(`${HOST}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: "einostru", password: "Emanuel" })
    });
    const data = await response.json();
    if (data.message) return;
    setToken(data.token);
    loadCareers(data.token);
  }

  const loadCareers = async (tokenLoad) => {
    if (!tokenLoad) {
      return;
    }
    const response = await fetch(`${HOST}/careers`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenLoad}`
      }
    });
    const data = await response.json();
    if (data.message) return;

    if (data) {
      setOptions(data);
    }
  }



  const loadStudents = async (id) => {
    if (!token) {
      return;
    }
    const response = await fetch(`${HOST}/careers/${id}/students`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    setRows(data);
  }

  const handleSubmit = () => {
    if (optionSelected) {
      loadStudents(optionSelected);
    } else {
      setRows([]);
    }
  }

  const handleChange = (e, value) => {
    if (value) {
      setOptionSelected(value.id);
    } else {
      setOptionSelected('');
    }
  }


  useEffect(() => {
    loadToken();

  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  Buscador de alumnos por carrera
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              Para buscar alumnos seleccione una carrera
            </Typography>
          </Box>
          <Divider variant="middle" />

          <Box sx={{ m: 2 }}>
            <Stack spacing={2} direction="row">
              <ComboBox options={options} handleChange={handleChange} />
              <Button variant="outlined" onClick={handleSubmit}>Buscar</Button>
            </Stack>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <DataGridDemo rows={rows} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}