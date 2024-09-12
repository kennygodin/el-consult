import { useState } from 'react';
import './faq.scss';
import { LuChevronDownCircle } from 'react-icons/lu';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer:
        'We work with a wide range of businesses, from startups and small enterprises to established companies across various industries. Our services are tailored to meet the unique needs of each client, regardless of their size or sector.',
    },
    {
      question:
        'How do you tailor your services to meet specific business needs?',
      answer:
        'We begin by conducting a thorough needs assessment to understand   your business goals challenges, and requirements. Based on thisassessment, we create a customized proposal outlining the most effective solutions for your situation.',
    },
    {
      question: 'What is the typical timeline for completing a project?',
      answer:
        'The timeline for completing a project depends on its scope and complexity. During the initial consultation, we provide an estimated timeline based on the specific services required. We keep you informed of progress and any changes to the schedule.',
    },
    {
      question: 'How do you ensure the quality of your services?',
      answer:
        'We maintain rigorous quality standards throughout our process, from initial consultation to final delivery. Our team uses bestpractices, industry standards, and continuous monitoring to ensure that our services meet your expectations and achieve the desired outcomes.',
    },
    {
      question: 'Can you assist with both short-term and long-term projects?',
      answer:
        'Yes, we can assist with both short-term and long-term projects. Whether you need immediate support for a specific task or ongoing assistance for an extended period, we provide flexible solutions tailored to your needs.',
    },
    {
      question: 'How do you handle client feedback?',
      answer:
        'We actively seek and value client feedback throughout the project. We use your input to refine and adjust our approach, ensuring that our services meet your needs and expectations. Our goal is to deliver results that exceed your satisfaction.',
    },
    {
      question: 'What types of businesses do you work with?',
      answer:
        'We work with a wide range of businesses, from startups and small enterprises to established companies across various industries. Our services are tailored to meet the unique needs of each client, regardless of their size or sector.',
    },
    {
      question: 'What should I expect during the initial consultation?',
      answer:
        'During the initial consultation, we will discuss your business needs, goals, and challenges. We will gather information to understand your requirements and provide an overview of how we can assist you. This meeting sets the foundation for developing a customized proposal.',
    },
    {
      question: 'Are your services available globally?',
      answer:
        'Yes, our services are available globally. We work with clients from various countries and regions, providing support and solutions that cater to diverse business environments and requirements.',
    },
    {
      question: 'How can I get started with El-Consult?',
      answer:
        'Getting started is easy! Simply contact us to schedule an initial consultation. We will discuss your needs and provide you with a customized proposal outlining the services and solutions that best fit your business.',
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>
      <div className="faq-content">
        <div className="faq-imgContainer">
          <img src="/images/faq.png" alt="FAQ Illustration" />
        </div>
        <div className="faq-texts">
          {faqs.map((faq, index) => (
            <div
              onClick={() => toggleAnswer(index)}
              className="texts-items"
              key={index}
            >
              <div className="item">
                <span className="faq-question">
                  {faq.question}
                  <span
                    className={`faq-arrow ${
                      activeIndex === index ? 'rotate' : ''
                    }`}
                  >
                    <LuChevronDownCircle />
                  </span>
                </span>
                <div
                  className={`faq-answers ${
                    activeIndex === index ? 'open' : ''
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
