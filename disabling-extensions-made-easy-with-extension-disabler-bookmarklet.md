---
title: "Disabling Extensions Made Easy with Extension Disabler Bookmarklet"
date: ""
categories: 
  - "qa-bookmarklets"
---

## Introduction

Extensions are a fundamental part of web browsers as they enhance functionality and offer additional features and customization options. However, there may be times when you need to disable certain extensions temporarily or permanently for various reasons. In this article, we will explore the concept of using bookmarklets to disable extensions and provide step-by-step instructions on how to implement this solution.

## What is a Bookmarklet?

A bookmarklet is a bookmarked URL that contains JavaScript code. When it is clicked, the JavaScript code executes and performs a specific action on the current webpage. In the context of disabling extensions, bookmarklets can be used to trigger a command that disables a specific extension.

## Disabling Extensions using Bookmarklets

There are several methods available to disable extensions using bookmarklets. Below, we will discuss three popular approaches:

## 1\. Using the chrome://extensions page:

\- Open a new tab and enter "chrome://extensions" in the address bar.

## \- Locate the extension you want to disable and click on "Details."

## \- Copy the text in the URL after "?id=".

## \- Create a new bookmark and paste the copied text as the Page URL.

\- Whenever you want to disable the extension, click on the bookmark.

## 2\. LTBEEF-based bookmarklet with a user-friendly interface:

## \- Visit the website at https://fognetwork.github.io/Ingot.

\- Follow the instructions provided on the page to add the relevant bookmarklet code to your bookmarks bar.

## \- Use the bookmarklet whenever you wish to disable an extension.

## 3\. Generalized code-based approach:

## \- Create a new bookmark in your Chrome browser.

## \- In the URL field, paste the following JavaScript code:

## \`\`\`javascript

javascript:prompt('Extension IDs here: (separated by commas)').split(',').forEach(i => {chrome.management.setEnabled(i.trim(), false)});

## \`\`\`

## \- Save the bookmark.

\- Whenever you want to disable extensions, click on the bookmark and enter the extension IDs (separated by commas) when prompted.

## Enabling Extensions Again

After disabling an extension using a bookmarklet, you may want to enable it again at a later stage. To do so, follow these steps:

## 1\. Open a new tab in your Chrome browser.

## 2\. Enter "chrome://extensions" in the address bar.

## 3\. Locate the disabled extension and click on "Details."

## 4\. Toggle the switch to enable the extension again.

## Useful Extensions

Chrome offers a vast array of extensions that can enhance your browsing experience. Here are some popular ones:

1\. Adblock Plus - Blocks intrusive ads and improves page loading speed. 2. LastPass - Password manager that securely stores and autofills login credentials. 3. Grammarly - Provides grammar and spelling suggestions while writing online. 4. Honey - Automatically searches for and applies coupon codes while shopping online. 5. Momentum - Displays beautiful images and provides daily inspiration on new tabs.

## Managing Bookmarks

Bookmarks are a handy way to save and organize important websites or resources. Here are some tips for managing bookmarks effectively:

1\. Create folders to categorize your bookmarks based on topics or themes. 2. Regularly review and remove bookmarks that are no longer relevant or useful. 3. Use bookmark syncing across devices to access your bookmarks on multiple platforms. 4. Edit bookmark names and descriptions to provide context and make them easier to search for. 5. Sort bookmarks alphabetically or based on date added to keep them organized.

## Conclusion

Bookmarklets provide a simple and convenient method to disable extensions in your Chrome browser. Whether you opt for the chrome://extensions approach, LTBEEF-based bookmarklets, or the generalized code-based approach, bookmarklets allow you to disable specific extensions with ease. Remember that disabling an extension temporarily or permanently can have an impact on your browsing experience, so use this functionality judiciously and re-enable extensions when needed.
