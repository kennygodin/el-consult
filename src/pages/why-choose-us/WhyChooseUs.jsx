import './whyChooseUs.scss';

function WhyChooseUs() {
  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-image">
        <img
          src="https://res.cloudinary.com/emmtol/image/upload/v1725387796/el-consults1_hzufbg.jpg"
          alt="el-consult-management"
        />
        <div className="image-texts">
          <h1>El-Consult:</h1>
          <h2>One Business Solution at a Time</h2>
        </div>
      </div>
      <div className="why-choose-us-texts">
        <div className="why-choose-us-item">
          <div>
            <h1>Why choose us?</h1>
            <p className="item-values">
              <span>
                - Expertise: Our team of professionals brings extensive
                experience and knowledge across various industries.
              </span>
              <span>
                - Efficiency: We focus on streamlining processes and enhancing
                operational efficiency.
              </span>
              <span>
                - Global Reach: Our services cater to businesses around the
                world, ensuring you get the best talent and solutions no matter
                where you are.
              </span>
              <span>
                - Client-Centric Approach: We prioritize your success and
                satisfaction, building long-term relationships based on trust
                and excellence.
              </span>
              <span>
                - Tailored Solutions: We customize our services to meet your
                specific needs and goals.
              </span>
            </p>
          </div>
        </div>
        <div className="why-choose-us-item">
          <div>
            <h1>Our Process</h1>
            <p className="item-values">
              <span>
                1. Initial Consultation: We start with a detailed discussion to
                understand your needs and objectives.
              </span>

              <span>
                2. Customized Plan: Based on your requirements, we develop a
                tailored plan that outlines our approach and deliverables.
              </span>

              <span>
                3. Implementation: Our team executes the plan, ensuring seamless
                integration and efficient delivery of services.
              </span>

              <span>
                4. Monitoring and Reporting: We continuously monitor progress
                and provide regular updates to keep you informed.
              </span>

              <span>
                5. Review and Optimization: We evaluate the outcomes and make
                necessary adjustments to optimize results and achieve your
                goals.
              </span>
            </p>
          </div>
          <div>
            <h1>Industries We Serve</h1>
            <p className="item-values">
              We cater to a wide range of industries, including but not limited
              to:
              <span>- Technology</span>
              <span>- Healthcare</span>
              <span>- Finance</span>
              <span>- Manufacturing</span>
              <span>- Retail</span>
              <span>- Education</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
