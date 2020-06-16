# Chatle

## Final Project Deliverable

### Report

We made a chatbot which will help the user schedule out their day. They will be able to easily enter in any plans they have in advance, and when they want to see their schedule they can ask the chatbot to show it. The chatbot will be able to take in the input of the day, time, and location of the event and sent it to a database to be stored for that user. The chatbot will then retrieve this information from the database form a schedule specific to that user. Our project works quite well considering the fact that you can add a class then view that same class being added to your schedule. Some improvements we could have made include: spacing when showing the schedule as it tends to dive deep into the chatbox messages and perhaps a more integrated UI schedule. Other than that, a lot of effort was put into the project using React Native, JavaScript, Firebase, Dialogflow, and our previously mentioned design patterns.

UX/UI 

Effort was taken to make sure the bubbles that shackled the AI/Chatbot's messages or "Chatle" were deleted to make the Chatbot seem more user friendly. Graphic Design was added to show support for #PRIDE Month. Additionally, AI's avatar was made wihout a face to make sure the user does not feeel uncomfortable.

### Screenshots of Application

![](demo.gif)

https://player.vimeo.com/video/427289631 "full demo"

### Installation and Running Code

[Download React Native for Windows or Mac](https://microsoft.github.io/react-native-windows/)

* MacOS  
Install Development Dependencies
```bash
sudo gem install cocoapods
brew install node
brew install watchman
brew install yarn

npm install -g expo-cli
```

login to expo
```bash
expo whoami
expo login
<username>
<password>
```

install expo dependencies
```bash
yarn add expo
```
form the project
```bash
git clone https://github.com/cs100/final-project-tech-bros.git
cd final-project-tech-bros/_chatle/
expo start
```
BEFORE running the line above make sure that you have disabled web security for Chrome as the app will not run as inteded if this is not completed. Code to do this, is written below.

* Windows

CORS Error Chrome Troubleshoot Terminal Command: open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

## Helpful Installation Tips

if error "brew command not found" occurs run :
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Project Description

We will be making a chatbot which will help the user's schedule. They will be able to easily enter in any plans they have in advance, and then once the time comes the chatbot will remind them of anything they have scheduled. The chatbot will also be able to be asked what is planned for the day, week, or next hour and will respond with the details. The chatbot will also have various other features such as telling the weather on the day of an event and many other cool other features.

## Importance and What Makes it Interesting

This is important since having to manually enter things into a calendar can sometimes get a little bit tedious. Our chatbot makes scheduling easier by streamlining, "Schedule my class for Tuesdays and Thurdays starting next week until the first week of June" or "Schedule a meeting for tomorrow from 3 to 4," which makes the input process easier. It'll tell you specific aspects about scheduling that event such as the weather the day of the event and any other important details. The chatbot will also have a reminder for any relevant details about the event. 

When designing the app we took some of these user stories into account:

* As a user, I would like to be able to visualize my schedule so that I can better understand when I am free.

* As a user, I would like to be able to input commands with words so that the chatbot feels personable and warm.

* As a user, I am a college student so I want to be able to organize my class schedules so that I will maintain good grades.

* As a user, I am an entrepreneur I am very busy, so I want to be able to see when I am free so that I may spend the little time I have with my family.

* As a a user, I am prone to be late or forget about meeting so I want to be able to remind myself and write down what activities I have so that I may not miss them.


## Languages and Technologies to be Used

### Languages

* JavaScript
* CSS
* HTML

### Technologies

* React Native
* Dialogflow 
* Firebase

## Input and Output

### Input

* Schedule of the user entered into the chatbot.
  * Saves the schedule and any relevant details.

### Output

* Informs the user of any events coming up and their relevant details.

## Class Diagrams

### Abstract Factory and Decorator
The abstract factory can be expanded to include more factory products, but since they are repetitive we showed two interfaces.

Our factory builds default schedule blocks, and our two products are Course Schedule and Assignment Schedule. Among other concrete components, they are comprised of a class, date, location, and could include additional notes.

Course Schedules can be defined as repetitive events, and the meeting time can be in a range.
We should be able to describe the days and extent of the meeting times.

Assignment schedules occur once and expire.

![alt text](https://github.com/cs100/final-project-tech-bros/blob/master/ChatBot.png)

### Composite

For this component we focuse on the User Interface.

The Component is The Chatle (Chatbox) Program that is the whole beginning interface that can be altered with color.

Its subcomponents Scheduler(which handles details about events such as name,time,and adds to a visualized calendar) and Chatbox component which is how the typing interface works as well as how the textbubbles look.
![alt text](https://github.com/cs100/final-project-tech-bros/blob/master/Composite.png)


## Bibliography

https://howtofirebase.com/save-and-query-firebase-data-ed73fb8c6e3a

## Miscellaneous

Some cool git commands I learned 
```
git rebase -i -p <target head>
git commit --amend --author="Author Name <email@address.com>"

edit the files to say "edit" instead of pick for the ones you want to change

write and quit

for any file here after just quit the file DO NOT AMEND ANY FILE AFTER THIS

git pull origin master

git push origin HEAD:master

this will merge your audited author to the master branch

```
This command can be used when you forget to commit to the repo using your verified signature.
