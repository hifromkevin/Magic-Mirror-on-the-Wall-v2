import { IArticle } from '../../../types/NewsTypes';

import NewsIcon from '../../../assets/svg/news.svg';

import styles from '../styles/News.module.scss';

const Article = ({ title, author }: IArticle) => {
  return (
    <div className={styles.article}>
      <img src={NewsIcon} alt="News Icon" className={styles.icon} />
      <span>
        <span className={styles.articleTitle}>{title}</span>
        <span className={styles.author}>
          {author ? ', By ' : ''}
          {author}
        </span>
      </span>
    </div>
  );
};

export default Article;
