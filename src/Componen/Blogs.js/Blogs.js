import { Disclosure } from '@headlessui/react';
import React from 'react';

const Blogs = () => {
    return (
        <div className="p-10  pt-30">
            <h1 className="text-3xl text-center font-semibold mt-10 mb-5">Blogs</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-5">
            <div className="collapse-title text-xl font-medium text-justify">
            What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content text-justify"> 
           <li>1.Local state</li> 
            <li>2.Global state</li>
            <li>3.Server state</li>
            <li>4.URL state</li>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-5">
            <div className="collapse-title text-xl font-medium text-justify">
            How does prototypical inheritance work?
            </div>
            <div className="collapse-content text-justify"> 
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-5">
            <div className="collapse-title text-xl font-medium ">
            What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content text-justify"> 
            Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components.
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box m-5">
            <div className="collapse-title text-xl font-medium y">
            React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content text-justify"> 
            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
            </div>
            </div>
        </div>
    );
};

export default Blogs;