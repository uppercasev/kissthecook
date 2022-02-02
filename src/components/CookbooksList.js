export default function CookbookList({ cookbooks }) {
    return (
        <div>
            <h1>My Cookbooks</h1>
            <ul style={{listStyleType: "none", padding: "0", margin: "0"}}>
                {cookbooks.map((book) => {
                    return <li key={book.id}>{book.name}</li>
                })}
            </ul>
        </div>
    )
}