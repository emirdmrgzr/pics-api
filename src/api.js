import axios from "axios";

const searchImages = async() =>{
   const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers: {
        Authorization :"Client-ID iwe4b58yCJUVVNnxTwFq0Mt64X5ulPh67SgYVoh7j0I",
    },
    params: {
        query: "cars",
    },
    });
    console.log(response);
    return response;
};

export default searchImages;