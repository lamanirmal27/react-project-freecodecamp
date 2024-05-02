import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom(){
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
      );

      const bottomRef = useRef(null);
      
      if(pending){
        return <h3>Data is Loading ! Please Wait</h3>
      }

      if(error){
        return <h3>Error has occured ! Please try again later</h3>
      }

    //   function handleScrollToBottom(){
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight ,
    //         behavior: 'smooth'
    //     })
    //   }

      function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
      }

      function handleScrollToTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
      }

      return <div>
        <h1>Scroll to top and bottom feature</h1>
        <h3>This is the top section</h3>
        <button onClick={handleScrollToBottom}>Scroll to button</button>
        <ul style={{listStyle: 'none'}}>
            {
                data && data.products && data.products.length
                ? data.products.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))
                : null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll to top</button>
        <h3 ref={bottomRef}>This is the bottom of the page</h3>
      </div>
}