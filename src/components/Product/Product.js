import { UserCard } from 'react-ui-cards';
import JEE1 from '../../images/JEE1.png';
import IES1 from '../../images/IES1.jpg';
import IAS1 from '../../images/IAS1.jpg';

export const Product = () => (
  <div>
      <br></br>
      <br></br>
    <div className="ProductMain">
      <h1><strong>Our Product</strong></h1>
    </div>
    <br></br>
      <br></br>
    <div className="Product">
      <UserCard
        float
        href=""
        header={JEE1}
        name="TOPPERS NOTES & BOOKS FOR IIT/NEET"
      />
      <UserCard
        float
        href=""
        header={IES1}
        name="TOPPERS NOTES & BOOKS FOR IES/GATE"
      />
      <UserCard
        float
        href=""
        header={IAS1}
        name="TOPPERS NOTES & BOOKS FOR IAS PREPARATION"
      />
    </div>
  </div>
);
