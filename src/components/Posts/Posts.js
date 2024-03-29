import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;