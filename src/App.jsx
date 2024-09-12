import './app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import About from './pages/about/About';
import WhyChooseUs from './pages/why-choose-us/WhyChooseUs';
import ManagerialServicePage from './pages/managerial-service/ManagerialService';
import RecruitmentServicePage from './pages/recruitment-service/RecruitmentService';
import MarketingServicePage from './pages/marketing-service/MarketingService';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about-us',
          element: <About />,
        },
        {
          path: '/why-choose-us',
          element: <WhyChooseUs />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/services/managerial-administrative',
          element: <ManagerialServicePage />,
        },
        {
          path: '/services/recruitment',
          element: <RecruitmentServicePage />,
        },
        {
          path: '/services/marketing',
          element: <MarketingServicePage />,
        },
        {
          path: '/faq',
          element: <Faq />,
        },
        {
          path: '/contact-us',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
