import './App.css'
import Header from './components/Header'
import ActiveCourses from './components/ActiviteCourses'
import Categories from './components/Categories'
import PopularCourses from './components/PopularCourses'
import ButtomNav from './components/BottonNav'
import SavedCourses from './components/SavedCourses'

function App() {

  return (
    <>
    <div className='min-h-screen bg-gradient-to-b from-sky-300 via-blue-500 to-purple-800 flex flex-col items-center'>
      <Header/>
      <div className='w-full max-w-sm p-4 rounded-t-3xl pb-20'>
        <ActiveCourses/>
        <Categories/>
        <PopularCourses/>
        <SavedCourses/>
      </div>
        <ButtomNav/>
    </div>
    </>
  )
}

export default App
