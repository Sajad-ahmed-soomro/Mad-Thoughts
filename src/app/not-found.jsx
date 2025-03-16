import React from 'react'
import Link from 'next/link'

const Notfound = () => {
    return (
        <div>
            <h2>Not found</h2>
            <p>Sorry, the page you are looking for not found</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default Notfound
