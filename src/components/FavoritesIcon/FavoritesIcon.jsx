import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/favorites-selectors";
import {
  removeFavorite,
  addFavorite,
} from "../../redux/favorites/favorites-slice";
import {
  IconWrap,
  FullHeart,
  EmptyHeart,
  Label,
  Input,
} from "./FavoritesIcon.styled";

const FavoritesIcon = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavorites);

  const isChecked = favoritesCars.favorites.some(({ id }) => id === car.id);

  const toggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <IconWrap>
      <label htmlFor="checkboxInput">
        <Input
          type="checkbox"
          id="checkboxInput"
          checked={isChecked}
          onChange={toggleFavorite}
        />
        {isChecked ? (
          <FullHeart onClick={toggleFavorite} />
        ) : (
          <EmptyHeart onClick={toggleFavorite} />
        )}
      </label>
    </IconWrap>
  );
};

export default FavoritesIcon;
