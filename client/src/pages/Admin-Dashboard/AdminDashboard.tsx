import { Button, ButtonGroup, Pagination } from '@mui/material';
import './Dashboard.css';
import * as React from 'react';
import ListItem from '../../components/list-item/ListItem';
import Axios from 'axios';
import { IUser } from '../../interfaces/user.interface';
export default function Dashboard() {
  const BASE_URL = 'http://localhost:3001';

  const [studentList, setStudentList] = React.useState<IUser[]>([]);
  const [query, setQuery] = React.useState('all');

  // var { data: studentList } = useQuery<IUser[]>(['studentList'], async () => {
  //   return await Axios.get<IUser[]>(`${BASE_URL}/user`).then((res) => {
  //     // console.log(res.data);
  //     return res.data;
  //   });
  // });

  React.useEffect(() => {
    const search = async () => {
      await Axios.get(`${BASE_URL}/user/filter/${query}`).then((res) => {
        if (res.data) {
          console.log(res.data);
          setStudentList(res.data);
          console.log(studentList);
        }
      });
    };
    search();
  }, [query]);

  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="search-container">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search here..."
          />
        </div>
      </div>
      <div className="list-container">
        <div className="filter-option">
          <span>Student Lists</span>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Active</Button>
            <Button>Inactive</Button>
            <Button>All</Button>
          </ButtonGroup>
        </div>
        {studentList?.map((student) => (
          <ListItem
            fullName={student.name}
            avatarColor={Math.floor(Math.random() * 16777215).toString(16)}
            avatar={student.name}
            id={student.id}
            key={student.id}
            usersPlan={student?.usersPlan}
          />
        ))}

        <div className="pagination">
          <Pagination count={5} />
        </div>
      </div>
    </div>
  );
}
