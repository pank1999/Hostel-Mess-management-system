import { Avatar, Button } from "@mui/material";
import Header from "../../components/header/header";
import "./Student.css";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    headerName: "Date",
    type: "Date",
    width: 200,
    editable: true,
  },
  {
    field: "count",
    headerName: "Count",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
    width: 200,
    editable: true,
  },
];

const rows = [
  { id: 1, date: "23 January", status: true, count: 1 },
  { id: 2, date: "24 January", status: true, count: 2 },
  { id: 3, date: "25 January", status: true, count: 1 },
  { id: 4, date: "26 January", status: false, count: 0 },
  { id: 5, date: "27 January", status: true, count: 1 },
  { id: 6, date: "28 January", status: true, count: 1 },
  { id: 7, date: "29 January", status: true, count: 1 },
];

export default function Student() {
  return (
    <div className="wrapper">
      <Header />
      <div className="student-container">
        <div className="top">
          <div className="top-left">
            <Avatar
              alt="Remy Sharp"
              style={{ height: "80px", width: "80px", backgroundColor: "blue" }}
              src="/static/images/avatar/2.jpg"
            />
            <span>Pankaj Pandey</span>
          </div>
          <div className="top-right">
            <Button variant="outlined" style={{ marginRight: "1rem" }}>
              Todays Meal
            </Button>
            <Button variant="contained">view profile</Button>
          </div>
        </div>
        <div className="bottom">
          <Box sx={{ height: 400, width: "100%" }}>
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
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </div>
  );
}
