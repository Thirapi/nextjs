"use client";

const ViewUserButton = () => {
    const handleClick = () => alert('Udah Di Klik')
    return (
    <>
    <button onClick={handleClick}>lihat user</button>
    </>
    );
};

export default ViewUserButton;