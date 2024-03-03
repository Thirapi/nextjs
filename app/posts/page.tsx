import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton"

const Posts = () => {
    return (
        <>
        <h1 className="text-8xl font-black text-center">posts</h1>
        <CardList>
            <p className="text-4xl">halo</p>
            <i>hai</i>
            <ViewUserButton />
        </CardList>
        </>
    );
};

export default Posts;