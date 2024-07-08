import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({items, onImageClick}) {
    return(
<ul className={css.imageGallery}>
	{items.map((item)=>(
        <li key={item.id} onClick={()=> onImageClick(item)} className={css.imageGalleryItem} >
        <ImageCard name={item}/>
	</li>))}
</ul>
)
}