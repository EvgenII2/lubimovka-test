import './AuthorsItem.css';

function AuthorsItem(props) {
    const data = props.author;
    return (
        <li className="play">
            <p className="play__title">{data.letter}</p>
            <div>
                {data.authors.map(i => 
                    <p>{i.author_lastName}</p>
                    )}
            </div>
        </li>
    )
}

export default AuthorsItem;