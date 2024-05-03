import Main from './MainHome'
import logo from '/assets/shared/logo.svg'

const Header = () => {
    return (
        <div className='bg-pattern-header bg-no-repeat bg-[size:458px] bg-[top_-170px_center] min-h-screen
                md:bg-[top_-106px_right_-120px] lg:bg-[top_-95px_right_95px]'>
            <header className='lg:max-w-[1110px] xl:mx-auto'>
                <div className='pt-[2.875rem] md:pl-[2.438rem] md:pt-[4.5rem] lg:pt-[5.063rem] xl:pl-0'>
                    <img src={logo} alt="Officelite Logo" className='mx-auto md:mx-0' />
                </div>
            </header>
            <Main />
        </div>
    )
}

export default Header