import Link from 'next/link'; // Assuming you're importing Link from 'next/link' correctly
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


export default function HeroSection() {
    return (
        <div className="text-2xl h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
                <Spotlight
                    className="-top-40 right-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold" >
                    Master The Art Of Music
                </h1>
                <p className='mt-4 font-normal text-base md:text-lg text-natural-300 max-w-lg mx-auto'>
                    Mastering the art of music requires dedication, passion, and relentless practice. It's a journey of exploration, where one delves into the intricacies of melody, harmony, rhythm, and It's about .
                </p>
                <div className='mt-4'>
                    <Link href={"/courses"}>
                        <Button borderRadius='1.75rem' className="bg-white dark:bg-black text-black dark:text-white">
                            Explore here
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
