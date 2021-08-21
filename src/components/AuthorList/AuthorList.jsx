import AuthorsItem from '../AuthorsItem/AuthorsItem';
import './AuthorList.css';

function AuthorList(props) {
    const arr = props.authorList;
    var allbooks = arr.reduce((a, b) => {
        if (!a.some((item) => { return (item.letter === b.author_lastName[0].toUpperCase()) })) {
            a.push({ letter: b.author_lastName[0].toUpperCase(), authors: [b] });
        }
        else {
            a.forEach(item => {
                if (item.letter === b.author_lastName[0].toUpperCase()
                    && (item.authors.every(author => {
                        return (author.author_firstName !== b.author_firstName ||
                            author.author_lastName !== b.author_lastName)
                    })))
                    item.authors.push(b);
            })
        }
        return a;
    }, []);
    allbooks.sort((a, b) => {
        if (a.letter > b.letter) return 1;
        if (a.letter === b.letter) return 0;
        return -1;
    });
    console.log('sort', allbooks);
    return (
        <ul className="playlist">
            {allbooks.map(item =>
                (<AuthorsItem author={item} key={item._id} />))}
        </ul>
    )
}

export default AuthorList;