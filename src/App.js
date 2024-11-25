import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDays from './component/CreateDays';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:param_day' element={<Day />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_days' element={<CreateDays />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
