import Header from "../components/Header";
import ActiveCourses from "../components/ActiviteCourses";
import Categories from "../components/Categories";
import PopularCourses from "../components/PopularCourses";
import SavedCourses from "../components/SavedCourses";

export default function Home() {
  return (
    <>
    <div className='min-h-screen flex flex-col items-center'>
      <Header/>
      <div className='w-full max-w-sm p-4 rounded-t-3xl pb-20'>
        <ActiveCourses />
        <Categories />
        <div className="flex justify-end my-4 -mb-7"> 
        <div className="bg-white rounded-full p-2">
          <img 
            src="/src/assets/img/Smile.png" 
            alt="Smiley icon"
            className="w-8 h-8" 
          />
        </div>
      </div>
        <PopularCourses />
        <SavedCourses />
      </div>
    </div>
    </>
  );
}