---
title: "How to Create Bookmarklet to Replace Specefic Wqords on Webpage"
date: ""
categories: 
  - "how-to-creating-bookmarklets"
---

functionality. These bookmarklets are essentially small pieces of JavaScript code that can be saved as bookmarks in your web browser. When you click on the bookmarklet, it executes the JavaScript code, which can perform various tasks on the webpage you are currently browsing.

One common use case for bookmarklets is to replace specific words on a webpage with other words. This can be helpful if you frequently visit a website that uses certain terms you find offensive or if you want to make subtle changes to the content of a webpage for your own amusement. In this article, we will walk through the process of creating a bookmarklet to replace specific words on a webpage using JavaScript.

## Step 1: Create a New Bookmark

The first step is to create a new bookmark in your web browser. This bookmark will serve as the container for our bookmarklet. Right-click on the bookmarks bar or the bookmarks menu and select "Add Page" or "Add Bookmark". Give the bookmark a name, such as "Word Replacer".

## Step 2: Edit the Bookmark URL

After creating the bookmark, right-click on it and select "Edit" or "Properties" to modify the bookmark's URL or address. In the URL field, we will add our JavaScript code. The code will be executed when we click on the bookmarklet.

## Step 3: Write the JavaScript Code

In the URL field of the bookmark, we will write our JavaScript code. The code should follow the format of bookmarklets, which is to use the "javascript:" protocol followed by the actual JavaScript code. For this specific task of replacing words, we can use the \`replace\` method of JavaScript strings.

Here's an example of the JavaScript code you can use to replace specific words:

## \`\`\`

## javascript:(function() {

## var replacements = \[

## { search: 'word\_to\_replace', replace: 'replacement\_word' },

{ search: 'another\_word\_to\_replace', replace: 'another\_replacement\_word' },

## // Add more word pairs here

## \];

## var elements = document.getElementsByTagName('\*');

## for (var i = 0; i < elements.length; i++) {

## var element = elements\[i\];

## for (var j = 0; j < element.childNodes.length; j++) {

## var node = element.childNodes\[j\];

## if (node.nodeType === 3) {

## var text = node.nodeValue;

## for (var k = 0; k < replacements.length; k++) {

var search = new RegExp(replacements\[k\].search, 'gi'); text = text.replace(search, replacements\[k\].replace);

## }

element.replaceChild(document.createTextNode(text), node);

## }

## }

## }

## })();

## \`\`\`

Note that you should replace \`word\_to\_replace\`, \`replacement\_word\`, \`another\_word\_to\_replace\`, and \`another\_replacement\_word\` with the actual words you want to replace. You can add more word pairs by following the same format.

This code uses a loop to iterate through all the elements on the webpage and their child nodes. It checks if the node is a text node and then uses the \`replace\` method to replace the specified words.

## Step 4: Save the Bookmarklet

After writing the JavaScript code, click "Save" or "OK" to save the bookmarklet. The bookmarklet is now ready to use.

## Step 5: Test the Bookmarklet

To test the bookmarklet, visit a webpage where you want to replace specific words. Click on the bookmarklet that you created earlier. The bookmarklet will replace the specified words with their replacements on the webpage.

## Conclusion

Creating a bookmarklet to replace specific words on a webpage can be a fun and handy tool. With just a few steps, you can add this functionality to your web browser and customize your browsing experience. Bookmarklets are a powerful way to extend the functionality of your browser, and you can even create bookmarklets for other tasks such as formatting text, translating languages, or even automating repetitive tasks on a webpage.
