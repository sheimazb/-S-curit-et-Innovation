import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'




function Slider(){
    const datas =[
        {
            id:1,
            Image: "https://www.iotworldtoday.com/files/2019/02/smart-home-security.jpg",
            title:"Titre du slider 1",
            Text:`You can use as many images as you like with the second method. It even makes it easy for you to manage your images. `,
        },
    {
        id:2,
        Image: "https://www.intel.co.id/content/dam/www/public/us/en/images/photography-consumer/rwd/friends-sharing-laptop-floor-living-room-rwd.jpg.rendition.intel.web.864.486.jpg",
        title:"Titre du slider 2",
        Text:`You can use as many images as you like with the second method. It even makes it easy for you to manage your images. ` ,
    } ,

{
    id:3,
    Image: "https://www.fsstechnologies.com/FSSTechnologies/media/images/blog%20images/04-2018/smart-home-automation-solutions-twitter.jpg",
    title:"Titre du slider 3",
    Text:`You can use as many images as you like with the second method. It even makes it easy for you to manage your images. `,
},
{
    id:4,
    Image: "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/01/Cover-16-20-1.jpg",
    title:"Titre du slider 4",
    Text:`You can use as many images as you like with the second method. It even makes it easy for you to manage your images. `,
},
]


    return (
        <Carousel
         autoPlay 
         interval={1000} 
         infiniteLoop 
         thumbWidth={120} 
         showIndicators={false} 
         showStatus={false}
         showThumbs={false}>
           {datas.map(slide=>{
               return(
               <div key={slide.id}>
                   <img src={slide.Image} alt="5"/>
              <div className="overlay">
                  <h2 className="overlay_title">{slide.title}</h2>
                  <p className="overlay_text">{slide.Text}</p>
              </div>
              
               </div>);
           })}     
        </Carousel>

    )
}
export default Slider;