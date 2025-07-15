import { BrowserRouter, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import ChatBox from './Components/ChatBox/ChatBox'
import Sidebar from './Components/Header/Sidebar'
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
    // <BrowserRouter>
    //   <div>
    //     <Sidebar/>
    //     <Route path='/' Component={Homepage}/>
    //     <Route path='/chat' Component={Chat}/>
    //   </div>
    // </BrowserRouter>

    <>
      <RouterProvider router={router} />
    </>
    
  )
}

export default App
