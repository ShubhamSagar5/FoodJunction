import React from "react";
import UserContext from "../utilis/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        UserInfo: {
            avatar_url:"www.abc.com",
            location:"XYZ",
            name:"ABC",
            url:"www.abc.com"
        }
    }

  }


  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const result = await data.json()

    this.setState({
        UserInfo:result
    })
    console.log(this.state.UserInfo)
}

  

  render() {
   
    const {avatar_url, location,name,url} = this.state.UserInfo
   
   return <div>
   <UserContext.Consumer>
    {({loggedInUser})=> <h2 className=" font-bold text-2xl">User Name: {loggedInUser}</h2>}
   </UserContext.Consumer>
   <img src={avatar_url} alt="profile img" />
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <p>Github Url: <a href={url}>{url}</a></p>
    </div>;
  }
}

export default UserClass






























// import React from "react"
// class UserClass extends React.Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             count:0
//         }

//     }

//     render (){

//         const {name,location} = this.props
//         const {count} = this.state

//         return (
//             <div className="user-card">
//             <p>{count}</p>
//             <button onClick={()=>{
//                 this.setState({
//                     count:count+1
//                 })
//             }}>Inc</button>
//             <h2>Name:{name}</h2>
//             <h3>Location:{location}</h3>
//             <h4>Contact: @shubhamSagar108</h4>
//         </div>
//         )
//     }

// }

// export default UserClass
