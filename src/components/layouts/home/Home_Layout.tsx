
import Footer_Navigation from '@/components/navigation/footer/Footer_Navigation';
import Home_SurfacesHeader from '@/components/surfaces/headers/home/Home_SurfacesHeader';
import Navbar_Navigation from '../../navigation/navbar/Navbar_Navigation';

interface ComponentProps {
  children: any;
}

const Home_Layout: React.FC<ComponentProps> = ({ children }) => {
  const props = children.props;
  return (
    <>
      <Navbar_Navigation />
      <Home_SurfacesHeader />
      <main className='block'>{children}</main>
      {props && (
        <Footer_Navigation logo={props.logo} frase={props.frase} />
      )}
    </>
  );
};

export default Home_Layout;