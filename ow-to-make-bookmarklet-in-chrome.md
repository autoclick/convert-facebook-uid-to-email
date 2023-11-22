---
title: "ow to Make Bookmarklet in Chrome"
date: ""
categories: 
  - "how-to-creating-bookmarklets"
---

If you're a frequent user of Google Chrome and want to streamline your browsing experience, one useful tool you can use is a bookmarklet. A bookmarklet is a simple JavaScript code that is saved as a bookmark in your browser's bookmark bar. When clicked, it performs a specific action or function on the current page you're viewing. This can range from highlighting text, sharing the page on social media, or even translating the page into a different language.

In this article, we'll guide you through the process of creating and using bookmarklets in Google Chrome.

## Step 1: Enable the Bookmark Bar

Before you can create and use bookmarklets in Chrome, you need to make sure that the bookmark bar is enabled.

## To enable the bookmark bar, follow these steps:

1\. Press CTRL + SHIFT + B (Windows) or Command + Shift + B (Mac) to toggle the bookmark bar on and off. 2. If the bookmark bar doesn't appear, right-click on any empty space in the Chrome interface. 3. In the dropdown menu, hover over "Bookmarks" and click on "Show bookmark bar".

## Step 2: Create a New Bookmark

Once the bookmark bar is enabled, you can proceed to create a new bookmark by following these steps:

## 1\. Right-click on the bookmark bar to open the dropdown menu.

2\. Click on "Bookmark Manager" to open the Bookmark Manager in a new tab. 3. Right-click anywhere within the Bookmark Manager and select "Add new bookmark" from the menu.

## Step 3: Name the Bookmarklet

In the dialog box that appears after selecting "Add new bookmark", you can name the bookmarklet whatever you like. This name will be displayed in the bookmark bar.

## Step 4: Enter the JavaScript Code

In the URL field of the dialog box, enter the JavaScript code for the bookmarklet.

For example, if you want to create a bookmarklet that highlights all the links on a page, you can use the following code:

## \`\`\`javascript

## javascript:(function() {

## var links = document.getElementsByTagName("a");

## for (var i = 0; i < links.length; i++) {

## links\[i\].style.backgroundColor = "yellow";

## }

## })();

## \`\`\`

Make sure to prefix the JavaScript code with \`javascript:\` so that Chrome recognizes it as a bookmarklet.

## Step 5: Save the Bookmarklet

After entering the JavaScript code, click on the "Save" button in the dialog box to save the bookmarklet.

## Step 6: Use the Bookmarklet

Now that the bookmarklet is saved, you can go to any webpage and click on the bookmarklet in the bookmark bar to run the JavaScript code and perform the desired action.

In the example above, clicking on the bookmarklet would highlight all the links on the page with a yellow background color.

## Tips for Creating Bookmarklets:

When creating bookmarklets, it's important to keep in mind that the JavaScript code should be concise and efficient. Since bookmarklets run on every page you visit, complex or heavy scripts could slow down your browsing experience.

## Here are a few tips to create efficient bookmarklets:

1\. Use JavaScript libraries sparingly: Including external JavaScript libraries in your bookmarklet can increase its size and loading time. Whenever possible, try to accomplish the desired actions with native JavaScript methods. 2. Minify your JavaScript code: Minification refers to the process of removing unnecessary characters and spaces from your code to make it more compact. There are many online tools available that can minify your JavaScript code. 3. Test your bookmarklet on different websites: Not every website is built the same way, and some websites may have elements or structures that conflict with your bookmarklet. Test your bookmarklet on different websites to ensure it works as expected.

## Conclusion

Bookmarklets are a powerful way to enhance your browsing experience and automate various tasks in Google Chrome. By creating simple JavaScript code snippets and saving them as bookmarks, you can perform actions and functions on any webpage with a single click.

Remember to create efficient and concise bookmarklets to prevent any negative impact on your browsing experience. Happy bookmarklet building!
