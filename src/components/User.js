const User = ({name,location}) => {

    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: @shubhamSagar108</h4>
        </div>
    )


}

export default User