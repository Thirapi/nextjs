"use client";

const viewUserButton = () => {
    const handleClick = () => alert('Udah Di Klik')
    return (
    <>
    <button onClick={handleClick}>lihat user</button>
    </>
    );
};

export default viewUserButton;