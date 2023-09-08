
import ReactDOM from 'react-dom/client';
import BirthdayCard, { CardFriendshipDay, CardDiwali } from './BirthdayCard';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < >
    <div className='flex-container'>
      <BirthdayCard BirthdayCard="Aarti" />
      <CardFriendshipDay CardFriendshipDay="Mansi"/>
      <CardDiwali CardDiwali="Mayuri" />
    </div>
  </>
);


