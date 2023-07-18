import logo from './logo.svg';
import './App.css';
import CarForm from './Components/CarForm';
import CarList from './Components/CarList';
import CarSearch from './Components/CarSearch';
import CarValue from './Components/CarValue';

function App() {
  return (
    <div className='App'>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
