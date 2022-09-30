// Components
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import Paragraph from './components/Paragraph';
import ProjectCardsContainer from './components/ProjectCardsContainer';

// Provider
import { UserProvider } from './context/UserContext';

// Styles
import './App.scss';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <div
        style={{
          backgroundColor: 'tomato',
          width: '100%',
          height: '20rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar />
        <Paragraph />
      </div>
      <ProjectCardsContainer />
    </UserProvider>
  );
}

export default App;
