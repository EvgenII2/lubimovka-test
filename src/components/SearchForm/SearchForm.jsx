import React from 'react';
import './SearchForm.css';
import PlayList from '../PlayList/PlayList';
import AuthorList from '../AuthorList/AuthorList';
import search from '../../utils/Search';

function SearchForm(props) {

    const [requery, setRequery] = React.useState('');
    const [formTitle, setFormTitle] = React.useState('Поиск');
    const [isButtonIconBlack, setIsButtonIconBlack] = React.useState(false);
    const [playList, setPlayList] = React.useState([]);
    const [authorList, setAuthorList] = React.useState([]);

    const ref = React.useRef("");

    React.useEffect(() => {
        if (requery !== '') {
            const tmpPlays = search.getSearchResult((arr) => {
                return arr.filter(item =>
                    item.title.toLowerCase().includes(requery.toLowerCase()))
            });
            setPlayList(tmpPlays);
            const tmpAuthors = search.getSearchResult((arr) => {
                return arr.filter(item =>
                    item.author_lastName.toLowerCase().includes(requery.toLowerCase()))
            });
            setAuthorList(tmpAuthors);
            if (tmpPlays.length > 0 || tmpAuthors.length > 0)
                setFormTitle(`По запросу ${requery} мы нашли`);
            else
                setFormTitle(`По запросу ${requery} мы ничего не нашли`);
        }
    }, [requery])

    function handleSubmit(event) {
        event.preventDefault();
        setRequery(ref.current.value);
    }

    return (
        <section className="section-search">
            <form name="formSearch" className="form-search" onSubmit={handleSubmit}>
                <h2 className="form-search__title">{formTitle}</h2>
                <div className="form-search__input-and-button-container">
                    <input type="text" ref={ref} name="inputFromFormSearch" id="inputFromFormSearch" className="form-search__input" required minLength="1" maxLength="40" placeholder="Запрос" />
                    {/* <button type="submit" className="form-search__button" onMouseOver={() => setIsButtonIconBlack(true)} onMouseOut={() => setIsButtonIconBlack(false)}> */}
                    <button type="submit" className="form-search__button" >
                        <div className={`form-search__button-image ${isButtonIconBlack && "form-search__button-image_alt"}`}></div>
                        <span className="form-search__button-text">искать</span>
                    </button>
                </div>
            </form >
            <div className="results-container">
                {/* <PlayList playList={playList} /> */}
                <AuthorList authorList={authorList} />
            </div>
        </section>
    )
}

export default SearchForm;