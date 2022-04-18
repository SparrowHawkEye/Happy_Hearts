import React from "react";
// import "flowbite";
const Blogs = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-5 mb-32">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is the difference between <code>Authorization</code> and{" "}
            <code>Authentication</code>? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <code>Authentication</code> is the process of verifying and
            confirming if someone has the permission to access, whereas{" "}
            <code>Authorization</code> is the process of verifying what specific
            applications, files, and data a user has access to.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Why are you using firebase? What other options do you have to
            implement authentication? 🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Firebase offers numerous easy-to-use SDKs, efficient back-end
            services, and user interface libraries for authenticating the users
            on the application. Having a real-time database is the standout
            feature of the Firebase framework. Firebase provides a seamless way
            to integrate with Google analytics using which the user behavioral
            data can be acquired, and insightful information can be generated
            through it and for many other features Firebase is popular. But there are some alternatives for authentication tools of firebase which are:
          </p>
          <ul>
            <li> &rarr; Auth0</li>
            <li> &rarr; MongoDB</li>
            <li> &rarr; Okta</li>
            <li> &rarr; Keycloak</li>
            <li> &rarr; Amazon Cognito</li>
            <li> &rarr; Passport</li>
            <li> &rarr; JSON Web Token</li>
            <li> &rarr; Cloud Storage</li>
            <li> &rarr; Predictions</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl mx-5 justify-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What other services does firebase provide other than authentication?
            🤷‍♂️
            <hr className="mt-3" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            Firebase is a platform developed by Google for creating mobile and
            web applications. Rather than Authentication there are many more
            services firebase provided.
          </p>
          <ul>
            <li>✔ Remote Config</li>
            <li>✔ Dynamic Links</li>
            <li>✔ Google Analytics</li>
            <li>✔ Cloud FireStore</li>
            <li>✔ Cloud Functions</li>
            <li>✔ Hosting</li>
            <li>✔ Cloud Messaging</li>
            <li>✔ Cloud Storage</li>
            <li>✔ Predictions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
