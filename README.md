# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called Moodle(https://moodle.com/).

Moodle is a free, robust, secure, and integrated online Learning Management System (LMS) that enables educators,
administrators, and learners to create personalized learning environments and private websites filled with dynamic
courses that extend learning anytime, anywhere.

## Installation
Before installing Moodle, ensure that your system meets the following requirements:
- Operating System: Linux, Windows, or macOS.
- Web Server: Apache or Nginx.
- Database: MariaDB.
- PHP: PHP version 7.4 or higher with required extensions (e.g., mysqli, gd, xml, mbstring, etc.).
- Hardware: At least 512MB of RAM (1GB or more recommended for production).
  Adequate disk space (200MB for Moodle code plus additional space for data storage).
1. Go to the official Moodle website: https://download.moodle.org/.
2. Download the latest version of Moodle from the website.
3. Extract the downloaded files into your web.
4. Open the folder with the extracted files.
5. Click on "start moodle".
6. Navigate to http://localhost/.
7. Follow the instructions in the website.

## What we tested
We tested the quiz module that allows for creating and taking quizzes. We chose to test the following user stories:

*User story:* Student comments on a forum
*Preconditions:* There is a course with an enrolled student, an active forum associated with the course, 
 the forum contains at least one topic and the student is logged into Moodle and has access to the course and its forum.
*Expected outcome:* The forum is updated with the student's reply, displaying the comment under the selected topic.
*
*
*User story:* Teacher hides the forum from students
*Preconditions:* There is a course with an enrolled teacher and student and an active forum associated with the course.
*Expected outcome:* The forum is no longer visible to the student on the course page.

$$

## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory.

//TODO : Complete this.
## Detected Bugs
We detected the following bugs:

1. Bug 1: 
   1. General description: ...
   2. Steps to reproduce: ...
   3. Expected result: ...
   4. Actual result: ...
   5. Link to the bug report: (you are encouraged to report the bug to the developers of the software)
2. Bug 2: ...

$$*TODO* if you did not detect the bug, you should delete this section$$  
