import React, { Component } from 'react'

class QuizButton extends Component{
    render(){
        return(
            <li>
                <button>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizButton