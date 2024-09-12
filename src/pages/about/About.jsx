/* eslint-disable react/no-unescaped-entities */
import Button from '../../components/button/Button';
import './about.scss';

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://res.cloudinary.com/emmtol/image/upload/v1725387796/el-consults1_hzufbg.jpg"
          alt="el-consult-management"
        />
        <div className="image-texts">
          <h1>El-Consult:</h1>
          <h2>One Business Solution at a Time</h2>
        </div>
      </div>
      <div className="about-texts">
        <div className="about-item">
          <div>
            <h1>Our Story</h1>
            <p>
              Founded in 2024 by Emmanuel Jaiyeola, El-Consult is based in
              Vantaa, Finland. We specialize in offering managerial,
              administrative, comprehensive recruitment, and innovative
              marketing solutions. Our goal is to support small to medium-sized
              businesses and busy professionals, helping them navigate the
              complexities of today's business environment.
            </p>
          </div>

          <div>
            <h1>Our Mission</h1>
            <p>
              To deliver exceptional managerial, administrative, recruitment,
              and marketing services that drive operational efficiency and
              business success for our clients.
            </p>
          </div>
        </div>
        <div className="about-item">
          <div>
            <h1>Our Vision</h1>
            <p>
              To be a global leader in providing innovative and reliable
              business solutions, empowering companies and professionals to
              reach their full potential.
            </p>
          </div>

          <div>
            <h1>Our Values</h1>
            <p className="item-values">
              <span>
                - Integrity: We uphold the highest standards of integrity in all
                our actions.
              </span>

              <span>
                - Excellence: We provide outstanding services and strive for
                continuous improvement.
              </span>

              <span>
                - Collaboration: We work together to meet the needs of our
                clients and help their businesses grow.
              </span>

              <span>
                - Innovation: We embrace new ideas and technologies to deliver
                better solutions.
              </span>
            </p>
            <Button label="Contact us" path="/contact-us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
