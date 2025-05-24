import React from 'react'

// Defines a Next.js page component for displaying a user's profile.
const Page = ({ params } : { params: {id: string}}) => {
    // Extracts the user ID from the dynamic route parameters.
    const { id } = params;
    return (
        // Renders the user's ID in a heading.
        <h1 className="text-3xl">User Profile: {id}</h1>
    )
}
export default Page