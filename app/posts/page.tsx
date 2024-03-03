import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

// interface Iposts {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
// }

const Posts = async() => {
    const response = await fetch(base_url)
    const posts: Iposts[] = await response.json()

    return (
        <>
        <h1 className="text-8xl font-black text-center">posts</h1>
        <p>{posts.id}</p>
        {/* {posts.map((post) => {
            return (
            <CardList>
                <p>test</p>
                <ViewUserButton />
            </CardList>
            )
        })} */}
        </>
    );
};

export default Posts;