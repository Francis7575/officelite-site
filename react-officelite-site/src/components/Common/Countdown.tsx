import { useState, useEffect } from 'react';
import { TimeLeft } from '../../types/types';

const Countdown = ({ isSignupPage }: { isSignupPage: boolean }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference: number = +new Date('2024-11-04') - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const renderTime = (time: number, label: string) => {
        const formattedTime = time < 10 ? `0${time}` : time; // Add leading zero if time is a single digit
        return (
            <div key={label} className={`${isSignupPage ? 'bg-royal-blue-opacity-10' : 'bg-slate-blue'} 
                flex flex-col items-center py-[.625rem] md:py-[1rem] px-[1rem] font-bold rounded-[.25rem]
                md:rounded-[.813rem] md:gap-[.313rem]`}>
                <span className={`${isSignupPage ? 'text-royal-blue' : 'text-white'} leading-[3rem] 
                    text-[2rem] md:text-[3.5rem]`}>
                    {formattedTime}
                </span>
                <span className={`${isSignupPage ? 'text-slate-blue-opacity-50' : 'text-white-opacity-50'} 
                    text-[.75rem] leading-[1.75rem] md:text-[1rem]`}>
                    {label}
                </span>
            </div>
        );
    };

    return (
        <>
            <h2 className={`${isSignupPage ? 'text-slate-blue' : 'text-white'} uppercase font-bold tracking-[.313rem] 
                leading-[3rem] mb-[1.125rem] lg:mb-0`}>
                Coming <span className='text-royal-blue'>4 Nov 2024</span>
            </h2>
            <div className='flex gap-[.875rem]'>
                {Object.entries(timeLeft).map(([unit, value]) =>
                    renderTime(value, unit)
                )}
            </div>
        </>
    );
}

export default Countdown;