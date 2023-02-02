import {useState} from "react";

const Activities = () => {
    const [activity, setActivity] = useState([]);

    const handleClick = () => {
        fetch("https://www.boredapi.com/api/activity") 
        .then (response => response.json())
        .then (data => setActivity(data))
        .catch(err => console.log(err))
    }
    console.log(JSON.stringify(activity,null,2))
    
    return (
        <div className="container">
            <button type="submit" onClick={handleClick} >Suggest me something!</button>
            <h2>{activity.activity}</h2>
        </div>
      )
}

export default Activities;