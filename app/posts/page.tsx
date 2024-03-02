import styles from "./postPage.module.css"
'use client'

const Posts = () => {
    return (
        <>
        {/* <h1 className="{styles.text1}">posts</h1> */}
        <h1 className="text-8xl font-black text-center">posts</h1>
        <button onClick={() => console.log("lihat user")}>lihat user</button>
        </>
    )
}

export default Posts