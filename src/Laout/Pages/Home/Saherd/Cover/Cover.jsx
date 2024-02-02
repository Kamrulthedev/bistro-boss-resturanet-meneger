import { Parallax } from 'react-parallax';


const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold mb-5 uppercase">{title}</h1>
                    <h4 className="text-2xl font-semibold uppercase">would you like to try a dish</h4>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;