import { auth } from "./firebase";

const getWishlistKey = () => {
  const user = auth.currentUser;

  if (!user) {
    return "wishlist_guest";
  }

  return `wishlist_${user.uid}`;
};

export const getWishlist = () => {
  const key = getWishlistKey();
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const addToWishlist = (id) => {
  const key = getWishlistKey();

  const wishlist = getWishlist();

  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem(key, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id) => {
  const key = getWishlistKey();

  const wishlist = getWishlist().filter(
    (item) => item !== id
  );

  localStorage.setItem(key, JSON.stringify(wishlist));
};

export const isFavourite = (id) => {
  return getWishlist().includes(id);
};