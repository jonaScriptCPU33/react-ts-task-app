import { useState } from 'react'
import { Input } from './Components/Input';

interface Itask {
  name: string;
  done: boolean;

}


const App = (): JSX.Element => {

  const [tasks, setTasks] = useState<Itask[]>([]);

  const addTask = (name: string):void => {
    const newTasks: Itask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  }

  const toggleDoneTask = (i: number) => {
    const newTasks: Itask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks)
  }

  const removeTask = (i: number): void => {
    const newTasks: Itask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks)
  }

  return (
    <div className='container p-5 m-6 mt-5 bg-light bg-gradient border-rounded'>
      <div className="row">
        <div>
          <Input addTask={addTask} />
          {
            tasks.map((task: Itask, i: number) => (
              <div key={i} className="card card-body mt-2 shadow p-3 mb-5 bg-body rounded border border-1 -secondary">
                <h2 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h2>
                <div>
                  <button className='btn btn-secondary' onClick={() => toggleDoneTask(i)}>
                    {task.done ? '✓' : '✘'}
                  </button>
                  <button className='btn btn-info' onClick={() => removeTask(i)}>
                    🚮
                  </button>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    </div>
  )
}


export default App;
