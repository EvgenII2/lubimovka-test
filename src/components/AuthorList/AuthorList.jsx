import './AuthorList.css';

function AuthorList(props) {
    console.log('props', props.authorList);
    const arr = props.authorList;

    const letters = [];
    // arr.forEach(element => {
    //     if (!letters.includes(element[0]))
    //         letters.push({ letter: element[0].toUpperCase(), authors:  });
    // });
    // console.log('sort', arr);
    return (
        <div></div>
    )
}

export default AuthorList;