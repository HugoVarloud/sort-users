const Palindrome = ({users}) => {
    const sortedUsers = [...users].sort((a, b) => a.lastName.localeCompare(b.lastName));
    return (
        sortedUsers.length > 0 ? (
                <>
                    <div>
                        <p>Counter: {sortedUsers.length}</p>
                    </div>
                    <div>
                        <ul>
                            {
                                sortedUsers.map((user) => {
                                    return (
                                        <li>{user.firstName} {user.lastName}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </>
        ) : (
            <>
                <p>Counter: {sortedUsers.length}</p>
            </>
        )
    )
}

export default Palindrome;