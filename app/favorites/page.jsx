import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";


async function FavoritesPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const myFavorites = currentUser.favoriteIds

  return <div>page</div>;
}

export default FavoritesPage;
