import AuthorItem from '../AuthorItem/AuthorItem';
import './AuthorList.css';

function AuthorList(props) {
    // Какое-то очень сложное решение придумал.
    // Хорошо бы иметь author_id - плохо делать проверку по имени и фамилии.
    var lettersAndAuthors = props.authorList.reduce((a, b) => {
        if (!a.some((item) => { return (item.letter === b.author_lastName[0].toUpperCase()) })) {
            a.push({ letter: b.author_lastName[0].toUpperCase(), authors: [b] });
        }
        else {
            a.forEach(item => {
                if (item.letter === b.author_lastName[0].toUpperCase()
                    && (item.authors.every(author => {
                        return (author.author_firstName !== b.author_firstName ||
                            author.author_lastName !== b.author_lastName)
                    }))) {
                    item.authors.push(b);
                    item.authors.sort((a, b) => a.author_lastName.localeCompare(b.author_lastName))
                }
            })
        }
        return a;
    }, []).sort((a, b) => a.letter.localeCompare(b.letter));

    return (
        <ul className="authorlist">
            {lettersAndAuthors.map(item =>
                (<AuthorItem author={item} key={item.letter} />))}
        </ul>
    )
}

export default AuthorList;