import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com";




export default async function fetchImagesWithTopic(query) {
    const response = await axios.get(`/search/photos`, {
        params: {
            client_id: "PFRLR3wWc0xcLDv87Nq4715YHS60xzEHicnxBnzam7M",
            query: query
        },
    });
    console.log("🚀 ~ fetchImagesWithTopic ~ response:", response)
    return response.data.results;
}
console.log("🚀 ~ fetchImagesWithTopic ~ fetchImagesWithTopic:", fetchImagesWithTopic())

