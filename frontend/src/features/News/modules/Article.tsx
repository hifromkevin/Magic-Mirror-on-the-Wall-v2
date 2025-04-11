interface IArticle {
  title: string | null;
  author?: string | null;
}
const Article = ({ title, author }: IArticle) => {
  return (
    <span>
      <span className="title">{title}</span>
      <span className="author">
        {author ? ', By ' : ''}
        {author}
      </span>
    </span>
  );
};

export default Article;
