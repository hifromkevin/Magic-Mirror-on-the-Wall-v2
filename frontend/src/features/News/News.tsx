import Article from './modules/Article';

import { useFetchNews } from '../../hooks/useFetchNews';

import { INewsArticle } from '../../types/NewsTypes';

import NewsIcon from '../../assets/svg/news.svg';

const News = () => {
  const { news, error, isError, isLoading } = useFetchNews();
  if (isLoading) {
    return <div className="dadJokeContainer">Loading news</div>;
  }
  if (isError) {
    return (
      <div className="dadJokeContainer">
        <p>No news is bad news: {error ? error.message : ''}</p>
      </div>
    );
  }

  return (
    <div className="newsContainer">
      <h1 className="title">News</h1>

      <div className="newsArticles">
        {news?.slice(0, 5).map((article: INewsArticle, index: number) => (
          <>
            <img src={NewsIcon} alt="News Icon" className="newsIcon" />
            <Article
              key={index}
              author={article.author}
              title={article.title}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default News;
