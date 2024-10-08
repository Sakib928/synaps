import { Zoom } from "react-awesome-reveal";
import bannerImage from "../../assets/images/bannerimage.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Zoom duration={2000} triggerOnce={true}>
            <h1 className="mb-5 text-5xl font-bold">
              Your Personalized Learning Hub.
            </h1>
            <p className="mb-5">
              Empower yourself with our engaging and effective online courses
              designed to fit your unique learning style. Achieve your academic
              goals and unlock a world of possibilities. Enroll today and start
              learning!
            </p>
          </Zoom>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
