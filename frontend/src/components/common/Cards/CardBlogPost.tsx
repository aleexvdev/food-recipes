import React from 'react'

export const CardBlogPost = () => {
  return (
    <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.description}</p>
    </div>
)
}
