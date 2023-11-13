import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

async function FavoritesPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const myFavorites = currentUser.favoriteIds;
  if (myFavorites.length == 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }

  return <FavoritesClient listings={myFavorites} currentUser={currentUser} />;
}

export default FavoritesPage;
