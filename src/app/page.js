import MyCarousel from "./components/MyCarousel";
import ExploreMenu from "./components/ExploreMenu";
import SmalBunner from "./components/SmalBunner";
import MobBunner from "./components/MobBunner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CartSection from "./components/CartSection";
export default function Home() {
  return (
    <div>
     
        <MyCarousel /> 
        <ExploreMenu /> 
        <SmalBunner /> 
        <MobBunner />  
        <Blog />
       <Footer />        
    </div>
  );
}
