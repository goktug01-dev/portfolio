import PointCloud from './PointCloud'
import photo from '../assets/profile.jpeg'

function Hero() {
  return (
    <section id="hero">
      <PointCloud />
      <div className="hero-content">
        <div className="hero-text">
          <p className="label">[ COMPUTER ENGINEERING / EMBEDDED / ROS 2 ]</p>
          <h1>
            GÖKTUĞ
            <br />
            KOCATÜRK
          </h1>
          <p className="hero-desc">
            First-year Computer Engineering student at İzmir Katip Çelebi
            University. I work on embedded software, image processing and
            autonomous vehicle software with ROS 2.
          </p>
          <a className="btn" href="#projects">SEE MY WORK ↓</a>
        </div>
        <div className="hero-photo">
          <img src={photo} alt="Göktuğ Kocatürk" />
          <span className="tag">IEEE İKÇÜ · VICE CHAIR</span>
        </div>
      </div>
    </section>
  )
}

export default Hero