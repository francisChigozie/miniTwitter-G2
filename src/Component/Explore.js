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
      fetch("https://minitwitter-crossover.herokuapp.com/api/tweet")
      .then((res) => res.json())
      .then((data) => setData(data));
      
    }, []);

    console.log(data)


 const handleSearch = (event) => {
 
 event.preventDefault();

     setSearchValue( event.target.value);
};

const handleChange = (event) => {
  setSearchValue(event.target.value);
}

  return (
    <div className="explore">
       
      <form onSubmit={handleSearch}>
        
        <button type="submit"className="filter-btn">Explore :
        <input type="text" value={searchValue} onChange={handleChange} placeholder="previous twittes..." />
         </button>
      </form>
      {data
        .filter((item) => item.text.toLowerCase().includes(searchValue))
        .map(dat => (
          <h4 style={navStyle} key={data.id}>
            <Link to={`/user/${data.id}`}>{dat.text}:{" "}{""}</Link>
            </h4>
        )
          )}
      
    </div>
  );
}
export default News;