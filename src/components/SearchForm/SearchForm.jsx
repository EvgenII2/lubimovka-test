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

    const setState = () => {
        setRequery(ref.current.value);
        const tmpPlays = (arr) => {
            return arr.filter(item =>
                item.title.toLowerCase().includes(requery.toLowerCase()))
        };
        setPlayList(search.getSearchResult(tmpPlays));
        const tmpAuthors = (arr) => {
            return arr.filter(item =>
                item.author_lastName.toLowerCase().includes(requery.toLowerCase()))
        };
        setAuthorList(search.getSearchResult(tmpAuthors));

        if (playList.length > 0) setFormTitle(`${requery} +`);
        else setFormTitle(`${requery} -`);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setState();

    }

    return (
        <>
            <form name="formSearch" className="form-search" onSubmit={handleSubmit}>
                <h2 className="form-search__title">{formTitle}</h2>
                <div className="form-search__input-and-button-container">
                    <input type="text" ref={ref} name="inputFromFormSearch" id="inputFromFormSearch" className="form-search__input" required minLength="2" maxLength="40" placeholder="Запрос" />
                    <button type="submit" className="form-search__button" onMouseOver={() => setIsButtonIconBlack(true)} onMouseOut={() => setIsButtonIconBlack(false)}>
                        <div className={`form-search__button-image ${isButtonIconBlack && "form-search__button-image_alt"}`}></div>
                        <span className="form-search__button-text">искать</span>
                    </button>
                </div>
            </form >
            <div>
                <PlayList playList={playList} />
                <AuthorList authorList={authorList} />
            </div>
        </>
    )
}

export default SearchForm;