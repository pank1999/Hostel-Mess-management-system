import { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

export default function Header() {
  const user = useContext(UserContext);
  return (
    <div className="header">
      <div className="h-left">
        <div className="logo">
          <h2>Food Add</h2>
        </div>
        <div className="links">
          <Link
            style={{
              textDecoration: 'none',
              marginLeft: '1rem',
              color: 'black',
            }}
            to="/Pricing"
          >
            Pricing
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              marginLeft: '1rem',
              color: 'black',
            }}
            to="Menu"
          >
            Menu
          </Link>
        </div>
      </div>
      <div className="h-right">
        <div className="links">
          {user.role === 'admin' ? (
            <Link
              style={{
                textDecoration: 'none',
                marginRight: '1rem',
                color: 'black',
              }}
              to="/AdminDashboard"
            >
              Dashboard
            </Link>
          ) : user.role === 'student' ? (
            <Link
              style={{
                textDecoration: 'none',
                marginRight: '1rem',
                color: 'black',
              }}
              to="User/Dashboard"
            >
              Dashboard
            </Link>
          ) : (
            ''
          )}

          {!user ? (
            <>
              <Link
                style={{
                  textDecoration: 'none',
                  marginRight: '1rem',
                  color: 'black',
                }}
                to="/Login"
              >
                Login
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  marginRight: '1rem',
                  color: 'black',
                }}
                to="/Signup"
              >
                Register
              </Link>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
