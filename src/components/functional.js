//Для постеров
const img_url = 'https://image.tmdb.org/t/p/w500/';
const plugFilm =
  'https://celes.club/uploads/posts/2022-05/1653089639_2-celes-club-p-znaki-voprosa-fon-krasivie-2.jpg';
const plugActor =
  'https://i1.sndcdn.com/avatars-000348889688-vvjlm3-t240x240.jpg';

export const getPoster = (url, type) => {
  const imageUrl = url
    ? `${img_url}${url}`
    : type === 'film'
    ? plugFilm
    : plugActor;
  return imageUrl;
};
