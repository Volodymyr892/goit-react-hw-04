import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoaderMorebtn from "../LoaderMoreBtn/LoaderMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import fetchArticlesWithTopic from "../../articles-api"
console.log("🚀 ~ fetchArticlesWithTopic:", fetchArticlesWithTopic())
import { useState, useEffect} from "react"



export default function App() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [topic, setTopic] = useState("")
    
    const handleSearch = async(newTopic)=>{
            setArticles([]);
            setTopic(newTopic) 
    }
        const handleLoadMore = ()=>{
            setPage(page+1);
        }

        useEffect(()=>{
            async function getArticles(){
                try {
                    setError(false);
                    setLoading(true);
                    const data = await fetchArticlesWithTopic(topic, page);
                    setArticles(data)
                } catch (error) {
                    setError(true);
                }finally{
                    setLoading(false);
                }

            }
            getArticles()
        },[topic, page])

    return(
        <>
            <SearchBar onSearch={handleSearch}/>
            {articles.length>0 && <ImageGallery items={articles}/>}
            {loading && <Loader/>}
            {error && <ErrorMessage/>}
            <LoaderMorebtn onClick={handleLoadMore}/>
            <ImageModal/>
        
        </>
    )
}