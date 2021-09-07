import React from "react";
import articleList from "../ArticleList";

function Article(title, date="January 1, 1970", preview) {
    return (
        <article>
            <h3>{prop.title}</h3>
            <small>{prop.date}</small>
            <p>{prop.preview}</p>
        </article>
    )
}
export default Article;