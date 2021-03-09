import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:"My new website", body:'This is my new web', author:'Sam', id:1},
        {title:"Welcome party!", body:'Welcome ...', author:'Tom', id:2},
        {title:"Web dev top tips", body:'The first tip is...', author:'Tam', id:3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> 
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'Sam')} title="Sam's Blogs" handleDelete={handleDelete}/> 
        </div>
    );
} 
 
export default Home;