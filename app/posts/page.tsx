import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton"

const Posts = () => {
    return (
        <>
        <h1 className="text-8xl font-black text-center">posts</h1>
        <CardList>
            <p>halo</p>
            <p>hai</p>
            <ViewUserButton />
        </CardList>
        </>
    );
};

export default Posts;