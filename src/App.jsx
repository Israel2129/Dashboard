import { Header } from './components/Header'
import { db } from './Firebase/firebase'

console.log('Firestore conectado:', db)

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
        </>
    )
}

export default App
