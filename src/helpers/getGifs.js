export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=puZt1K7IK1QSPXPfegoyQn2NK1m1zNIp&q=${category}&limit=10`;
    const response = await fetch(url);
    const {data = []} = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}