---
title: "How to Make Bookmarklet Popup"
date: ""
categories: 
  - "how-to-creating-bookmarklets"
---

positioning and covers the entire screen. It serves as the backdrop for the popup. The inner div is the actual popup that will be displayed in the center of the screen. You can use CSS to style the popup as desired.

Here is an example of how you can create a bookmarklet that will make a popup div appear on any webpage:

1\. Create a new bookmark in your browser. Name it something like "Popup Div".

## 2\. Right-click on the bookmark and select "Edit" to modify it.

3\. In the "URL" or "Location" field, enter the following javascript code:

## javascript:(function() {

## // Create the outer div

## var overlay = document.createElement('div');

## overlay.style.position = 'fixed';

## overlay.style.top = '0';

## overlay.style.left = '0';

## overlay.style.width = '100%';

## overlay.style.height = '100%';

## overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

## overlay.style.zIndex = '9999';

## // Create the inner div

## var popup = document.createElement('div');

## popup.style.position = 'absolute';

## popup.style.top = '50%';

## popup.style.left = '50%';

## popup.style.transform = 'translate(-50%, -50%)';

## popup.style.width = '300px';

## popup.style.height = '200px';

## popup.style.backgroundColor = 'white';

## popup.style.border = '1px solid gray';

## // Add some content to the popup

popup.innerHTML = '

## Popup Title

Popup content goes here.

';

## // Append the inner div to the outer div

## overlay.appendChild(popup);

## // Append the outer div to the document body

## document.body.appendChild(overlay);

## })();

## 4\. Click "Save" to save the bookmarklet.

Now, whenever you want to make the popup div appear on a webpage, simply click on the "Popup Div" bookmarklet. The overlay div will cover the entire screen with a semi-transparent background, and the popup div will be displayed in the center.

You can customize the appearance of the popup by modifying the CSS properties of the overlay and popup elements in the javascript code. You can also add more content to the popup by editing the innerHTML of the popup element.

Additionally, you can further enhance the functionality of the bookmarklet by adding event listeners and implementing interactive features within the popup div. This can be done by adding JavaScript code to handle user interactions, such as button clicks or form submissions, within the popup.

Remember to test the bookmarklet on various websites to ensure it works as expected and adjust the CSS and HTML code as necessary.
