import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberTok = (number) => {
    if (number >= 10000) {
        number = number / 1000
        return number + 'k'
    } else {
        return number
    }
}

export const OverviewContainer = () => {
    return (
        <section className='max-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto'>
            {data.overview.map((item) => (
                <OverviewCard
                    key={item.id}
                    user={item.user}
                    audienceType={item.audienceType}
                    audience={convertNumberTok(item.audience)}
                    network={item.network}
                    isUp={item.isUp}
                    today={item.today}
                />
            ))}
        </section>
    )
}
console.log()

export const OverviewTodayContainer = () => {
    return (
        <section>
            <h2 className='text-2xl font-bold mb-[27px] text-(--dark-grayish-blue) ml-8 '>
                Overview Today
            </h2>
            <div className='flex flex-wrap'>
                {data['overview-today'].map((item) => (
                    <OverviewTodayCard
                        key={item.id}
                        network={item.network}
                        statsType={item.statsType}
                        stats={convertNumberTok(item.stats)}
                        porcentage={item.porcentage}
                        isUp={item.isUp}
                    />
                ))}
            </div>
        </section>
    )
}
