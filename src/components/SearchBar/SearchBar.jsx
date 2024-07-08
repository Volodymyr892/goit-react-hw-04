export default function SearchBar({onSearch}) {
    const handleSubmit = (evt)=> {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        if (topic.trim() ===""){
            alert("Please enter search term!")
            return
        }
        console.log("🚀 ~ handleSubmit ~ topic:", topic)
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
</header>

    )
}