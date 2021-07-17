import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import '../App.css';


 const navStyle = {
        color: 'blue'
    }


function News() {

    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      fetch("https://minitwitter-crossover.herokuapp.com/api/user")
      .then((res) => res.json())
      .then((data) => setData(data));
      
    }, []);

    // console.log(data.hits);

  return (
    <div className="App">
      {data
      .map(dat => (
          <h4 style={navStyle} key={dat.id}>
            <Link to={`/user/${dat.id}`}>{dat.username}:{" "}{""}</Link>
            
            </h4>
        )
          )}
      
    </div>
  );
}
export default News;