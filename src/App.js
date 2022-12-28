import sidebarIMG from './assets/img/bg-sidebar-desktop.svg';

const PersonalInfo = () => {
  return (
    <form className="flex flex-col w-full mt-10">
      <h1 className="font-bold text-4xl" style={{color: "hsl(213, 96%, 18%)"}}>
        Personal Info
      </h1>
      <p className="mb-10 light mt-5">
        Please provide your name, email address and phone number.
      </p>
      
      <p>
        Name
      </p>
      <input className="p-3 mb-6 mt-2 border border-slate-400 rounded font-bold" type="text" placeholder="e.g. Stephen King" style={{width: 440}} />
      
      <p>
        Email Address
      </p>
      <input className="p-3 mb-6 mt-2 border border-slate-400 rounded font-bold" type="e-mail" placeholder="e.g. stephenking@lorem.com" style={{width: 440}} />
      
      <p>
        Phone 
      </p>
      <input className="p-3 mb-6 mt-2 border border-slate-400 rounded font-bold" type="text" placeholder="e.g. +1 234 567 890" style={{width: 440}} />
    </form>
  );
}

const A = ({ index, description }) => {
  return (
    <div className="flex items-center gap-x-5">
        <button className="btn text-white">
          {index}
        </button>
        <div>
          <p className="text-slate-300 font-thin">STEP {index}</p>
          <p className="text-white">{description.toUpperCase()}</p>
        </div>
    </div>
  );
}

const STYLE = {
  width: "1000px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  gridTemplateColumns: "274px auto",
  gap: "100px"
};

const App = () => {
  return (
    <div style={STYLE}>
      <div className="flex relative">
        <img src={sidebarIMG} alt="" />
        <div className="flex flex-col gap-y-5 absolute" style={{left: "25px", top: "25px"}}>
          <A index="1" description="Your Info" />
          <A index="2" description="Select Plan" />
          <A index="3" description="Add-ons" />
          <A index="4" description="Summary" />
        </div>
      </div>

      <PersonalInfo />


    </div>
  );
}

export default App;