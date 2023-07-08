import ItemsContainer from "./ItemsContainer";
import { Color } from "../values/Colors";

const Footer = () => {
  const color = Color.dark;

  return (
    <footer className="text-white pb-5" style={{backgroundColor: color}}>
      <div className="grid container items-center mx-auto px-4">
        <ItemsContainer className="" />
        <div className="grid items-center h-full">
          <span className="text-center">© 2023. All About Kerak Telor.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


