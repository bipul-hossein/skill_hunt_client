import React from 'react';

const Blog = () => {
    return (
        <div className='py-9 w-10/12 mx-auto bg-white'>
        <div className='my-8 bg-gray-200 p-4 rounded-lg border-solid border-2 border-gray-400'>
            <h3 className='text-4xl text-start py-4'>1. What is the purpose of React Router?</h3>
            <p className='text-2xl text-start'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.<br/>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.<br/>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.

            </p>
        </div>
        <div className='my-8 bg-gray-200 p-4 rounded-lg border-solid border-2 border-gray-400'>
            <h3 className='text-4xl text-start py-4'>2. How does Context Api works?</h3>
            <p className='text-2xl text-start'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.<br/>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
            </p>
        </div>
        <div className='my-8 bg-gray-200 p-4 rounded-lg border-solid border-2 border-gray-400'>
            <h3 className='text-4xl text-start py-4'>3. What is UseRef?</h3>
            <p className='text-2xl text-start'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.<br/>
            Essentially, useRef is like a “box” that can hold a mutable value in its .current property.<br/>You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with ref="myRef" , React will set its .current property to the corresponding DOM node whenever that node changes.<br/>However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.<br/>This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a 'current: ...' object yourself is that useRef will give you the same ref object on every render.<br/>Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.



            </p>
        </div>
    </div>
    );
};

export default Blog;