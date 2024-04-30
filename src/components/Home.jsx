import {  Fade } from "react-awesome-reveal";
import CraftItemSection from "./CraftItemSection";
import Features from "./Features";
import Contact from "./Contact";
import ArtCraftCategorySection from "./ArtCraftCategorySection";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    
    return (
        <div className="my-10">
             <div className="text-center mb-4 text-xl font-semibold">
            <Typewriter
            words={['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
            </div>
            {/* section one */}
            <div className="carousel rounded-box mx-10">
                <div className="carousel-item w-1/3">
                    <img src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-1/3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiB6vXzaFjW0gins4KwffiiGJau_UOO3z8uHoveoa-g&s" alt="Burger" />
                </div>
                <div className="carousel-item w-1/3">
                    <img src="https://w0.peakpx.com/wallpaper/309/862/HD-wallpaper-landscape-painting-art-cottage-painting-nature-river-sunrise.jpg" alt="Burger" />
                </div>
                <div className="carousel-item w-1/3">
                    <img src="https://w7.pngwing.com/pngs/558/177/png-transparent-doraemon-cartoon-drawing-caricature-doraemon.png" alt="Burger" />
                </div>
                <div className="carousel-item w-1/3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAcxtkfhoQ2l-X27uCZvuBaj5ErS482l9oleHhhMI8w&s" alt="Burger" />
                </div>
               
                
            </div>

            {/* section 2 */}
           
            <div className="mt-10">
                
                <h2 className="text-2xl font-semibold text-center mb-4"> Craft Items</h2>
                
                <p className="text-center mx-10 lg:mx-20 text-xs">Our collection of craft items features a diverse range of handmade creations, each meticulously crafted to inspire creativity and add a touch of artistry to any project.</p>
                

                <div className="mt-8">
                <CraftItemSection></CraftItemSection>
                </div>
                <ArtCraftCategorySection></ArtCraftCategorySection>
                <Features></Features>
                <Contact></Contact>
                
                
                
                
            </div>

        </div>
    );
};

export default Home;