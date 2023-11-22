---
title: "Mastering the Use of Gmail Bookmarklet"
date: ""
categories: 
  - "how-to-using-bookmarklets"
---

## Introduction

Gmail is one of the most popular email services globally, known for its user-friendly interface, powerful features, and seamless integration with other Google services. One lesser-known but highly useful feature of Gmail is the bookmarklet, which allows users to quickly and efficiently perform actions within their Gmail account, such as composing emails, saving important messages, or organizing emails into labels. In this article, we will delve into the world of Gmail bookmarklets, exploring how to use them effectively and how they can enhance your email workflow.

## Understanding Bookmarklets

Before we dive into the specifics of Gmail bookmarklets, let's first understand what bookmarklets are. Bookmarklets are small pieces of JavaScript code that can be saved as bookmarks in the bookmarks bar of your browser. When clicked, a bookmarklet executes the JavaScript code, allowing users to perform specific actions or modifications on the current web page.

In the context of Gmail, bookmarklets can be used to streamline common tasks, such as composing emails, saving important messages, or applying labels to emails. Bookmarklets can significantly enhance productivity by eliminating the need to navigate through multiple Gmail menus and options.

## Adding the Gmail Bookmarklet

## To add a Gmail bookmarklet to your browser, follow these simple steps:

## 1\. Open Gmail in your browser and sign in to your account.

2\. In the top menu bar of your browser, click on "Bookmarks" (on Mac) or "Favorites" (on Windows). 3. Select "Add Bookmark" or "Add to Favorites" from the drop-down menu. 4. Give the bookmarklet a name that represents its function, e.g., "Compose Gmail," "Save to Gmail," or "Apply Gmail Label." 5. In the "URL" or "Location" field, paste the JavaScript code for the desired bookmarklet (we will cover different bookmarklets later in this article).

## 6\. Save the bookmarklet.

Once added, the bookmarklet will appear in your browser's bookmarks bar. You can click on it whenever you want to perform the associated action in Gmail.

## Different Gmail Bookmarklets and Their Functionality

Now that you understand how to add a Gmail bookmarklet let's explore some of the most useful bookmarklets and how they can enhance your Gmail experience.

1\. Compose Gmail Bookmarklet: This bookmarklet allows you to quickly compose a new email in Gmail with the current page's title and URL pre-filled in the body. To create this bookmarklet, follow these steps:

## \- Name: Compose Gmail

\- URL: javascript:window.location='https://mail.google.com/mail/?view=cm&fs=1&to=&su='+encodeURIComponent(document.title)+'&body='+encodeURIComponent(window.location.href)

2\. Save to Gmail Bookmarklet: This bookmarklet allows you to save important web pages or articles directly to your Gmail account, making it easier to reference them later. To create this bookmarklet, follow these steps:

## \- Name: Save to Gmail

\- URL: javascript:window.open('https://mail.google.com/mail/?view=cm&fs=1&su=Saved%20from%20'+encodeURIComponent(document.title)+'&body='+encodeURIComponent(location.href))

3\. Apply Gmail Label Bookmarklet: This bookmarklet allows you to quickly apply a label to an email in Gmail, making it easier to organize and categorize your emails. To create this bookmarklet, follow these steps:

## \- Name: Apply Gmail Label

\- URL: javascript:window.open('https://mail.google.com/mail/u/0/?pli=1#label/'+prompt('Enter label name:').replace(/\\\\s/g,'%20'))

4\. Search Gmail Bookmarklet: This bookmarklet allows you to perform a quick search in your Gmail account without having to navigate to the search bar. To create this bookmarklet, follow these steps:

## \- Name: Search Gmail

\- URL: javascript:window.open('https://mail.google.com/mail/u/0/#search/'+prompt('Enter search query:').replace(/\\\\s/g,'%20'))

## Exploring Additional Resources

In addition to the bookmarklets mentioned above, there are numerous other bookmarklets available that can further enhance your Gmail experience. Here are a few resources where you can find additional Gmail bookmarklets and learn more about them:

\- lifewire.com: Lifewire provides a comprehensive guide on how to use Gmail bookmarklets effectively, along with a curated list of useful bookmarklets for Gmail.

\- internet.gadgethacks.com: Gadget Hacks offers a step-by-step tutorial on using the GmailThis! bookmarklet and how it can streamline your email workflow in Gmail.

## Conclusion

Gmail bookmarklets are a powerful tool that can significantly enhance your email productivity and streamline common tasks within your Gmail account. Whether it's composing emails with pre-filled content, saving important web pages to your Gmail account, applying labels to emails, or performing quick searches, bookmarklets can simplify your workflow and save valuable time. By following the steps outlined in this article and exploring the additional resources, you can master the use of Gmail bookmarklets and optimize your email management in Gmail.
