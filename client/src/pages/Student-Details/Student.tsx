import { Avatar, Button, Modal, Typography } from '@mui/material';
import './Student.css';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { IUser, Meal, UsersPlan } from '../../interfaces/user.interface';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'string',
    width: 200,
  },
  {
    field: 'count',
    headerName: 'Count',
    type: 'number',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'boolean',
    width: 200,
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'string',
    width: 200,
  },
];

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '7px',
  p: 4,
};
export default function Student() {
  const BaseURL = 'http://localhost:3001';

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const param = useParams();

  const showToastMessage = () => {
    toast.success('Meal add successful', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { data: meals, refetch } = useQuery<Meal[]>(['meal'], async () => {
    return await Axios.get<Meal[]>(`${BaseURL}/meals/${param.id}`).then(
      (res) => {
        const mealData = res.data.map((meal) => {
          return {
            ...meal,
            date: moment(parseInt(meal.timestamp)).format('DD-MM-YYYY'),
            status: meal.isFullFilled,
            count: 1,
          };
        });
        return mealData;
      },
    );
  });

  const { data: studentDetails } = useQuery<IUser>(['studentDetails'], () => {
    return Axios.get<IUser>(`${BaseURL}/user/${param.id}`).then(
      (res) => res.data,
    );
  });
  const { data: studentPlan } = useQuery<UsersPlan>(['studentPlan'], () => {
    return Axios.get(`${BaseURL}/user/plan/${param.id}`).then(
      (res) => res.data,
    );
  });
  const [quantity, setQuantity] = useState<number>();
  const [type, setType] = useState<string>();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(quantity, type);
    await addMeal(type!, quantity!);
    setOpen(false);
    showToastMessage();
  };

  const addMeal = async (type: string, quantity: number) => {
    const mealData = {
      timestamp: Date.now(),
      userId: studentPlan?.userId,
      planId: studentPlan?.planId,
      isFullFilled: true,
      type,
    };
    return await Axios.post(`${BaseURL}/meals`, mealData).then((res) => {
      refetch();
      return res;
    });
  };
  return (
    <div className="wrapper">
      <div className="student-container">
        <div className="top">
          <div className="top-left">
            <Avatar
              alt="Remy Sharp"
              style={{
                height: '80px',
                width: '80px',
                backgroundColor:
                  '#' + Math.floor(Math.random() * 16777215).toString(16),
              }}
              src="/static/images/avatar/2.jpg"
            />
            <span>{studentDetails?.name}</span>
          </div>
          <div className="top-right">
            <Button
              onClick={handleOpen}
              variant="outlined"
              style={{ marginRight: '1rem' }}
            >
              Add Meal
            </Button>
            <Button variant="contained">view profile</Button>
          </div>
        </div>
        <div className="bottom">
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={meals || []}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add meal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <label>Meal Type</label>
                <br />
                <select
                  name="type"
                  onChange={(e) => setType(e.target.value)}
                  id="meal-type"
                >
                  <option value="">Select</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="">Quantity</label>
                <br />
                <input
                  type="number"
                  onChange={(e) => {
                    setQuantity(parseInt(e.target.value));
                  }}
                />
              </div>
              <Button variant="contained" type="submit">
                Add
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}
