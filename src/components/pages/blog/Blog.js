import React from 'react';
import "../../shareFile/style.css"
const Blog = () => {
    return (
        <div id="backgrond">

            <div id="backgrond" className='py-9 w-10/12 mx-auto bg-white'>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>1. what is cors?</h3>
                    <p className='text-xl text-start'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.<br />

                        An example of a cross-origin request: the front-end JavaScript code served from https domain-a.com uses XMLHttpRequest to make a request for https data.json.<br />

                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                    </p>
                </div>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='text-xl text-start'>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.<br />

                        Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.<br />

                        When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.
                    </p>
                </div>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>3. How does the private route work?</h3>
                    <p className='text-xl text-start'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).<br />

                    </p>
                </div>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>4. What is Node? How does Node work?</h3>
                    <p className='text-xl text-start'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.<br />
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>
            </div >
        </div>
    );
};

export default Blog;