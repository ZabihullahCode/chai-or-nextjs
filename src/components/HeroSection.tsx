import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] flex flex-col items-center justify-center w-full
    rounded-md relative overflow-hidden mx-auto py-10 md:py-0">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center text-white">
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
            bg-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300
            max-w-lg mx-auto"
            >If you want to apply the background color only to specific components or pages, you can directly apply the styles to those componentspages
            </p>             
            <div className="mt-4">
                <Link href={"/"}>
                  <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200
                  dark:border-slate-800"
                  >
                  Explore Courses
                  </Button>
                </Link>
            </div> 
        </div>
    </div>
  )
}

export default HeroSection