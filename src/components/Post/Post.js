const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>UserID: {userId}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export default Post;


