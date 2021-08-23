import './PlayList.css';
import PlayItem from '../PlayItem/PlayItem';

function PlayList(props) {

    const sortPlaylist = props.playList.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
        return -1;
    });

    return (
        <ul className="playlist">
            {sortPlaylist.map(item =>
                (<PlayItem play={item} key={item._id} />))}
        </ul>
    )
}

export default PlayList;