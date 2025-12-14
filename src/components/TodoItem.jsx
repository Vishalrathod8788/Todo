import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/store";

export const TodoItem = ({ task, index }) => {
    const dispatch = useDispatch();
    const handleDeleteTask = () => {
        dispatch(deleteTask(index));
    }

    const handleUpdateTask = () => {
        dispatch(updateTask(index));
    }

    return (
        <li className=" w-full border-2  border-black list-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="p-4 border-b-2 border-black ">
                <h3 className={`text-lg font-bold ${task.completed ? "line-through text-gray-500" : ""}`}>{task.task}</h3>
                {task.description && (<p className="text-sm text-gray-600 mt-1">
                    {task.description}
                </p>)}
            </div>
            {/* <div clas   sName="text-sm font-light line-clamp-2 false">{task.description}</div> */}
            <div className="grid grid-cols-2">
                {/* Delete Button */}
                <button
                    onClick={handleDeleteTask}
                    className="p-2 border-r-2 border-black hover:bg-gray-50 active:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                    </svg>
                </button>

                {/* Complete/Undo Button */}
                <button
                    onClick={handleUpdateTask}
                    className="p-2 hover:bg-gray-50 active:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    {task.completed ? (
                        // Filled Check Circle (Completed State)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        // Empty Check Circle (Pending State)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </li >
    )
}
