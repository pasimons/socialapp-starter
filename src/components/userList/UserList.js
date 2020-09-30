import React from 'react'
import DataService from "../../dataService"

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService()
        this.state = {
            users: ""
        }
    }
    render() {
        return (
        <h1>user list here</h1>


        )
    }
}

export default UserList 