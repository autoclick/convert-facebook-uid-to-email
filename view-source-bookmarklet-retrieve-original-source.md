---
title: "View Source Bookmarklet: Retrieve Original Source"
date: ""
categories: 
  - "qa-bookmarklets"
---

## Introduction

When browsing the web, you may come across websites with interesting designs or functionalities that pique your curiosity. You may wonder how they achieved a certain effect, what technologies they used, or simply want to examine the website's source code. However, viewing the source code of a webpage is not always a straightforward process, particularly on mobile web browsers. This is where a view source bookmarklet comes in handy. In this article, we will explore what a view source bookmarklet is, how it works, and how to create your own.

## What is a View Source Bookmarklet?

A view source bookmarklet is a small piece of JavaScript code that can be saved as a bookmark in your web browser to quickly view the source code of any webpage you are currently visiting. It provides an easy way to access the original HTML, CSS, and JavaScript code that make up a webpage without having to navigate through menus or open developer tools.

## How Does it Work?

The concept behind a view source bookmarklet is relatively simple. When you click on the bookmarklet, it triggers a JavaScript function that fetches the source code of the current webpage and displays it in a popup window or a new tab. The JavaScript code uses XHR (XMLHttpRequest) to fetch the HTML content of the webpage asynchronously. XHR is a powerful tool for making HTTP requests from within JavaScript and has been widely supported across different web browsers for many years.

## Example View Source Bookmarklet

Let's take a look at an example of a view source bookmarklet. The code below demonstrates how to create a bookmarklet that opens a new window and displays the source code of the current webpage:

## \`\`\`

## javascript:(function() {

## var xhr = new XMLHttpRequest();

## xhr.open("GET", window.location.href, true);

## xhr.onreadystatechange = function() {

## if (xhr.readyState === 4) {

## var sourceCode = xhr.responseText;

## var newWindow = window.open();

## newWindow.document.write("

" + sourceCode + "

");

## }

## };

## xhr.send(null);

## })();

## \`\`\`

To create the bookmarklet, you can simply copy and paste the code above into a new bookmark in your web browser. Give it a meaningful name, such as "View Source", and save it. Then, whenever you want to view the source code of a webpage, simply click on the bookmarklet, and a new window will open displaying the HTML source code.

## Explanation of the Code

## Let's break down the code to understand how it works:

1\. The bookmarklet starts with an immediately-invoked function expression (IIFE) \`(function() { ... })()\`. This allows us to encapsulate our code and prevent any conflicts with existing variables.

2\. We create a new instance of \`XMLHttpRequest\` using the \`new XMLHttpRequest()\` constructor. This object allows us to make HTTP requests from within JavaScript.

3\. We open the request using \`xhr.open("GET", window.location.href, true)\`. This specifies the HTTP method ("GET"), the URL of the current webpage (\`window.location.href\`), and sets the request to be asynchronous (\`true\`).

4\. We assign an \`onreadystatechange\` event listener to the \`XMLHttpRequest\` object. This function will be called whenever the \`readyState\` property changes.

5\. Inside the \`onreadystatechange\` event listener, we check if the \`readyState\` property equals \`4\`, which means that the request has been completed and the response is available.

6\. If the request is completed, we retrieve the source code of the webpage using \`xhr.responseText\`.

7\. We create a new window using \`window.open()\` and store it in the \`newWindow\` variable.

8\. We write the source code into the new window using \`newWindow.document.write("

" + sourceCode + "

")\`. The \`

\` element is used to preserve white space and display the source code in a monospaced font.

9. Finally, we call \`xhr.send(null)\` to send the HTTP request and retrieve the source code.

## Additional Considerations

It's worth noting that some websites may employ techniques to prevent cross-site scripting (XSS) attacks, which could interfere with the execution of the bookmarklet. In such cases, the bookmarklet may not work as expected and may require additional modifications or alternative approaches to retrieve the source code.

## Conclusion

A view source bookmarklet is a convenient tool that allows you to quickly access the source code of any webpage you are currently visiting. By using JavaScript and XHR, you can retrieve the HTML code and display it in a popup window or a new tab. Creating and using a view source bookmarklet can be a valuable skill for web developers and curious individuals who want to explore the inner workings of websites.
