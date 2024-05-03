import MainSignup from './MainSignup'
import logo from '/assets/shared/logo.svg'

const Logo = () => {
    return (
        <div className='bg-pattern-header bg-no-repeat bg-[size:458px] bg-[top_-170px_center] min-h-screen
            md:bg-none relative'>
            <div className='lg:max-w-[1110px] lg:mx-auto custom-after'>
                <header className='pt-[2.875rem] md:pl-[2.438rem] md:pt-[4.5rem] lg:pt-[5.063rem] max-w-[20rem]
                        xl:pl-0'>
                    <img src={logo} alt="Officelite Logo" className='mx-auto md:mx-0' />
                </header>
                <MainSignup />
            </div>
        </div>
    )
}

export default Logo