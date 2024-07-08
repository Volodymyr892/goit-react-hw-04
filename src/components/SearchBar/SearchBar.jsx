import toast, { Toaster } from 'react-hot-toast';

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
<header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="topic"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
  <Toaster/>
</header>

    )
}