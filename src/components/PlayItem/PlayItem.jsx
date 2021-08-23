import './PlayItem.css';

function PlayItem(props) {

    return (
        <li className="play">
            <div className="play__title-container">
                <p className="play__title">{props.play.title}</p>
            </div>
            <p className="play__name">{props.play.author_lastName}</p>
            <p className="play__name">{props.play.author_firstName}</p>
            <p className="play__city-and-year">{props.play.city}</p>
            <p className="play__city-and-year">{props.play.year}</p>
        </li>
    )
}

export default PlayItem;