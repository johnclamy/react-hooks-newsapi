import Layout from './app/layout/Layout';
import Navbar from './app/layout/Navigation';
import Footer from './app/layout/Footer';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Navbar />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}
