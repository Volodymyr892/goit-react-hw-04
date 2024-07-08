import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
    const handleSubmit = (evt)=> {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        if (topic.trim() ===""){
            toast.error('Введіть текст для пошуку зображень');
            return
        }
        onSearch(topic);
        form.reset();

    }
    return(
<header className={css.searchBar}>
  <form onSubmit={handleSubmit} className={css.searchForm }>
    <input
      type="text"
      name="topic"
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
      className={css.searchInput}
    />
    <button type="submit" className={css.searchButton}>Search</button>
  </form>
  <Toaster/>
</header>

    )
}