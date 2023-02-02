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
                  <h1>Are you bored?</h1>
                  <img src="https://res.cloudinary.com/dembmmjyq/image/upload/v1675374397/bored_s1hdud.png" alt="bored-hippo"></img>
                  <h2>We have some plans for you!</h2>
            <button type="submit" onClick={handleClick} >PUSH ME!</button>
            <div className="activity">
            <p>{activity.activity}</p>
            </div>
        </div>
      )
}

export default Activities;