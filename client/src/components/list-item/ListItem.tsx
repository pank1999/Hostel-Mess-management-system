import { Avatar, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './ListItem.css';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersPlan } from '../../interfaces/user.interface';

interface ListItemProps {
  id: number;
  fullName: string;
  avatar: string;
  avatarColor: string;
  usersPlan: UsersPlan | null;
}

export default function ListItem({
  id,
  fullName,
  avatar,
  avatarColor,
  usersPlan,
}: ListItemProps) {
  return (
    <div className="list-Item">
      <div className="item-left">
        <div className="avatar">
          <Avatar
            alt={avatar}
            style={{ backgroundColor: `#${avatarColor}` }}
            src="/static/images/avatar/2.jpg"
          />
        </div>
        <div className="name">
          <span>{fullName}</span>
        </div>
      </div>
      <div className="item-right">
        <Chip
          label={!!usersPlan ? 'Active' : 'Inactive'}
          color={!!usersPlan ? 'success' : 'primary'}
          variant="outlined"
          style={{ marginRight: '1rem' }}
        />
        <Link to={`/Dashboard/Student/${id}`}>
          <button>view</button>
        </Link>
      </div>
    </div>
  );
}
