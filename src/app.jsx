import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouteTasks } from './modules/routes';
function App() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex'>
        {/* Sidebar */}
        <div className='w-1/4 h-screen bg-orange-500 p-4' style={{ backgroundColor: 'rgba(255, 165, 0, 0.9)' }}> {/* Added inline style */}
          <h2 className='text-lg font-semibold mb-4'>Sidebar</h2>
          <div className='space-y-2'>
            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={window.location = '/tasks'}>
              Tasks
            </button>
            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' >
              Important
            </button>
            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
              Planned
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className='w-3/4 p-4'>
  <RouteTasks />

        </div>
      </div>
    </div>
  );
}


function Tasks( ){
return (
<h1>fewffw</h1>
)
}
const container = document.createElement('div');
container.id = 'root';
document.body.appendChild(container);

createRoot(container).render(<App />);
export default Tasks
