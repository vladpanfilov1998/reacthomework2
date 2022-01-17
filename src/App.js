import Users from "./components/Users/Users";
import UserDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import css from "./App.module.css";
import {useState} from "react";


const App = () => {
    const [user, setUser] = useState(null);
    const getUser = (user) => {
        setUser(user)
    }
  return (
    <div>
     <div className={css.wrap}>
       <Users getUser={getUser}/>
       <UserDetails user={user}/>
     </div>
      <Posts/>
    </div>
  );
}

export default App;
