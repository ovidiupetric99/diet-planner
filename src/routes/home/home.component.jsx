import {Outlet} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../contexts/user.context';

import Directory from '../../components/directory/directory.component';
import {currentUserSnapshot} from '../../utils/firebase/firebase.utils';

const Home = () => {
  const {currentUser} = useContext (UserContext);
  const user = currentUser;
  const [userLogged, setUserLogged] = useState (null);
  const categories = [
    {
      title: 'CURRENT MACROS',
      imageUrl: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-grilled-chicken-turkey.jpg?quality=40&strip=all',
      id: 1,
      linkUrl: '/user-data',
    },
    {
      title: 'CONFIGURE USER',
      imageUrl: 'https://www.merakilane.com/wp-content/uploads/2018/06/Plant-Based-Diet-Meal-Plan-for-Beginners_-21-Day-Kickstart-Guide-slider.jpg',
      id: 2,
      linkUrl: '/edit-user',
    },
    {
      title: 'CHANGE GOAL',
      imageUrl: 'https://loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png',
      id: 3,
      linkUrl: '/configure-macros',
    },
    {
      title: 'SEE DIET',
      imageUrl: 'http://s3.amazonaws.com/img.mynetdiary.com/blog/diet-goals.jpeg',
      size: 'large',
      id: 4,
      linkUrl: '/diet',
    },
    {
      title: 'SEE YOUR BMI',
      imageUrl: 'https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-528072248.jpg',
      size: 'large',
      id: 5,
      linkUrl: '/bmi',
    },
  ];

  //https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/healthy-weight-loss-foods.jpg?quality=82&strip=1
  //https://www.merakilane.com/wp-content/uploads/2018/06/Plant-Based-Diet-Meal-Plan-for-Beginners_-21-Day-Kickstart-Guide-slider.jpg

  useEffect (
    () => {
      currentUserSnapshot (user).then (r => {
        if (r) {
          setUserLogged (r);
        }
      });
    },
    [user]
  );

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
