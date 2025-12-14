import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/store";

export const TodoInput = ({ setIsModalOpen }) => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim() === "") return;

        dispatch(addTask(task, description));

        setTask("");
        setDescription("");
        setIsModalOpen(false);
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTask();
        }
    }

    const handleOutsideClick = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="w-4/5 md:w-1/3 flex flex-col gap-4 p-4 border-2 border-black backdrop-blur-md bg-white/80 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <button className="flex justify-end px-1" onClick={() => handleOutsideClick()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>

                <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
                    <div className="m-1">
                        <p className="text-xl font-bold">Task Title</p>
                        <input className="border-2 border-black p-2 text-xl w-full" type="text" placeholder="Add a new task..." value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleEnterKey} />
                    </div>
                    <div className="m-1">
                        <p className=" text-xl font-bold">Task Description</p>
                        <textarea rows="5" className="border-2 border-black p-2 text-xl w-full" type="text" placeholder="Add task description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="flex gap-4 m-1 pt-5">
                        <button className="border-2 border-black p-2 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-green-300 active:bg-green-400 active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] text-xl font-bold select-none" type="submit">Submit</button>
                        <button className="border-2 border-black p-2 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-red-300 active:bg-red-400 active:translate-x-1.5 active:translate-y-1.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] text-xl font-bold select-none" type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}