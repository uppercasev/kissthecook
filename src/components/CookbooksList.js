import AddCookbook from "./AddCookbook"
import SearchBox from "./SearchBox"

export default function CookbookList({ cookbooks, onBookSubmit }) {
    return (
        <div>
            <h1>My Cookbooks</h1>
            <AddCookbook onBookSubmit={onBookSubmit} />
            <ul style={{listStyleType: "none", padding: "0", margin: "0"}}>
                {cookbooks.map((book) => {
                    return <li key={book.id}><a href={`/cookbook/${book.id}`}>
                        {book.title}</a></li>
                })}
            </ul>
        </div>
    )
}