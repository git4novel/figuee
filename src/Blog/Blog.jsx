import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import useTitleHook from "../hooks/useTitleHook";

const Blog = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  useTitleHook(Blog)
  const questions = [
    {
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "Access tokens and refresh tokens are commonly used in authentication systems. An access token is a credential that is used to access protected resources, while a refresh token is used to obtain a new access token when the current one expires. Access tokens are typically short-lived and are stored on the client-side, usually in memory or local storage. Refresh tokens, on the other hand, are long-lived and should be securely stored on the server-side or in an HttpOnly cookie.",
      codeSnippet: `// Example code snippet
const accessToken = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");`,
    },
    {
      question: "Compare SQL and NoSQL databases?",
      answer:
        "SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems. SQL databases are based on a relational model and use structured schemas, while NoSQL databases are non-relational and provide flexible schemas. SQL databases use SQL as the query language, while NoSQL databases use various query languages or APIs. SQL databases are suitable for complex queries and transactions, while NoSQL databases excel at handling large amounts of unstructured or semi-structured data with high scalability and performance.",
      codeSnippet: `// Example code snippet
// SQL query
SELECT * FROM users;

// NoSQL query
db.users.find();`,
    },
    {
      question: "What is Express.js?",
      answer:
        "Express.js is a popular web application framework for Node.js. It provides a set of features and utilities to build web applications and APIs easily. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and managing server-side logic. It follows a minimalist approach and allows developers to structure their applications in a modular and flexible manner. With its robust ecosystem and community support, Express.js is widely used for building server-side applications and APIs using JavaScript or TypeScript.",
      codeSnippet: `// Example code snippet
const express = require("express");
const app = express();
// ...`,
    },
    {
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "MongoDB's aggregation framework is a powerful tool for performing advanced data analysis and processing operations. It allows you to perform complex data transformations, filtering, grouping, sorting, and other computations on your MongoDB collections. The aggregation pipeline consists of multiple stages, such as `$match`, `$group`, `$sort`, `$project`, and more. Each stage modifies or filters the input documents and passes the results to the next stage. Aggregation pipelines enable you to perform calculations, generate statistical reports, and extract valuable insights from your MongoDB data.",
      codeSnippet: `// Example code snippet
db.collection.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$category", total: { $sum: "$quantity" } } },
]);`,
    },
  ];

  const toggleQuestion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="py-10 px-4 lg:px-20">
      <h1  style={{ fontFamily: 'Pacifico' }} className="text-4xl font-semibold mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div
            key={index}
            className="border rounded-md p-4 shadow-lg bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h2 style={{fontFamily:'Pacifico'}} className="text-lg font-semibold">{q.question}</h2>
              {openIndexes.includes(index) ? (
                <IoChevronUp className="h-5 w-5" />
              ) : (
                <IoChevronDown className="h-5 w-5" />
              )}
            </div>
            {openIndexes.includes(index) && (
              <div className="mt-4">
                <p className="font-medium mb-2 hidden">Answer:</p>
                <p  style={{ fontFamily: 'Freedoka' }} className="">{q.answer}</p>
                <pre className="bg-black rounded-md p-4 mt-4 text-sm text-white">
                  {q.codeSnippet}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
