import GameCard from './components/GameCard'
import './GamesPage.scss'

const GamesPage = () => {
    return (
        <main className="main">
            <section className='section games'>
                <div className="container">
                    <div className="games__wrapper">
                        <h1 className="games__title">
                            Игры
                        </h1>

                        <div className="games__description">
                            <p>
                                Выберите любую интересующую вас игру и улучшайте свой мозг и свой результат
                            </p>
                        </div>

                        <div className="games__list">
                            <GameCard/>

                            <GameCard/>

                            <GameCard/>

                            <GameCard/>

                            <GameCard/>

                            <GameCard/>

                            <GameCard/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GamesPage
