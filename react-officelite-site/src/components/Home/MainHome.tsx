import { Cards, CardsData } from './Cards'
import illustrationCharts from '/assets/home/illustration-charts.svg'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <main className='xl:max-w-[1110px] xl:mx-auto'>
            <div className='mt-[5rem] md:mt-[6.5rem]'>
                <section className='md:flex md:flex-row-reverse md:items-center md:gap-[3.93rem] md:px-[2.5rem]
                    lg:justify-between xl:px-0'>
                    <img
                        src={illustrationCharts}
                        alt=""
                        className='max-w-[10.688rem] mx-auto md:max-w-[17.563rem] md:mx-0 lg:max-w-[23rem]
                    xl:max-w-[29.688rem]'/>
                    <article className='mt-[4rem] px-[1.5rem] text-center flex flex-col items-center 
                        gap-[1.5rem] md:text-left md:px-0 md:items-start md:mt-0'>
                        <h1 className='text-slate-blue text-[2.5rem] leading-[3rem] font-bold lg:text-[3.5rem]
                        lg:leading-[4rem]'>
                            A simple solution to complex tasks is coming soon
                        </h1>
                        <p className='text-blue-gray leading-[1.625rem] lg:text-[1.125rem] lg:leading-[1.75rem]'>
                            Say goodbye to inefficient juggling of multiple apps, teams, and projects.
                            Officelite is the new collaboration platform built with an intuitive interface
                            to improve productivity.
                        </p>
                        <Link to="/signup" className='text-white bg-royal-blue min-w-[10.688rem] py-[.875rem] 
                        rounded-[1.75rem] shadow-get-started hover:bg-royal-blue-hover text-center 
                        lg:mt-[.5rem]'>
                            Get Started
                        </Link>
                    </article>

                </section>
                <section className='mt-[6.25rem] px-[1.5rem] flex flex-col gap-8 md:mt-[8.75rem] md:px-[2.5rem]
                    md:gap-[1.5rem] lg:mt-[11.5rem] lg:flex-row lg:gap-[1.875rem] xl:px-0'>
                    {CardsData.map((data, index) => (
                        <Cards key={index} data={data} index={index} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default Main