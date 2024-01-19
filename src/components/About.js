import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <User name={"shubham"} location={"Nashik"+"functionBased"}/>
            <UserClass name={"shubham"} location={"Nashik"}/>
        </div>
    )
}

export default About