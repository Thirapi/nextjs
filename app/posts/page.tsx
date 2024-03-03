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
            <CardList>
                <p>{posts[0].id}</p>
                <p>{posts[0].title}</p>
                <p>{posts[0].body}</p>
                <ViewUserButton />
            </CardList>
        
        </>
    );
};

export default Posts;