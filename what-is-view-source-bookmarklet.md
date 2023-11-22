---
title: "What is View Source Bookmarklet"
date: ""
categories: 
  - "qa-bookmarklets"
---

View Source bookmarklet is a tool that allows users to easily retrieve the original source code of a webpage. It is a small piece of JavaScript code that can be saved as a bookmark in a web browser and used to quickly access and view the HTML, CSS, and JavaScript code of any website.

The concept of a View Source bookmarklet originated with the desire to make it easier for developers and web designers to analyze and debug websites. In the past, viewing the source code of a webpage required going through several steps, such as right-clicking and selecting "View Page Source" or navigating through browser menus. A View Source bookmarklet simplifies this process by providing a one-click solution.

To understand how a View Source bookmarklet works, let's take a closer look at the code provided in the Stack Overflow question. The code is written in JavaScript and utilizes XHR (XMLHttpRequest) to retrieve the source code of the current webpage. XHR is a browser API that allows JavaScript to make HTTP requests to fetch data from a server.

The code defines an array of factory functions that create XHR objects. These functions are used to handle browser compatibility issues since different browsers support different ways of creating an XHR object. The XHRMaker function iterates over the factory functions and tries to create an XHR object using each one until it succeeds or exhausts all the options.

The getSource function is the main function called when the bookmarklet is clicked. It uses the XHRMaker function to create an XHR object and then sends a GET request to the current webpage's URL. The response text of the XHR object is passed to a callback function, which in this case, simply displays an alert with the source code.

In summary, the View Source bookmarklet retrieves the source code of the current webpage using XHR and displays it in an alert. However, it's important to note that this implementation is quite basic and may not work in all scenarios or on all websites due to various security measures, cross-origin restrictions, or dynamically generated content.

The Stack Overflow question also mentions using a closure compiler to compile the code. Closure compiler is a tool that can be used to optimize and minimize JavaScript code. The provided code is an example of how the original code could be compiled using the closure compiler.

In addition to the specific implementation mentioned in the Stack Overflow question, there are many other variations and versions of View Source bookmarklets available. Some bookmarklets may open the source code in a new tab or window, others may format or beautify the code for easier readability, and some may provide additional features like highlighting specific elements or properties.

View Source bookmarklets can be quite useful for web developers and designers, as they provide a quick and easy way to inspect and analyze the structure and functionality of a webpage. By examining the source code, developers can gain insights into how a website is built, identify potential bugs or improvements, and learn from other developers' code.

However, it's important to note that not all websites allow the viewing of their source code due to security concerns or intellectual property reasons. In such cases, the View Source bookmarklet may not be able to retrieve the complete source code or may be blocked altogether.

To use a View Source bookmarklet, you can either create your own bookmarklet using the provided code or find existing ones online. A simple way to create your own bookmarklet is to create a new bookmark in your browser and set the URL or location field to the JavaScript code of the bookmarklet. When you click on the bookmark, the bookmarklet code will be executed.

In conclusion, a View Source bookmarklet is a handy tool for developers and web designers to quickly access and view the source code of a webpage. It simplifies the process of inspecting and debugging websites, allowing users to gain insights into the structure and functionality of a site. However, it's important to remember that not all websites may allow viewing their source code, and the functionality of the bookmarklet may vary depending on various factors.
