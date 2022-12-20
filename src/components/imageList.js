import ImageShow from "./ImageShow";

function ImageList({myImages}) {
    const renderedImages = myImages.map((image) =>{
      return <ImageShow key={image.id} image= {image}/>;
    });
    

    return <div>{renderedImages}</div>;
  }
  
  export default ImageList;