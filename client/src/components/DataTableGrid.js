import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'name',
    headerName: 'Nombre completo',
    width: 300
  },
  {
    field: 'rut',
    headerName: 'Rut',
    width: 200
  },
  {
    field: 'email',
    headerName: 'Correo',
    width: 300
  },
  {
    field: 'dateInscription',
    headerName: 'Fecha inscripción',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200
  }
];

export default function DataGridDemo({rows}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}