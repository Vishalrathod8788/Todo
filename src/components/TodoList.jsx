import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const tasks = useSelector((state) => state.todo);

    if (tasks.length === 0) {
        return (
            <div className="w-full max-w-4xl mx-auto mt-6 p-8">
                <p className="text-center text-gray-500">
                    📝 No tasks yet. Add your first task!
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto mt-6">
            {/* Vertical Stack - No gaps */}
            <div className="space-y-6">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={task.id || index}
                        task={task}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};