import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoaderMorebtn from "../LoaderMoreBtn/LoaderMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import fetchArticlesWithTopic from "../../articles-api"
console.log("🚀 ~ fetchArticlesWithTopic:", fetchArticlesWithTopic())
import { useState } from "react"


export default function App() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    const handleSearch = async(newTopic)=>{
        try {
            setArticles([]);
            setError(false);
            setLoading(true);
            const data = await fetchArticlesWithTopic(newTopic);
            console.log("🚀 ~ handleSearch ~ data:", data)
            setArticles(data)
        } catch (error) {
            console.log("🚀 ~ handleSearch ~ error:", error)
            setError(true);
        }finally{
            setLoading(false);
        }
        
    }
    
    console.log("🚀 ~ App ~ articles:", articles)
    return(
        <>
            <SearchBar onSearch={handleSearch}/>
            <ImageGallery items={articles}/>
            <Loader/>
            <ErrorMessage/>
            <LoaderMorebtn/>
            <ImageModal/>
        </>
    )
}