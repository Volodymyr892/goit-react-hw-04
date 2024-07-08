import css from "./Image.module.css";
export default function ImageCard({name:{urls, description}}) {
    return(
        <div  className={css.imageCard}>
          <img src={urls.small} alt={description}  />
        </div>
    )
}