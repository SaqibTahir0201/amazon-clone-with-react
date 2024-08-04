import "./App.css";
import NavbarAddress from "./Components/Navbar/NavbarAddress";
import NavbarSearch from "./Components/Navbar/NavbarSearch";
import AmazonLogo from "./Components/Navbar/AmazonLogo";
import NavbarSignin from "./Components/Navbar/NavbarSignin";
import NavbarReturn from "./Components/Navbar/NavbarReturn";
import NavbarCart from "./Components/Navbar/NavbarCart";
import PanelAll from "./Components/Panel/PanelAll";
import PanelOption from "./Components/Panel/PanelOption";
import PanelDeals from "./Components/Panel/PanelDeals";
import Hero from "./Components/Hero/Hero";
import { blog } from "./Data/blog";
function App() {
  return (
    // @  NAVBAR
    <>
      <div className="navbar bg-black">
        <AmazonLogo />
        <NavbarAddress />
        <NavbarSearch />
        <NavbarSignin />
        <NavbarReturn />
        <NavbarCart />
      </div>

      {/* PANEL */}

      <div className="panel">
        <PanelAll />
        <PanelOption />
        <PanelDeals />
      </div>
      {/* HERO */}
      <div>
        <Hero>
          <p>
            You are on amazon.com. You can also shop on Amazon Pakistan for
            millions of products with fast local delivery.
            <a
              target="_blank"
              href="https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=3279573012756195041&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9077146&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"
            >
              Click here to go to amazon.pk
            </a>
          </p>
        </Hero>
      </div>
      {/* ITEM .....*/}
      <div className="flex flex-wrap items-center justify-evenly w-full h-fit bg-pink-500 mx-auto gap-2.5 py-2.5">
        {/* map sai filter hone kai baad aik props bnaenge (pItems) child component mai object pass karenge ...key mai value dena mandatory hai*/}
        {blog.map((v, i) => {
          return <ProductItem pItems={v} key={i}/>;
        })}
      </div>
    </>
  );
}

export default App;

function ProductItem({ pItems }) {
  return (
    <div className="w-fit h-fit">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pItems.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {pItems.body}
        </p>
      </a>
    </div>
  );
}
