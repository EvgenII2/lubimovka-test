import './PlayList.css';
import PlayItem from '../PlayItem/PlayItem';

function PlayList(props) {
    console.log(props.playList)
    return (
        <ul className="playlist">
            {props.playList.map(item =>
                (<PlayItem play={item} key={item._id} />))}
        </ul>
    )
}

export default PlayList;