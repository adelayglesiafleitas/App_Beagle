export default async function GetGifs({ keyword, cantGifs }) {
  const apiKey = `https://api.giphy.com/v1/gifs/search?api_key=0y4r0vMRvMUDtY9147HeXp0o374Jl9Ac&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const resul = await fetch(apiKey);
  const resu = await await resul.json();
  const { data } = resu;
  const gits = data.slice(0, cantGifs).map((image) => {
    const { title, id, images } = image;
    const url = images.fixed_height_downsampled.url;
    return { title, id, url };
  });
  return { gits }
}

/*.catch((error) => console.log(error));*/
