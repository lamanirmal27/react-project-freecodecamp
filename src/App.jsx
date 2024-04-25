import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scroll-indicator";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
//import RandomColor from "./components/random-color";
//import StarRating from "./components/star-rating";


export default function App() {
  return (<>
    {/* Random Color Genertor component */}
   {/* <RandomColor/> */ }

   {/* Star Rating Component */}
   {/* <StarRating noOfStars={10}/> */}

   {/* Image Slider Component */}
   {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"6"} page={"1"}/> */}

   {/* load more data */}
   {/* <LoadMoreData/> */}

    {/* Tree View Component */}
    {/* <TreeView menus={menus} /> */}

    {/* QR Code generator component */}
     {/* <QRCodeGenerator/>  */}

     {/* Light to dark mode and vice and versa */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      
      {/* custom tab index */}
      {/* <TabTest/> */}

      {/* custom modal component */}
      <ModalTest/>

      {/*  */}
  </>)
}