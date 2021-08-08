import React from 'react'
import './LinkContainer.css'

export function LeftLinkContainer() {
    return (
            <div className='left'>
                <li className='yt'>
                    <i class="fab fa-youtube"></i>
                    <a href='https://www.youtube.com/'>Youtube</a>
                </li>
                <li className='am'>
                    <i class="fab fa-apple"></i>
                    <a href='https://music.apple.com/us/listen-now'>Music</a>
                </li>
                <li className='tw'>
                    <i class="fab fa-twitch"></i>
                    <a className='tw' href='https://www.twitch.tv/'>Twitch</a>
                </li>
                <li className='nf'>
                    <i class="fas fa-tv"></i>
                    <a className='nf' href='https://www.netflix.com/browse'>Netflix</a>
                </li>
                <li className='twt'>
                    <i class="fab fa-twitter"></i>
                    <a href='https://twitter.com/home'>Twitter</a>
                </li>
            </div>
    )
}



export function RightLinkContainer() {
    return (
            <div className='right'>
                <li>
                    <a className='lol' href='https://www.reddit.com/'>Reddit</a>
                    <i class="fab fa-reddit"></i>
                </li>
                <li>
                    <a className='lol' href='https://github.com/'>Github</a>
                    <i class="fab fa-github"></i>
                </li>
                <li>
                    <a className='lol' href='https://apply.commonapp.org/dashboard'>CommonApp</a>
                    <i class="fas fa-graduation-cap"></i>
                </li>
                <li>
                    <a className='lol' href='https://classroom.google.com/h'>Classroom</a>
                    <i class="fas fa-chalkboard-teacher"></i>
                </li>
                <li>
                    <a className='lol' href='https://www.reactiflux.com/'>Reactiflux</a>
                    <i class="fab fa-react"></i>
                </li>
            </div>
            
    )
}




