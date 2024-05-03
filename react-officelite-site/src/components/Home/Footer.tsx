import Countdown from "../Common/Countdown"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-midnight-blue pb-[6.25rem] pt-[55.875rem] mt-[-49.625rem] bg-pattern-footer 
            bg-no-repeat bg-[size:1202px] bg-[top_96px_left_-159px] md:mt-[-31.125rem] md:pt-[36.813rem] 
            lg:mt-[-15.875rem] lg:pt-[21rem] lg:pb-[5.688rem]">
      <div className="xl:max-w-[1110px] xl:mx-auto">
        <div className='px-[1.5rem] flex flex-col items-center lg:flex-row lg:justify-between xl:px-0'>
          <div>
            <Countdown isSignupPage={false} />
          </div>
          <Link to="/signup" className='inline-block text-white bg-royal-blue py-[.875rem] px-[2.5rem] mt-[2.5rem]
            rounded-[1.75rem] hover:bg-royal-blue-hover lg:mt-0'>
            Get Started
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer