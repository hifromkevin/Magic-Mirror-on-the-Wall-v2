import Article from './modules/Article';

import { useFetchNews } from '../../hooks/useFetchNews';

import { INewsArticle } from '../../types/NewsTypes';

import styles from './styles/News.module.scss';

/***
 * TODO: (Optional) Add pagination to news articles
 ***/

const News = () => {
  const { news, error, isError, isLoading } = useFetchNews();
  if (isLoading) {
    return <div className={styles.newsContainer}>Loading news</div>;
  }
  if (isError) {
    return (
      <div className={styles.newsContainer}>
        <p>No news is bad news{error ? `: ${error.message}` : ''}</p>
      </div>
    );
  }

  return (
    <div className={styles.newsContainer}>
      <p className={styles.title}>Headlines</p>

      <div className={styles.articles}>
        {news?.map((article: INewsArticle, index: number) => (
          <Article key={index} author={article.author} title={article.title} />
        ))}
      </div>
    </div>
  );
};

export default News;
