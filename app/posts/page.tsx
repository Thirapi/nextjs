import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async() => {
    const response = await fetch(base_url)
    const posts: Iposts[] = await response.json()

    return (
        <>
        <h1 className="text-8xl font-black text-center">posts</h1>
        {posts.map((post) => {
            return (
            <CardList>
                <div key={post.id}>
                <p className="text-base font-black text-center">{post.title}</p>
                <p className="text-base font-black text-center">{post.body}</p>
                </div>
                <ViewUserButton />
            </CardList>
            )
        })}

            {/* stuck error di mapping */}
        </>
    );
};

export default Posts;