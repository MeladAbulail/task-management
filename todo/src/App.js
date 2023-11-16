import AddTodoitems from './Components/addTodoitems'
import TaskFilter from './Components/filterTasks'
import DisplayTasks from './Components/displayTasks'

import './App.css';

function App() {
  return (
    <div className="App">
      
      <AddTodoitems/>

      {/* <TaskFilter/> */}
      
      <DisplayTasks/>
      
    </div>
  );
}

export default App;
