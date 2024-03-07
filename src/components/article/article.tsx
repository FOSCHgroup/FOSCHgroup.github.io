import Link from "@/ui/link/link";

interface Article {
  image?: string;
  title: string;
  link: string;
  abstract: string;
}

interface Props {
  article: Article;
}

export default function Article({ article }: Props) {
  return (
    <li className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          {article.image && (
            <img
              className="is-square"
              src={article.image}
              alt={article.title}
            />
          )}
        </figure>
      </div>
      <div className="media-content">
        <p>
          {article.link ? (
            <Link href={article.link}>{article.title}</Link>
          ) : (
            article.title
          )}
        </p>
        <p>{article.abstract}</p>
      </div>
    </li>
  );
}
