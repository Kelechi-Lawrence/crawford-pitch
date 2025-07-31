import SearchForm from "@/components/ui/SearchForm";
import StartupCard from "@/components/ui/StartupCard";

const posts = [
  {
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name:"Tom"},
    _id: 1,
    description: "this is the description",
    image: "https://source.unsplash.com/random/800x600",
    category: "robot",
    title: "we rebots",
  },
];

type startUpCardType = {
  _id: number | string;
  title: string;
  description: string;
  image: string;
  views: number;
  _createdAt: Date;
  category: string;
  author: { _id: number | string };
};

export default function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query;
  const params = { search: query || null };

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">
          Pitch your startup <br /> connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on Pitches and Get noticed in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for '${query}'` : "All start ups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: startUpCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
