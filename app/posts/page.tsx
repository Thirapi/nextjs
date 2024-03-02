import styles from "./postPage.module.css"
import viewUserButton from "../components/viewUserButton"

const Posts = () => {
    return (
        <>
        {/* <h1 className="{styles.text1}">posts</h1> */}
        <h1 className="text-8xl font-black text-center">posts</h1>
        <viewUserButton />
        </>
    )
}

export default Posts