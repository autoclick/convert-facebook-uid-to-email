---
title: "How to Get Correct Answers on Google Forms Using a Bookmarklet"
date: ""
categories: 
  - "qa-bookmarklets"
---

## Introduction

Google Forms is a popular tool for creating quizzes, surveys, and other types of forms. Many teachers and educators use Google Forms as a way to assess student understanding and gather feedback. However, one common question that arises is whether it is possible to find the correct answers to a Google Form quiz. In this article, we will explore a method using a bookmarklet that can help you retrieve the correct answers on Google Forms.

## Understanding Google Forms

Before we dive into the method, let's first understand how Google Forms works. When you create a quiz on Google Forms, you have the option to mark certain questions as "Multiple Choice" or "Checkbox" questions. For these types of questions, you can specify one or more correct answers. When a respondent submits the form, the answers are recorded and can be viewed later.

## Challenges in Finding Correct Answers

By default, Google Forms does not provide a direct way to view the correct answers for each question. This is to ensure the integrity of the quiz and prevent cheating. However, there are ways to extract the correct answers using various methods, one of which is by using a bookmarklet.

## What is a Bookmarklet?

A bookmarklet is a small piece of JavaScript code that can be saved as a bookmark in your web browser. When you click on the bookmark, the JavaScript code is executed, allowing you to perform specific actions on the webpage you are currently viewing.

## Creating a Bookmarklet to Retrieve Correct Answers

Here are the steps to create a bookmarklet that can help you retrieve the correct answers on Google Forms:

Step 1: Open Google Chrome or any other web browser that supports bookmarklets.

Step 2: Right-click on the bookmarks bar (or any other folder in your bookmarks) and select "Add page" or "Add bookmark."

Step 3: In the "Name" field, enter a descriptive name for your bookmarklet, such as "Get Correct Answers on Google Forms."

## Step 4: In the "URL" field, enter the following JavaScript code:

javascript:(function(){var script=document.createElement('script');script.src='https://rawgit.com/kidGodzilla/google-forms-cheater/master/google-forms-cheater.js';document.body.appendChild(script);})();

## Step 5: Click "Save" to create the bookmarklet.

## Using the Bookmarklet

Now that you have created the bookmarklet, you can use it to retrieve the correct answers on Google Forms. Here's how:

Step 1: Open the Google Forms quiz for which you want to retrieve the correct answers.

Step 2: Make sure you are logged in with the Google account that has access to the form.

Step 3: Click on the bookmarklet you created earlier, "Get Correct Answers on Google Forms."

Step 4: A popup window will appear, displaying the correct answers for each question in the quiz.

Step 5: Note down the correct answers for your reference or use them to check the responses of your students.

## Important Considerations

While using the bookmarklet can provide you with the correct answers on Google Forms, it is crucial to use this tool ethically and responsibly. It is intended for educational purposes and should not be used to gain unfair advantages or cheat. Here are some important considerations:

1\. Academic Integrity: Respect the academic integrity of the assessment process. Use the correct answers responsibly, such as reviewing and understanding the patterns of incorrect responses or providing feedback to students based on the analysis.

2\. Consent and Privacy: If you are using the bookmarklet in an educational setting, ensure that students are aware that their responses may be analyzed for learning purposes. Respect their privacy and adhere to any applicable data protection regulations.

3\. Continuous Improvement: While the bookmarklet can help you identify correct answers, it is essential to use it as a tool for improving the learning experience rather than solely relying on it. Focus on providing meaningful feedback and promoting a growth mindset among students.

## Conclusion

Retrieving the correct answers on Google Forms can be useful for reviewing and analyzing quiz responses, providing feedback, and improving the learning experience. While using a bookmarklet offers a way to access the correct answers, it is essential to maintain academic integrity and use the tool responsibly. Remember that the primary goal of assessments is to gauge understanding and promote learning, and tools like the bookmarklet should be used as aids in achieving these goals.
