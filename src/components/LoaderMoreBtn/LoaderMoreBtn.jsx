import css from './LoaderMoreBtn.module.css'
export default function LoaderMorebtn({onClick}){
    return(
        <div className={css.buttonContainer}>
            <button onClick={onClick} className={css.button}> Load more</button>
        </div>
    )
}