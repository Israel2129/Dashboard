import { Header } from './components/Header'
import {
    OverviewContainer,
    OverviewTodayContainer,
} from './components/OverviewContainer'

function App() {
    return (
        <>
            <Header />
            <OverviewContainer />
            <OverviewTodayContainer />
            <div>console.log("App renderizada");</div>
        </>
    )
}

export default App
