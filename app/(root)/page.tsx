import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query; 

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "Hanzo" },
    _id: 1,
    description: 'This is a description',
    image: 'https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/system76-robot-by-kate-hazen-of-system76.png?t=1721754699',
    category: "Robots",
    title: "We Robots"
  }]


  return (
    <>

    {/* Hero Section */}
      <section className="pink_container">
         <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>
          <SearchForm query={query} />
      </section>

    {/* All startups & startup card */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts ?. length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post ?. _id} post={post} />
            ))
          ) : (
             <p className="no-results">No Startups</p> 
          )}
        </ul>
        
       


      </section>

    </>
  );
}
