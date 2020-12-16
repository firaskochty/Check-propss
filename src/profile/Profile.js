import React from "react";
import PropTypes from "prop-types";

const Profile =(props) => (
    <div>
        <div>
            <span>FullName : {props.FullName}</span>
        </div>
        <br/>
        <div>
            <span>Bio : {props.Bio}</span>
        </div>
        <br/>
        <div>
            <span>Profession :{props.Profession}</span>
        </div>
        <br/>
        <div>
            <img src={props.children} style={{width: "400px" }} alt="Me"/>
        </div>
        <br/>
        <div>
            <button onClick={props.Alert} >click me</button>
        </div>
    </div>
);

Profile.defaultProps ={
    FullName:25,
    Bio:"Hello"
}

Profile.propTypes= {
    FullName: PropTypes.string
  }

export default Profile