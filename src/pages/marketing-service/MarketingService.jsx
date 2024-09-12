import './marketingService.scss';

function MarketingServicePage() {
  return (
    <div className="marketing-service-container">
      <h1>Our Services</h1>
      <h2 className="service-subtitle">Managerial & administrative</h2>

      <div className="service-content">
        <div className="service-texts">
          <h2>Digital Marketing</h2>
          <p>
            Boost your online presence with our comprehensive digital marketing
            services. We offer:
          </p>
          <p>
            <span>- Social Media Management: </span>
            Managing social media platforms to enhance engagement.
          </p>
          <p>
            <span>-Email Marketing: </span>Designing and executing email
            campaigns.
          </p>
          <p>
            <span>- Risk Management: </span>
            Identifying, assessing, and mitigating project risks.
          </p>
          <p>
            <span>- Pay-Per-Click (PPC) Advertising: </span>
            Managing PPC campaigns to drive targeted traffic.
          </p>
          <p>
            <span>- SEO and SEM: </span>
            Optimizing search engine presence for better visibility.
          </p>
        </div>
        <div className="service-image-container">
          <img src="/images/marketing1.jpg" alt="" />
        </div>
      </div>
      <div className="service-content">
        <div className="service-texts">
          <h2>Brand Development</h2>
          <p>Establish and grow your brand identity. Our services include:</p>
          <p>
            <span>- Brand Strategy: </span>
            Developing strategies to build and strengthen your brand.
          </p>
          <p>
            <span>- Visual Identity: </span>
            Creating logos, color schemes, and other visual elements.
          </p>
          <p>
            <span>- Brand Messaging: </span>
            Crafting clear and consistent brand messaging.
          </p>
        </div>
        <div className="service-image-container">
          <img src="/images/marketing2.jpg" alt="" />
        </div>
      </div>
      <div className="service-content">
        <div className="service-texts">
          <h2>Market Research</h2>
          <p>Gain insights into your market and customers. We offer:</p>
          <p>
            <span>- Consumer Research: </span>
            Understanding customer preferences and behaviors.
          </p>
          <p>
            <span>- Competitor Analysis: </span>
            Analyzing competitors to identify market opportunities.
          </p>
          <p>
            <span>- Industry Trends: </span>
            Keeping you informed on the latest market trends.
          </p>
        </div>
        <div className="service-image-container">
          <img src="/images/marketing3.jpg" alt="" />
        </div>
      </div>
      <div className="service-content">
        <div className="service-texts">
          <h2>Public Relations</h2>
          <p>
            Enhance your reputation and media presence. Our services include:
          </p>
          <p>- Media Relations: Building relationships with media outlets.</p>
          <p>- Press Releases: Writing and distributing press releases.</p>
          <p>
            - Crisis Management: Managing public relations crises effectively.
          </p>
        </div>
        <div className="service-image-container">
          <img src="/images/marketing4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MarketingServicePage;
