import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const Articles= posts.map((post) => (
        <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} minutes={posts.minutes}/>
    ))
    return (
        <main>
            {Articles}
        </main>
    )
}
export default ArticleList;