const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, phone, website, address:{street, suite, city, zipcode}} = user;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>ADDRESS</div>
            <div>Street: {street}</div>
            <div>Suite: {suite}</div>
            <div>City: {city}</div>
            <div>Zipcode: {zipcode}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;