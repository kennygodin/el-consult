import './recruitmentService.scss';

function RecruitmentServicePage() {
  return (
    <div className="recruitment-service-container">
      <h1>Our Services</h1>
      <h2 className="service-subtitle">Recruitment</h2>

      <div className="service-content">
        <div className="service-texts">
          {/* <h2>Project Management</h2> */}

          <p>- Talent Sourcing: Identifying and attracting the best talent.</p>
          <p>- Employee Onboarding: Seamless integration of new hires.</p>
          <p>- Staff Training and Development: Customized training programs.</p>
          <p>
            - HR Consulting: Expert advice on HR policies and best practices.
          </p>
          <p>
            - Global Talent Acquisition: Finding and hiring top talent globally.
          </p>
        </div>
        <div className="service-image-container">
          <img src="/images/service2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RecruitmentServicePage;
