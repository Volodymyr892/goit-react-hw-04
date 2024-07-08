import css from "./ImageModul.module.css"
import Modal from "react-modal"
export default function ImageModal({isOpen, onRequestClose, data }) {
    if (!data) {
        return null;
      }
    
      const { urls, description, user, likes } = data;
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <div className={css.conteiner}>
                <button className={css.closeButton} onClick={onRequestClose}>X</button>
                <div className={css.content}>
                    <img src={urls.regular} alt={description} className={css.image} />
                    {/* <h2>{description || "No Description"}</h2> */}
                    <p>Autor:{user.name}</p>
                    <p>Likes:{likes}</p>
                </div>
            </div>
        </Modal>
    )
}