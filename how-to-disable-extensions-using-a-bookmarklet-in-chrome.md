---
title: "How to Disable Extensions Using a Bookmarklet in Chrome"
date: ""
categories: 
  - "qa-bookmarklets"
---

## Introduction:

Extensions in web browsers provide additional functionality and features that enhance the browsing experience. However, there might be instances when you want to disable certain extensions temporarily, either to troubleshoot issues or improve browser performance. In this article, we will explore a convenient method to disable extensions using a bookmarklet in Google Chrome.

## What is a Bookmarklet?

A bookmarklet is a bookmark stored in your browser that contains JavaScript code instead of a URL. When you click on a bookmarklet, it executes the JavaScript code, allowing you to perform various actions on a webpage. In our case, we will be using a bookmarklet to disable extensions in Chrome.

## Step-by-Step Guide:

Here's a step-by-step guide on how to create and use a bookmarklet to disable extensions in Google Chrome:

## Step 1: Create a New Bookmark

Right-click on your bookmarks bar in Chrome and select "Add Page" or "Add Bookmark." Give your bookmark a relevant name, such as "Disable Extensions."

## Step 2: Edit the Bookmark URL

Right-click on the newly created bookmark and select "Edit." In the URL field, paste the following code:

javascript:prompt('Extension IDs here: (separated by commas)').split(',').forEach(i => {chrome.management.setEnabled(i.trim(), false)})

This code uses the JavaScript \`prompt\` function to ask for the extension IDs you want to disable. It then splits the input into an array and iterates through each ID, using the \`chrome.management.setEnabled\` function to disable the corresponding extension.

## Step 3: Save the Bookmark

Click "Save" to save the changes to the bookmark. The bookmarklet is now ready to use.

## Step 4: Disable Extensions

To disable extensions, click on the "Disable Extensions" bookmark you just created. A prompt will appear asking for the extension IDs you wish to disable. Enter the IDs of the extensions you want to disable, separated by commas. The bookmarklet will then disable the specified extensions.

## Step 5: Enable Extensions

To enable the extensions again, you can either restart your browser, or use the Chrome extension management page to re-enable them.

## Finding the Extension ID:

To disable an extension using the bookmarklet, you need to know its extension ID. Here's how you can find the extension ID:

1\. Open Google Chrome and navigate to the extensions page by entering \`chrome://extensions\` in the address bar. 2. Enable the "Developer mode" toggle switch located on the top-right corner of the page. 3. Each extension will now display its extension ID below its name and description. Take note of the required extension ID to use with the bookmarklet.

## Benefits of Using a Bookmarklet:

## Using a bookmarklet to disable extensions offers several advantages:

1\. Easy and Convenient: Instead of navigating through the Chrome settings menu, using a bookmarklet allows you to disable extensions with just a click. 2. Temporary Disabling: Bookmarklets offer a temporary solution to disable extensions. This is particularly useful when troubleshooting issues caused by specific extensions. 3. Faster Performance: Disabling unwanted extensions can help improve browser performance by reducing memory usage and conflicts between extensions.

## Conclusion:

Bookmarklets provide a convenient way to disable extensions in Google Chrome. By following the simple steps outlined in this article, you can create a bookmarklet that disables extensions with a click. This can be especially useful for troubleshooting or optimizing browser performance. Keep in mind that bookmarklets are temporary solutions, and you can always re-enable the extensions if needed.
