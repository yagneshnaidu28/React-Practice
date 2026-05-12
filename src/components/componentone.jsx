import "./components.css"

function Display({name, role}){
    return(
        <>
        <div className="name">Name Of the Employee: {name}</div>
        <div className="role">Role of the Employee: {role}</div>
        </>
    )
}

export default Display;