import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./ListItem.css";

type ListItemProps = {
  id: number;
  fullName: string;
  avatar: string;
  avatarColor: string;
};

export default function ListItem({
  id,
  fullName,
  avatar,
  avatarColor,
}: ListItemProps) {
  return (
    <div className="list-Item">
      <div className="item-left">
        <div className="avatar">
          <Avatar
            alt={avatar}
            style={{ backgroundColor: avatarColor }}
            src="/static/images/avatar/2.jpg"
          />
        </div>
        <div className="name">
          <span>{fullName}</span>
        </div>
      </div>
      <div className="item-right">
        <CheckCircleOutlineIcon
          style={{
            fontSize: "30px",
            marginRight: "1rem",
            cursor: "pointer",
          }}
        />
        <Link to={`/Dashboard/Student/${id}`}>
          <button>view</button>
        </Link>
      </div>
    </div>
  );
}
