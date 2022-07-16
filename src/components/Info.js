import Hello from './info/Hello.js'
import About from './info/About.js'
import Education from './info/Education.js'

const Info = () => {
    return (
        <div className="info">
          <Hello />
          <About />
          <Education />
      </div>
    )
}

export default Info;