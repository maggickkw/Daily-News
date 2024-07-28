import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((el) => (
        <li key={el.id}>
          <Link href={`/news/${el.slug}`}>
            <img src={`/images/news/${el.image}`} alt={el.title} />
            <span>{el.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
