import { bool } from 'prop-types'
import React from 'react'
import { Redirect, RedirectProps } from 'react-router'
import './Main.css'



class DelayedRedirect extends React.Component {
    timeout = null

    state = { timeToRedirect: false }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                timeToRedirect: true,
            })
        }, this.props.delay)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        const { delay, ...props } = this.props
        const { timeToRedirect } = this.state

        if (timeToRedirect) {
            return <Redirect {...props} />
        }

        return null
    }
}

function IntroAnimation(props) {
  const rocket_src = "https://www.flaticon.com/svg/static/icons/svg/3163/3163810.svg";
  const world_src = "https://www.flaticon.com/svg/static/icons/svg/814/814476.svg";
  return (
    <div>
      <div className="timer">
        <div className="digit seconds">
          <span>3</span>
          <span>2</span>
          <span>1</span>
        </div>
      </div>

      <div className="world">
          <img src={world_src} />
      </div>

      <div className="rocket rocket-move">
          <img src={rocket_src} width="140px" />
      </div>
    </div>
  )
}

const LaunchPage = () => {
    return (
      <div className='launch'>
        <main>
          <IntroAnimation />
          <DelayedRedirect to={'/home'} delay={7000} />
        </main>
      </div>
    )
}

export default LaunchPage
