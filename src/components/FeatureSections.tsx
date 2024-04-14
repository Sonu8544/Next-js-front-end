"use client"
import courseData from "../data/music_data.json"
import Link from 'next/link'
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeatureSections = () => {
  let featureCorses = courseData.courses.filter((course: Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Music </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tighter text-white">Learn With the Best</p>
      </div>


      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap=8 justify-center">
          {featureCorses.map((item, index) => (
            <div key={item.id} className="flex justify-center my-4">

              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm  "
              >
                <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow">
                  <p className="text-lg sm:text-xl mt-4 mb-2 text-gray-300 ">{item.title}</p>
                  <p className="text-sm text-gray-400 flex-grow">{item.description}</p>
                  <Link href={`/course/${item.id}`} >
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Learn More</button>

                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>



      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>

    </div >
  )
}

export default FeatureSections
