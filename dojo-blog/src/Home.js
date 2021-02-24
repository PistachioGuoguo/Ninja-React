import {useState} from 'react';



const Home = () => {
 
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setAge(age + 1);
    //     // console.log('hello, ninjas');
    // }

    // const handleClickAgain = (name) =>{
    //     console.log(name);
    // }

    const [blogs, setBlogs] = useState([
        {title:"My new website", body:'This is my new web', author:'Sam', id:1},
        {title:"Welcome party!", body:'Welcome ...', author:'Tom', id:2},
        {title:"Web dev top tips", body:'The first tip is...', author:'Tam', id:3},

    ])



    return (
        <div className="home">
            {blogs.map((blog)=>(

                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author} </p>
                </div>
            ))}


            {/* <h2>Homepage</h2> */}

            {/* <p>My {age} is years old</p>
            <button onClick={handleClick}>Click me</button>

            <button onClick={()=> {
                handleClickAgain('mario')
            }}>Click me Again</button> */}



        </div>
    );
}
 
export default Home;