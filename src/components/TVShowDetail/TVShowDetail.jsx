import s from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
export function TVShowDetail({tvShow}) {
    const rating = tvShow.vote_average / 2;
    return (
      <div>
        <div className={s.name}>{tvShow.name}</div>
        <div className={s.rating_container}>
          <FiveStarRating rating={rating} />
          <span className={s.rating}>{rating.toFixed(1)}/5</span>
        </div>
        <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}