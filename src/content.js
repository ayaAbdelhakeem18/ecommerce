import axios from "axios";
import Logo from "./assets/home-5-logo_70x.png";
import dLogo from "./assets/dark-logo.webp";
import category1 from "./assets/category1.webp";
import category2 from "./assets/category2.webp";
import category3 from "./assets/category3.webp";

const content={

    logo:Logo,
    logoDark:dLogo,
    navPages:["home","gallerie","collection"],
    category:[{name:"Most Viewed",img:category1},{name:"Editor picks",img:category2},{name:"top selling",img:category3}],
}



export default content;



