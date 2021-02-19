const apiKey = 'IX2PUq3VRAHo4rlYavfGnKH2HOyfkqSN';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI(category)}&limit=6`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
};