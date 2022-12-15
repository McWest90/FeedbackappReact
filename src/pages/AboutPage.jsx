import Card from "../components/Shared/Card"
import {Link} from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This React Project</h1>
            <p>This is a react app to leave feedback by Mcwest</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage