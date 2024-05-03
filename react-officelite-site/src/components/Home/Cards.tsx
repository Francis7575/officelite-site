import { Link } from "react-router-dom"
import { CardProps } from "../../types/types"

const CardsData: CardProps[] = [
    {
        planName: 'Basic',
        planPrice: 'Free',
        userQuantity: 'Up to 5 users for free',
        benefitOne: 'Basic document collaboration',
        benefitTwo: '2 GB storage',
        benefitThree: 'Great security and support',
        link: 'Try for Free'
    },
    {
        planName: 'Pro',
        planPrice: '$9.99',
        userQuantity: 'Per user, billed monthly',
        benefitOne: 'All essential integrations',
        benefitTwo: '50 GB storage',
        benefitThree: 'More control and insights',
        link: 'Try for Free'
    },
    {
        planName: 'Ultimate',
        planPrice: '$19.99',
        userQuantity: 'Per user, billed monthly',
        benefitOne: 'Robust work management',
        benefitTwo: '100 GB storage',
        benefitThree: 'VIP support',
        link: 'Try for Free'
    },
]

const Cards: React.FC<{ data: CardProps, index: number }> = ({ data, index }) => {

    const styles = [
        { card: 'bg-white', link: 'hover:bg-royal-blue-opacity-35' },
        {
            card: 'bg-royal-blue bg-pattern-pricing bg-no-repeat bg-[top_-380px_center] md:bg-[top_-312px_left_-307px] lg:bg-[top_-375px_left_-307px]' ,
            container: 'text-white',
            link: 'text-royal-blue bg-white hover:text-royal-blue-hover',
            ul: 'text-white-opacity'
        },
        { card: 'bg-white', link: 'hover:bg-royal-blue-opacity-35' },
    ]

    return (
        <div className={`shadow-cards py-[2.5rem] rounded-[.813rem] text-center 
            md:text-left md:pl-[3rem] md:pr-[4.25rem] lg:text-center lg:px-0 w-full
            ${styles[index].card}`}>
            <div className="md:flex md:justify-between md:items-center lg:flex-col lg:justify-center 
                ">
                <div className={`text-slate-blue mb-[1.5rem] lg:mb-[3.5rem] ${styles[index].container}`}>
                    <h2 className='text-[1.25rem] leading-[1.75rem] font-bold'>
                        {data.planName}
                    </h2>
                    <p className='mt-[2.5rem] mb-[.5rem] text-[3.5rem] font-bold leading-[4rem] md:mt-4
                        md:mb-0 lg:mt-[2rem]'>
                        {data.planPrice}
                    </p>
                    <p className="leading-[1.75rem] lg:mt-[.313rem]">
                        {data.userQuantity}
                    </p>
                </div>

                <ul className={`mt-[3.5rem] leading-[1.75rem] flex flex-col gap-4 mb-[2rem] text-blue-gray
                    md:mb-0 md:mt-0 ${styles[index].ul}`}>
                    <li>
                        {data.benefitOne}
                    </li>
                    <li>
                        {data.benefitTwo}
                    </li>
                    <li>
                        {data.benefitThree}
                    </li>
                </ul>
            </div>
            <Link to="/signup" className={`px-[2.5rem] rounded-[1.75rem] text-royal-blue bg-royal-blue-opacity 
                py-[.875rem] inline-block  lg:mt-[2rem] ${styles[index].link}`}>
                {data.link}
            </Link>
        </div>
    )
}

export { Cards, CardsData }