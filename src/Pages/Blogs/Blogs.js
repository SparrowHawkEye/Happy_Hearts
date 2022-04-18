import React from "react";
// import "flowbite";
const Blogs = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-5 mb-32">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is the difference between authorization and authentication?  🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The React <code>Context API</code> is a way for a React app to
            effectively produce global variables that can be passed around. This
            is the alternative to <code>prop drilling</code> or moving props
            from grandparent to child to parent, and so on.{" "}
            <code>React.createContext()</code> is all you need. It returns a
            consumer and a provider. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store. Consumer as it so happens is a component that consumes and
            uses the state.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Why are you using firebase? What other options do you have to implement authentication? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Semantic HTML elements are those that clearly describe their meaning
            in a human and machine readable way. semantic tags make it clear to
            the browser what the meaning of a page and its content is. That
            clarity is also communicated with search engines, ensuring that the
            right pages are delivered for the right queries. Assistive
            technologies such as screen readers rely on semantically-rich HTML
            to process web pages and help users with low vision navigate them.
            Semantic tags tell screen reader users where they are and how they
            can interact with the current page.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What other services does firebase provide other than authentication? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Semantic HTML elements are those that clearly describe their meaning
            in a human and machine readable way. semantic tags make it clear to
            the browser what the meaning of a page and its content is. That
            clarity is also communicated with search engines, ensuring that the
            right pages are delivered for the right queries. Assistive
            technologies such as screen readers rely on semantically-rich HTML
            to process web pages and help users with low vision navigate them.
            Semantic tags tell screen reader users where they are and how they
            can interact with the current page.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Blogs;
