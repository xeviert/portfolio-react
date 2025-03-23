const blogs = [
  {
    "id": "1",
    "title": "Understanding Asynchronous JavaScript",
    "date": "July 15, 2023",
    "desc": "Dive into the world of asynchronous JavaScript, and learn how to manage promises, async/await, and callback functions.",
    "content": "Asynchronous programming in JavaScript is essential for managing tasks that take time to complete, like fetching data from an API. Understanding how to work with promises, async/await, and callbacks can help you write more efficient and readable code. In this blog, we'll cover the basics of asynchronous programming, common pitfalls, and best practices to follow."
  },
  {
    "id": "2",
    "title": "Getting Started with React Hooks",
    "date": "July 10, 2023",
    "desc": "React Hooks have revolutionized the way we write functional components. Learn how to use useState, useEffect, and custom hooks in your projects.",
    "content": "React Hooks allow you to use state and other React features without writing a class. The useState and useEffect hooks are fundamental, enabling you to manage state and side effects in functional components. In this blog, we’ll explore how to get started with React Hooks, create custom hooks, and understand their benefits over class components."
  },
  {
    "id": "3",
    "title": "Mastering Git for Version Control",
    "date": "July 5, 2023",
    "desc": "Git is a powerful tool for version control in software development. This guide covers essential Git commands and workflows.",
    "content": "Git is the most widely used version control system in the software industry. It allows multiple developers to work on a project simultaneously without conflicts. This blog will guide you through the basic Git commands, branching and merging strategies, and best practices for using Git in your projects. You'll learn how to clone repositories, commit changes, push to remote branches, and resolve merge conflicts."
  }
]

export const getBlogs = () => blogs;
