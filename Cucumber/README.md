# Testing Moodle using Cucumber
This directory contains the cucumber files for testing the forum module of the Moodle application.

## Running the tests
Run ```mvn test``` to run all the tests.

## Feature files
The behaviors that we tested are in the feature files that inside the [resources/hellocucumber](resources/hellocucumber) directory. See the files for a detailed description of the tests.

## Step files
The step files in the [src/test/java/hellocucumber](src/test/java/hellocucumber) directory contain the code that defines how each sentence in the feature files is translated to Selenium actions. See the files for a detailed description of the implementation.

We created a video in here : [moodle_reply_hide_cucumber_l_group.mp4](moodle_reply_hide_cucumber_l_group.mp4).