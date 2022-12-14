import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('https://my-json-server.typicode.com/iamalhera/blog-json-server/blogs/' + id);
    const navigate = useNavigate();

    const deleteBtnHandler = () => {
        fetch('https://my-json-server.typicode.com/iamalhera/blog-json-server/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            navigate("/");
        }
        )
    }

    return (
        <div className="blog-details">
            {isLoading && <div> Loading... </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div> {blog.body}</div>
                    <button onClick={deleteBtnHandler}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;