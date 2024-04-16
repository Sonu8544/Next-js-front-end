"use client"

import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffectWrapper() {
    const project = [
        {
          title: "Stripe",
          description:
            "A technology company that builds economic infrastructure for the internet.",
          link: "https://stripe.com",
        },
        {
          title: "Netflix",
          description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
          link: "https://netflix.com",
        },
        {
          title: "Google",
          description:
            "A multinational technology company that specializes in Internet-related services and products.",
          link: "https://google.com",
        },
        {
          title: "Meta",
          description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
          link: "https://meta.com",
        },
        {
          title: "Amazon",
          description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          link: "https://amazon.com",
        },
        {
          title: "Microsoft",
          description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
          link: "https://microsoft.com",
        },
      ];

  return (
    <>
        <div className="text-center mt-[4rem]">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Music </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tighter text-white">Learn With the Best</p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={project} />
        </div>
        <div className="flex justify-center"> 
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6">Learn More</button>
        </div>
    </>
  )
}
