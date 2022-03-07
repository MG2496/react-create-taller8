import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import {useState} from 'react';

function App() {
  const initialState =[

  ]

  const [ students, setStudents ] = useState(initialState);

  const handleNewStudent = student =>{
    setStudents([...students, student ])
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Students student={students}/>
        <AddStudent addNewStudent={handleNewStudent}/>
      </header>
    </div>
  );
}

export default App;
