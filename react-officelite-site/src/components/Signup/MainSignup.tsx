import Countdown from '../Common/Countdown';
import Form from './Form';

const MainSignup = () => {
    return (
        <main className='lg:max-w-[1110px] lg:mx-auto lg:px-[2.438rem] xl:px-0'>
            <div className='mt-[5rem] md:mt-[6.5rem] lg:mt-[7.875rem]'>
                <section className='lg:flex lg:gap-[4rem] xl:gap-[7.813rem]'>
                    <div className='flex flex-col items-center gap-[1rem] text-center 
                    px-[1.5rem] md:gap-[1.5rem] md:mb-[2.5rem] lg:px-0 lg:mb-0 lg:text-left lg:items-start
                    lg:max-w-[33.75rem] lg:gap-0 xl:pt-[1.75rem]'>
                        <h1 className='text-[2.5rem] font-bold leading-[3rem] text-slate-blue lg:text-[3.5rem]
                        lg:leading-[4rem]'>
                            Work smarter. Save time.
                        </h1>
                        <p className='text-blue-gray leading-[1.625rem] md:px-[5rem] lg:px-0 lg:mt-[1.5rem] lg:mb-[2.5rem]'>
                            Easily manage your projects. Get on the list and receive
                            in-app perks available only to early subscribers. We are
                            moving into final development and getting ready for official
                            launch soon.
                        </p>
                        <Countdown isSignupPage={true} />
                    </div>
                    <Form />
                </section>
            </div>
        </main>
    )
}

export default MainSignup