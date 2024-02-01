import "./index.css";
import img from "./adidas.jpg";

const Image1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="card-1 w-72 h-72 relative">
        <div className="face-1 w-72 h-72 absolute">
          <img src={img} />
        </div>
        <div className="back-1 w-72 h-72 absolute flex items-center justify-center text-4xl border-4 border-slate-950">
          Adidas
        </div>
      </div>
    </div>
  );
};

export default Image1;
