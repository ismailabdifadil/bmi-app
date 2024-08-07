import logo from './assets/logo.png';
function App() {
  return (
    <>
      <div className=" w-full h-lvh bg-primary">
        <div className="container flex flex-col justify-between  py-[40px] text-center px-8 font-roboto">
          <h1 className=" text-4xl text-white font-bold mb-2">BMiDO</h1>
          <img src={logo} alt="log" />
          <div className="px-4 py-3">
            <h2 className="text-white text-xl font-bold text-left pb-4">
              Get Started with Tracking Your Health!
            </h2>
            <p className="text-[#C6C3F9] text-left text-xs leading-tight tracking-widest font-semibold">
              Calculate your BMI and stay on top of your wellness journey,
              effortlessly.
            </p>
          </div>
          {/* </div>  */}
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default App;
