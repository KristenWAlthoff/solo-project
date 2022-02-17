import React, { Component } from 'react'

class NewBook extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <h1>Add a Book!</h1>
                <form>
                    <label>
                        Title:
                        <input type = 'text' />
                    </label>
                </form>
            </div>
        )
    }


}

export default NewBook;