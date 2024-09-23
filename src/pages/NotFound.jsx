import urlNotExist from '../assets/url-not-exist.png'

import {Link} from 'react-router-dom'
function NotFound() {
    return(
        <div id="not-found">
            <h1>Sorry, this page does not exist</h1>
            <p>The short URL you clicked was deleted or never existed. Check that you entered or copy-pasted the short link correctly</p>
            <img src={urlNotExist} alt="url not exist" />
            <Link to={'/'}> <button className='volver-button'> HOME </button></Link>
        </div>
    );
}

export default NotFound;