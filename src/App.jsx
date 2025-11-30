
import { NavLink, Outlet } from 'react-router'

function App() {
  return (
  <div className='bg-gray-50 min-h-screen'>
    <nav className='bg-white h-16 w-full shadow-sm p-4'>
      <header className='flex gap-4 items-center justify-around '>
        <h1 className='text-rose-700 font-bold text-2xl'>Recipe Book</h1>
        <div className='space-x-6'>
          <NavLink 
          to="/"
          className={({isActive})=>`hover:text-rose-700 ${isActive ? 'text-rose-600 font-bold ':'text-gray-600 font-semibold'}`}
          >Home</NavLink>
          <NavLink 
          to="recipes"
          className={({isActive})=>`hover:text-rose-700 ${isActive ? 'text-rose-600 font-bold':'text-gray-600 font-semibold'}`}
          >Recipes</NavLink>
          <NavLink 
          to="catogories"
          className={({isActive})=>`hover:text-rose-700 ${isActive?'text-rose-600 font-bold':'text-gray-600 font-semibold'}`}
          >Categories</NavLink>
        </div>
      </header>
    </nav>
    <div>
      <Outlet/>
    </div>
  </div>
  )
}

export default App
