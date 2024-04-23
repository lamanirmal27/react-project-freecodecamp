import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
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
    {/* <QRCodeGenerator/> */}
  </>)
}