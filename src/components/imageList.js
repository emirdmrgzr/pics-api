import ImageShow from "./ImageShow";

function ImageList({myImages}) {
    const renderedImages = myImages.map((image) =>{
      return <ImageShow image= {image}/>;
    });
    

    return <div>{renderedImages}</div>;
  }
  
  export default ImageList;