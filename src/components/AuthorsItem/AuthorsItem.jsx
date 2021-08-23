import './AuthorsItem.css';

function AuthorsItem(props) {

    const data = props.author;

    return (
        <li className="authorlist__author-container">
            <h3 className="authorlist__letter">{data.letter}</h3>
            <div className="authorlist__authors">
                {data.authors.map(i => (
                    <p key={i._id} className="authorlist__author">{`${i.author_lastName} ${i.author_firstName}`}</p>)
                )}
            </div>
        </li>
    )
}

export default AuthorsItem;