import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from '../shared/Button';
const WelcomePage = () => {
  return (
    <>
      <div className=" w-full h-lvh bg-primary">
        <div className="container flex flex-col justify-between py-[40px] text-center px-3 font-roboto">
          <h1 className=" text-4xl text-white font-bold mb-2">BMiDO</h1>
          <div className="px-4 py-3 flex flex-col justify-between items-center">
            <img className="pb-8" src={logo} alt="log" width={240} />
            <h2 className="text-white text-[25px] font-bold text-left pb-4 mt-[25px]">
              Get Started with Tracking Your Health!
            </h2>
            <p className="text-[#C6C3F9] text-left text-xs leading-tight tracking-widest font-semibold">
              Calculate your BMI and stay on top of your wellness journey,
              effortlessly.
            </p>
          </div>
          {/* </div>  */}
          <Link to={'/home'}>
            <Button type="btn-secondary">Get Started</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
