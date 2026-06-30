import './GameCard.scss'

const GameCard = () => {
    return (
        <div className="game-card">
            <div className="game-card__icon">
                <svg>
                    <use href='/sprite.svg#bolt'></use>
                </svg>
            </div>

            <div className="game-card__information">
                <h2 className="game-card__title">
                    Название игры
                </h2>

                <p className="game-card__description">
                    Краткое описание игры. Буквально пара предложений
                </p>
            </div>

            <div className="game-card__stats">
                <span className="game-card__stats-label">
                    Лучший результат
                </span>

                <span className="game-card__stats-value">
                    198 мс
                </span>
            </div>

            <button className='game-card__button' type="button"></button>
        </div>
    )
}

export default GameCard
