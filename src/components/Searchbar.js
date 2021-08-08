import React, { useState } from 'react'
import './Searchbar.css'

function Searchbar() {
    const [input, setInput] = useState("")

    // const search = (e) => {
    //     e.preventDefault();

    //     console.log(input);
    // };

    const redirectToSearch = (e) => {
            e.preventDefault();
            window.location.href = "https://google.com/search?q=" + input;
            console.log(input);
    }

    return (
        <form className='search'>
            <div className='search__input'>
                <i class="fab fa-google"></i>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Shiver me timbers" autoFocus/>
            </div>

            <div className='invisible__button'>
                <button type='submit' onClick={redirectToSearch}></button>
            </div>
        </form>
    )
}

export default Searchbar
