import HomeContainer from "@/containers/home";
import Theaters from "@/mock/theaters.json";
import Genres from "@/mock/genres.json";

interface Params {
  category?: string[] ;
}



async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Home({ params }: { params: Params }) {
  await delay(3000);
  let selectedCategory=false;
  if (params.category && params.category.length > 0) {
    selectedCategory = true;
}


  return (
    <HomeContainer
    theaters = {Theaters.results}
    categories = {Genres.genres}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        theaters: selectedCategory ? Theaters.results : [],
      }}
    />
  );
}
export default Home;
