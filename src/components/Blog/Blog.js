import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h2>What is the purpose of react router?</h2>
        <p>
          = <br />
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="mb-4">
        <h2>How does context api works?</h2>
        <p>
          = <br />
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="mb-4">
        <h2>what is the use of useRef in react?</h2>
        <p>
          = <br />
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;
<h2>thi is blog</h2>;
