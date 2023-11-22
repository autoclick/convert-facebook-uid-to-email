---
title: "How to Create Bookmarklet"
date: ""
categories: 
  - "how-to-creating-bookmarklets"
---

difference is that instead of saving a webpage URL as a bookmark, you will be saving a piece of JavaScript code that can be executed on any webpage.

## Here's a step-by-step guide on how to create a bookmarklet:

## Step 1: Write JavaScript Code

The first step is to write the JavaScript code that you want to include in the bookmarklet. This code can perform various tasks like manipulating the current webpage, enhancing functionality, or automating repetitive tasks.

For example, let's say you want to create a bookmarklet that changes the background color of a webpage to red. The JavaScript code for this would be:

## \`\`\`javascript

## document.body.style.backgroundColor = "red";

## \`\`\`

## Step 2: Prefix "javascript:"

To convert the JavaScript code into a bookmarklet, you need to prefix it with "javascript:". This tells the browser that the bookmarklet contains JavaScript code.

## So, the code from the previous step would become:

## \`\`\`javascript

## javascript:document.body.style.backgroundColor = "red";

## \`\`\`

## Step 3: Wrap in an IIFE (Immediately Invoked Function Expression)

To ensure that the bookmarklet doesn't interfere with the existing webpage's JavaScript, it's recommended to wrap the code in an IIFE. This creates a local scope for the code to run in.

## The updated code with the IIFE wrapper would look like:

## \`\`\`javascript

## javascript:(function() {

## document.body.style.backgroundColor = "red";

## })();

## \`\`\`

## Step 4: Create a New Bookmark

Now that you have the JavaScript code for the bookmarklet, you need to create a new bookmark in your browser to save it.

To create a new bookmark, right-click on the bookmarks bar or bookmarks menu and select "Add Page" or "Add Bookmark". This will open a dialog box where you can enter the details of the bookmark.

In the name field, give the bookmarklet a descriptive name, like "Change Background Color to Red".

In the URL field, paste the JavaScript code that you wrote in the previous steps (including the "javascript:" prefix and the IIFE wrapper).

## Click "Save" or "Add" to create the bookmarklet.

## Step 5: Using the Bookmarklet

To use the bookmarklet, simply navigate to any webpage and click on the bookmarklet in your bookmarks bar or menu.

In our example, clicking on the "Change Background Color to Red" bookmarklet would change the background color of the webpage to red.

Note: Bookmarklets only work on pages that allow JavaScript execution. Some websites, especially those with strict security policies, may disable JavaScript execution or sanitize user input, which could prevent bookmarklets from functioning properly.

## Step 6: Sharing the Bookmarklet

If you want to share the bookmarklet with others, you can provide the JavaScript code to them, and they can create the bookmarklet in their own browser using the same steps mentioned above.

## Conclusion:

Creating a bookmarklet is a simple and powerful way to enhance your web browsing experience. With just a few lines of JavaScript code, you can automate repetitive tasks, perform advanced manipulations on webpages, or add custom functionality to any website.

Remember to be cautious when using bookmarklets from untrusted sources, as they can potentially execute malicious code on your behalf. It's always recommended to review the JavaScript code before adding it as a bookmarklet.

So go ahead and experiment with creating your own bookmarklets to make your web browsing more efficient and personalized.
