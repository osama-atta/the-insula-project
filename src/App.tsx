import { RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Chat from './Pages/Chat'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    
  },
  {
    path: '/chat',
    element: <Chat/>
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
}

export default App
