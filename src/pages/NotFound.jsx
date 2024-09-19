import {Link} from 'react-router-dom'
function NotFound() {
    return(
        <div id="notFound">
            <h1>Sorry, this page does not exist</h1>
            <p>The short URL you clicked was deleted or never existed. Check that you entered or copy-pasted the short link correctly</p>
            <img src="" alt="url not exist" />
            <Link to={'/'}> <button className='volver-button'>HOME</button></Link>
        </div>
    );
}

export default NotFound;