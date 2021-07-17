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
      fetch("https://gist.githubusercontent.com/MyElectricSheep/4f15c82c45409e06b220d4f7b67e1534/raw/106124f0632d8167001de62a12275dcbe660c2cd/hackernews.json")
      .then((res) => res.json())
      .then((data) => setData(data.hits));
      
    }, []);

    console.log(data.hits);

  return (
    <div className="App">
      {data
      .map(dat => (
          <h4 style={navStyle} key={data.titleid}>
            <Link to={`/user/${data.titleid}`}>{dat.title}:{" "}{""}</Link>
            
            </h4>
        )
          )}
      
    </div>
  );
}
export default News;