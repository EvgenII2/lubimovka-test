import './PlayItem.css';

function PlayItem(props) {
    console.log(props.play)
    return (
        <li className="play">
            <div className="play__title-container">
                <p className="play__title">{props.play.title}</p>
            </div>
            <p className="play__lastname">{props.play.author_lastName}</p>
            <p className="play__firstname">{props.play.author_firstName}</p>
            <p className="play__year">{props.play.year}</p>
        </li>
    )
}

export default PlayItem;