export default function searchArticles(term) {
  return (article) =>
    !term || article.title.toLowerCase().includes(term.toLowerCase());
}
