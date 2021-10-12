import React, { useEffect,useState} from "react";
import '../App.css';


 const navStyle = {
        color: 'orange'
    }


function UserDetail({match}) {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`https://minitwitter-crossover.herokuapp.com/api/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
      
    }, []);

    console.log(match)

  return (
    <div className="App-userDetail">
      <h1 style={navStyle}>User Details
           {data.id}<br />{data.text}
      </h1>
    </div>
  );
}
export default UserDetail;