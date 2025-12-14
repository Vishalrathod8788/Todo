import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    return (
      <div className="w-screen h-screen top-0 left-0 fixed backdrop-blur-md flex justify-center items-center  brightness-95">
        <TodoInput setIsModalOpen={setIsModalOpen} />
      </div>
    )
  }
  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto flex flex-col gap-10 justify-start items-center p-10 relative">
      {/* Desktop: Add Button - Top */}
      <div className="hidden md:flex w-full justify-end">
        <div
          onClick={() => setIsModalOpen(true)}
          className="
          /* Base Container */
          inline-flex items-center justify-center
          text-lg font-bold cursor-pointer
          
          /* Neobrutalism Core */
          text-black
          border-3 border-black rounded-none
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          
          /* Interactive States */
          hover:translate-x-1 hover:translate-y-1
          hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
          active:translate-x-1.5 active:translate-y-1.5
          active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
          
          /* Smooth Transitions */
          transition-all duration-150 ease-out
          
          /* Prevent text selection */
          select-none
        ">
          <div className="p-4 bg-amber-400 border-r-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <div className="px-6 py-3 bg-yellow-200">
            Add New Task
          </div>
        </div>
      </div>

      {/* TodoList */}
      <TodoList />

      {/* Mobile: Floating Add Button - Bottom Right */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="
        /* Mobile Only */
        md:hidden
        
        /* Position */
        fixed bottom-6 right-6 z-50
        
        /* Base Container */
        flex items-center justify-center
        cursor-pointer
        
        /* Neobrutalism Core */
        text-black
        border-3 border-black rounded-none
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        
        /* Interactive States */
        hover:translate-x-1 hover:translate-y-1
        hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-1.5 active:translate-y-1.5
        active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
        
        /* Smooth Transitions */
        transition-all duration-150 ease-out
        
        /* Prevent text selection */
        select-none
      ">
        <div className="p-4 bg-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
    </div>


  )
}

export default App;