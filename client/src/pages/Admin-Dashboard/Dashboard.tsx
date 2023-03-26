import {
  Avatar,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Header from "../../components/header/header";
import "./Dashboard.css";
import * as React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../components/list-item/ListItem";

export default function Dashboard() {
  const [date, setDate] = React.useState("23 Jan");

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="left">
          <span>welcome</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="right">
          <span>Admin</span>
        </div>
      </div>
      <div className="list-container">
        <div className="filter-option">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>Lunch</Button>
            <Button>Dinner</Button>
            <Button>All</Button>
          </ButtonGroup>
          <div className="date">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Date</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label="Date"
                onChange={handleChange}
              >
                <MenuItem value={10}>23 January</MenuItem>
                <MenuItem value={20}>24 January</MenuItem>
                <MenuItem value={30}>25 January</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <ListItem
          fullName="Pankaj Pandey"
          avatarColor="black"
          avatar="Pankaj"
          id={1}
        />
        <ListItem
          fullName="Neeraj Pandey"
          id={2}
          avatarColor="blue"
          avatar="Neeraj"
        />
        <ListItem
          fullName="Saurabh Pandey"
          avatarColor="red"
          avatar="Saurabh"
          id={3}
        />
        <ListItem
          fullName="Priya Pandey"
          id={4}
          avatarColor="green"
          avatar="Priya"
        />
        <ListItem
          fullName="Pankaj Pandey"
          avatarColor="black"
          avatar="Pankaj"
          id={5}
        />
        <ListItem
          fullName="Neeraj Pandey"
          id={6}
          avatarColor="blue"
          avatar="Neeraj"
        />
        <ListItem
          fullName="Saurabh Pandey"
          avatarColor="red"
          avatar="Saurabh"
          id={7}
        />
        <ListItem
          fullName="Priya Pandey"
          id={8}
          avatarColor="green"
          avatar="Priya"
        />
        <div className="pagination">
          <Pagination count={5} />
        </div>
      </div>
    </div>
  );
}
