import "./index.css";

const Button1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button className="button-1 px-6 py-3 bg-blue-300 hover:after:bg-blue-200 z-10 rounded relative overflow-hidden">
        Click Me
      </button>
    </div>
  );
};

export default Button1;
