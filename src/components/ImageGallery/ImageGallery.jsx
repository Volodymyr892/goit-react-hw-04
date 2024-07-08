import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({items}) {
    console.log("🚀 ~ ImageGallery ~ items:", items)
    return(
<ul>
	{items.map((item)=>(
        <li key={item.id}>
        <ImageCard name={item}/>
	</li>))}
</ul>
)
}