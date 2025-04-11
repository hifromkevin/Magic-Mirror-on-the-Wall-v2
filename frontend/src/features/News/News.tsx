import Article from './modules/Article';

import { useFetchNews } from '../../hooks/useFetchNews';

import NewsIcon from '../../assets/svg/news.svg';

const News = () => {
  const { news } = useFetchNews();

  return (
    <div className="newsContainer">
      <h1 className="title">News</h1>

      <div className="newsArticles">
        {news.slice(0, 5).map((article, index) => (
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
