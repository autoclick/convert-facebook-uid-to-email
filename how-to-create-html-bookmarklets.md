---
title: "How to Create HTML Bookmarklets"
date: ""
categories: 
  - "how-to-creating-bookmarklets"
---

## Introduction:

HTML bookmarklets are small snippets of JavaScript code that can be saved as bookmarks in your browser. When you click on a bookmarklet, it executes the JavaScript code and performs a specific action on the current webpage. Creating HTML bookmarklets can be a powerful way to automate repetitive tasks or enhance your browsing experience. In this article, we will walk you through the process of creating HTML bookmarklets step by step.

## Step 1: Export Your Bookmarks

Before we start creating HTML bookmarklets, you need to export your bookmarks to an HTML file. Most browsers have an option to export bookmarks. Here's how you can do it in Google Chrome:

1\. Open Google Chrome and click on the three-dot menu icon in the top-right corner.

## 2\. Go to Bookmarks > Bookmark Manager.

## 3\. In the Bookmark Manager, click on the three-dot menu icon again.

4\. Select "Export bookmarks" and save the exported HTML file to your desired location.

## Step 2: Convert an Image to BASE64 Format

If you want to add an icon to your bookmarklet, you can use an online tool to convert a 16x16 image into BASE64 format. This allows you to embed the image directly in the bookmarklet code. Here's how you can do it:

1\. Visit a website that offers BASE64 image encoding, such as http://www.askapache.com/online-tools/base64-image-converter/. 2. Click on the "Choose File" button and select your 16x16 image from your computer.

## 3\. Once the image is uploaded, the tool will generate the BASE64 code.

4\. Copy the generated BASE64 code as you will need it in the next step.

## Step 3: Open the HTML File in an Editor

Now, open the exported HTML file in a text editor or an Integrated Development Environment (IDE) such as Notepad++ or Visual Studio Code. This will allow you to modify the HTML content and add your bookmarklet.

## Step 4: Add the Bookmarklet Code

In the HTML file, locate the bookmarklet that you want to modify or create a new one. A bookmarklet is typically defined as a link (\`\`) element within a \`

\` (description list) element. Here's an example of how the bookmarklet code looks like:

## \`\`\`html

[My Bookmarklet](alert('Hello, World!');)

## \`\`\`

## To add an icon to your bookmarklet, modify the code as follows:

## \`\`\`html

[![Bookmarklet](image/png;base64,BASE64_CODE)](alert('Hello, World!');)

## \`\`\`

Replace \`BASE64\_CODE\` with the BASE64 code you obtained in Step 2. You can also modify the JavaScript code (\`javascript:alert('Hello, World!');\`) to perform the desired action when the bookmarklet is clicked.

## Step 5: Save the HTML File

Once you have added or modified the bookmarklet code, save the HTML file. Make sure to keep the file extension as ".html".

## Step 6: Import the HTML File as Bookmarks

Now, it's time to import the modified HTML file back into your browser as bookmarks. Here's how you can import bookmarks in Google Chrome:

1\. Open Google Chrome and click on the three-dot menu icon in the top-right corner.

## 2\. Go to Bookmarks > Bookmark Manager.

## 3\. In the Bookmark Manager, click on the three-dot menu icon again.

4\. Select "Import bookmarks" and choose the modified HTML file you just saved.

## 5\. Click "Open" to import the bookmarks from the HTML file.

## Step 7: Test Your Bookmarklets

After importing the bookmarks, you can test your bookmarklets by clicking on them in the bookmarks bar or the bookmarks menu. The JavaScript code will execute, and you should see the desired action or result on the webpage.

## Examples of Bookmarklets:

Now that you know how to create HTML bookmarklets, let's explore some examples of bookmarklets that can enhance your browsing experience:

1\. Translate the Current Page: This bookmarklet uses the Google Translate API to translate the entire webpage into a different language.

## \`\`\`html

[![Translate](image/png;base64,BASE64_CODE)](//translate.google.com/?sl=auto&tl=en&text='+encodeURIComponent(t)+'&op=translate';}})();)

## \`\`\`

## Replace \`BASE64\_CODE\` with the BASE64 code for a translation icon.

2\. Save Current Page to Pocket: This bookmarklet allows you to quickly save the current webpage to your Pocket account for later reading.

## \`\`\`html

[![Save to Pocket](image/png;base64,BASE64_CODE)](//getpocket.com/edit?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);})();)

## \`\`\`

## Replace \`BASE64\_CODE\` with the BASE64 code for a Pocket icon.

## Conclusion:

HTML bookmarklets provide a convenient way to add functionality to your browser by executing JavaScript code with a single click. By following the steps outlined in this article, you can create your own HTML bookmarklets and enhance your browsing experience. Whether it's automating tasks, translating webpages, or saving articles for later, bookmarklets can be powerful tools. So go ahead, start creating your own bookmarklets and unlock a world of possibilities right from your browser.
