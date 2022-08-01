import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const initialData = [
    //     { title: 'First Blog', body: '1st blog body', author: 'Al Hera Ahmad', id: 1 },
    //     { title: 'Second Blog', body: '2nd blog body', author: 'Al Saba Ahmad', id: 2 },
    //     { title: 'Third Blog', body: '3rd blog body', author: 'Al Hera Ahmad', id: 3 },
    //     { title: 'Fourth Blog', body: '4th blog body', author: 'Al Saba Ahmad', id: 4 }
    // ];
    
    const {data : blogs, isLoading, error} = useFetch('https://my-json-server.typicode.com/iamalhera/blog-json-server/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}

        </div>
    );
}

export default Home;