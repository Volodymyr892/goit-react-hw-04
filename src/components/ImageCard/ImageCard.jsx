export default function ImageCard({name:{urls, description}}) {
    return(
        <div>
          <img src={urls.small} alt={description} />
        </div>
    )
}