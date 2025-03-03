import { DUMMY_NEWS } from "@/dummy-news"
import Link from "next/link";

export default function News({params}) {
   const newsSlug = params.slug;
   const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)
 return (
  <article className='news-article'>
    <header>
      <Link href={`/news/${newsItem.slug}/image`}>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </Link>
      <h1>{newsItem.title}</h1>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
    </header>
    <p>{newsItem.content}</p>
  </article>
 )
}