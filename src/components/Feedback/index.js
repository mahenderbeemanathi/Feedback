// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  getFeedback = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg">
        <div className="card">
          {isClicked === false ? (
            <div>
              <h1>
                How satisfied are you with our <br /> customer support
                performance
              </h1>
              <ul className="ul">
                {emojis.map(each => (
                  <li key={each.id}>
                    <img
                      className="img"
                      onClick={this.getFeedback}
                      alt={each.name}
                      src={each.imageUrl}
                    />
                    <p className="name">{each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="card">
              <img className="img" src={loveEmojiUrl} alt="love emoji" />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
