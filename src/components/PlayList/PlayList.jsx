import './PlayList.css';
import PlayItem from '../PlayItem/PlayItem';

function PlayList(props) {

    const sortPlaylist = props.playList.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <ul className="playlist">
            {sortPlaylist.map(item =>
                (<PlayItem play={item} key={item._id} />))}
        </ul>
    )
}

export default PlayList;