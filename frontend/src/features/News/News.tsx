import Article from './modules/Article';

import { useFetchNews } from '../../hooks/useFetchNews';

import { INewsArticle } from '../../types/NewsTypes';

import NewsIcon from '../../assets/svg/news.svg';

/***
 * TODO: (Optional) Add pagination to news articles
 ***/

const News = () => {
  const { news, error, isError, isLoading } = useFetchNews();
  if (isLoading) {
    return <div className="newsContainer">Loading news</div>;
  }
  if (isError) {
    return (
      <div className="newsContainer">
        <p>No news is bad news{error ? `: ${error.message}` : ''}</p>
      </div>
    );
  }

  return (
    <div className="newsContainer">
      <p className="title">Headlines</p>

      <div className="newsArticles">
        {news?.map((article: INewsArticle, index: number) => (
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
