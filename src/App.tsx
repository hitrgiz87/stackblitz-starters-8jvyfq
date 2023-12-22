import { FC } from 'react';
import MyButton from './MyButton';
import AboutPage from './AboutPage';
import Profile from './Profile';
import Navigation from './NavBar';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Navigation />
      <div>
        <Profile />
      </div>

      <MyButton href={undefined} />

      <div>
        <MyButton href="https://www.youtube.com" />
      </div>

      <div>
        <AboutPage />
      </div>
    </div>
  );
};
