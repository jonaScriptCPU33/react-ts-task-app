import { useRef, useState } from "react";


type FormElement = React.FormEvent<HTMLFormElement>;
type InputElement = React.ChangeEvent<HTMLInputElement>

export const Input = ({ addTask }:any) => {

    const [newTask, setNewTask] = useState('');
    const taskInput = useRef<HTMLInputElement>(null);

    const handleOnChange = ({ target }: InputElement) => {
        setNewTask(target.value);
    }

    const handleOnSubmite = (event: FormElement) => {
        event.preventDefault();

        addTask(newTask);

        setNewTask('');
        taskInput.current?.focus();
    }
    return (
        <div className='card p-5 shadow p-3 mb-5 bg-body rounded'>
            <div className="div-card-body">
                <form onSubmit={handleOnSubmite}>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        value={newTask}
                        className='form-control'
                        ref={taskInput}
                        autoFocus
                    />
                    <button className='btn btn-dark mt-3'>Save</button>
                </form>
            </div>
        </div>
    )
}