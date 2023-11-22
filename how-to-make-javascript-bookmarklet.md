---
title: "How to Make Javascript Bookmarklet"
date: ""
categories: 
  - "how-to-creating-bookmarklets"
---

most identical to creating a regular bookmark. The only difference is that you'll write JavaScript code in the URL field instead of an HTTP/HTTPS URL. Bookmarklets are small pieces of JavaScript code that can be saved as bookmarks in your web browser. When you click on the bookmarklet, it executes the JavaScript code and performs a specific action on the current page.

## Here's a step-by-step guide on how to make a JavaScript bookmarklet:

1\. Write the JavaScript code: The first step is to write the JavaScript code that you want to include in the bookmarklet. This code can perform various actions like modifying the content of the page, interacting with elements, or fetching data from external sources. It's important to test and debug your code in the browser's console before creating the bookmarklet.

2\. Prepend "javascript:" to the code: To let the browser know that the bookmarklet contains JavaScript code, you need to prepend "javascript:" to the code. This is done by typing "javascript:" in the URL field of the bookmark.

3\. Wrap the code in an IIFE or use the void operator: To prevent the page from loading the return value of the script, it's recommended to wrap the code in an IIFE (immediately invoked function expression). An IIFE is a function that is immediately executed after it's defined. Another option is to use the void operator before the code, which discards the return value.

4\. Paste the bookmarklet code: Once you have your JavaScript code wrapped in an IIFE or using the void operator, you can paste the bookmarklet code into the web browser's address bar. Press the ENTER key to execute the code. Alternatively, you can save the bookmarklet to your web browser's bookmarks bar for easier access. To do this, right-click on the bookmarks bar and select "Add Page" or "Add Bookmark." Paste the bookmarklet code in the URL field and save it.

5\. Test and refine: It's important to test your bookmarklet on different websites to ensure that it works as expected. You may need to refine and adjust the code if it doesn't work on certain websites due to variations in the HTML structure or other factors.

Here are a few examples of bookmarklets to give you an idea of what you can do:

1\. Amazon Price Tracker: This bookmarklet extracts the price of a product on Amazon and sends it to a remote server for tracking. It can be useful for monitoring price changes on Amazon and getting alerts when the price drops.

2\. Readability Mode: This bookmarklet removes clutter from a webpage and presents the content in a clean and readable format. It can be handy for improving the reading experience on websites with distracting elements.

3\. YouTube Video Downloader: This bookmarklet extracts the URL of a YouTube video and redirects you to a website where you can download the video in various formats. It can be useful for saving videos for offline viewing.

4\. Markdown Converter: This bookmarklet converts the text on a webpage into Markdown format. It can be handy for quickly converting content into a format that can be easily used in Markdown-based documents or blog posts.

Remember to use bookmarklets responsibly and only execute code from trusted sources. It's also a good practice to review the code and understand what it does before using or sharing a bookmarklet.

In conclusion, creating a JavaScript bookmarklet allows you to execute custom code on any webpage with just a simple click. By following the steps outlined above, you can create your own bookmarklets and enhance your browsing experience with automated actions and customizations. Happy bookmarklet coding!
