import React from "react";
import App from "./App";

function articleList({posts}) {
    const Articles= posts.map((post) => (
        <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} minutes={posts.minutes}/>
    )
    return (
        <main>
            {Articles}
        </main>
    )
}
export default articleList;