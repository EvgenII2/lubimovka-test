import AuthorsItem from '../AuthorsItem/AuthorsItem';
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
                    })))
                    item.authors.push(b);
            })
        }
        return a;
    }, []);
    // Сортировку можно делать при push
    lettersAndAuthors.sort((a, b) => {
        if (a.letter > b.letter) return 1;
        if (a.letter === b.letter) return 0;
        return -1;
    });
    // TODO: сортировка по фамилии внутри каждой буквы
    return (
        <ul className="authorlist">
            {lettersAndAuthors.map(item =>
                (<AuthorsItem author={item} key={item.letter} />))}
        </ul>
    )
}

export default AuthorList;