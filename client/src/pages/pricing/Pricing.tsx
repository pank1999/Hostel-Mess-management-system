import { Button, Chip } from '@mui/material';
import './Pricing.css';

export default function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-top">
        <span>Plan Pricing</span>
      </div>
      <div className="pricing-bottom">
        <div className="item">
          <p className="title">One Month</p>
          <p>60 meals</p>
          <Chip label="RS 3300-/" color="success" variant="outlined" />
          <br />
          <Button style={{ marginTop: '1rem' }} variant="contained">
            select
          </Button>
        </div>
        <div className="item">
          <p className="title">Three Months</p>
          <p>180 meals</p>
          <Chip label="RS 3300-/" color="success" variant="outlined" />
          <br />
          <Button style={{ marginTop: '1rem' }} variant="contained">
            select
          </Button>
        </div>
        <div className="item">
          <p className="title">Six Months</p>
          <p>360 meals</p>
          <Chip label="RS 3300-/" color="success" variant="outlined" />
          <br />
          <Button style={{ marginTop: '1rem' }} variant="contained">
            select
          </Button>
        </div>
      </div>
    </div>
  );
}
