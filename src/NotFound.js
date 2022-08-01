import {Link} from 'react-router-dom' ;
const NotFound = () => {
    return (  
        <div class="not-found-details">
            <h2>404 content page not found</h2>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
}
 
export default NotFound;