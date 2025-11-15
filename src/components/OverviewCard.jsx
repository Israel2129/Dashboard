import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

const networkLogo = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo,
}

const networkcolors = {
    Facebook: 'bg-(--facebook)',
    Twitter: 'bg-(--twitter)',
    Instagram: '[background-image:var(--gradient-instagram)]',
    YouTube: 'bg-(--youtube)',
}

export const OverviewCard = ({
    user,
    audienceType,
    audience,
    network,
    isUp,
    today,
}) => {
    return (
        <article className='bg-(--light-grayish-blue) w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center dark:bg-(--dark-desaturated-blue) hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
            <div className={`${networkcolors[network]} h-1 mb-8`}></div>
            <div className='flex items-center  place-content-center gap-2  '>
                <img
                    src={networkLogo[network]}
                    alt={`Logo ${network}`}
                />
                <p className='text-xs text-(--dark-grayish-blue) font-extrabold'>
                    {user}
                </p>
            </div>
            <p className='text-[56px] font-bold text-(--very-dark-blue) dark:text-(--white) '>
                {audience}
            </p>
            <p className='uppercase tracking-[5px] text-(--dark-grayish-blue) text-xs'>
                {audienceType}
            </p>
            <div className='flex items-center place-content-center gap-1 mt-4'>
                <img
                    src={isUp ? iconUp : iconDown}
                    alt='icon arrow'
                />
                <p
                    className={`text-xs font-bold ${
                        isUp ? 'text-(--lime-green)' : 'text-(--red)'
                    }`}
                >
                    {today} Today
                </p>
            </div>
        </article>
    )
}

export const OverviewTodayCard = ({
    network,
    statsType,
    stats,
    porcentage,
    isUp,
}) => {
    return (
        <article className='bg-(--light-grayish-blue) w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[18px] cursor-pointer dark:bg-(--dark-desaturated-blue) hover:brightness-95 hover:dark:brightness-125 '>
            <div className='flex justify-between items-center '>
                <p className=' font-bold text-(--dark-grayish-blue)'>
                    {statsType}
                </p>
                <img
                    src={networkLogo[network]}
                    alt='logos network'
                />
            </div>
            <div className='flex justify-between'>
                <p className='text-[42px] font-bold text-(--very-dark-blue) dark:text-(--white)'>
                    {stats}
                </p>
                <div className='flex items-center place-content-center gap-1 '>
                    <img
                        src={isUp ? iconUp : iconDown}
                        alt='icon arrow'
                    />
                    <p
                        className={`text-xs font-bold ${
                            isUp ? 'text-(--lime-green)' : 'text-(--red)'
                        }`}
                    >
                        {porcentage}
                    </p>
                </div>
            </div>
        </article>
    )
}
