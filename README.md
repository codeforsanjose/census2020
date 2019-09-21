# About the project - census2020

[Project Proposal for the City of San Jose](https://drive.google.com/open?id=1CvBMkS9AF18NR5vTeiFQrdssHQHXV5xpwWCXEp4cTFE)

Website to inform community members about the Census 2020

Census 2020 Kiosks Project!

We need a team of people to assist the city of San Jose and Santa Clara County with an outreach project surrounding the 2020 Census. The goal is increase participation by creating a website that explains why and how to fill out the 2020 Census, and link to the Federal Census site.

This website will be made available through kiosks at community centers and libraries, as well as online. The content will be text and videos answering questions and concerns about the census.

We need a simple, robust design with an efficient and attractive interface that meets ADA accessibilty guidelines. It should also allow easy navigation to the translated content (provided by the city).

We need team members with the following skills:
- User Interface and User Experience Design
- Copywriting/Marketing
- Media Design/Video Creation
- Community Outreach
- Javascript/HTML/Responsive Design
- Usability Testing
- Site Analytics
If you are interested in helping with this exciting and vital civic project, join the #census2020 Slack channel.

# Development Information

**About**

This project mainly uses React (JavaScript), Node (JavaScript), and SASS (css).

**Getting Started**

(1) Install Node / NPM (when you install Node, it will install NPM as well)

- I am using Node 10.9.0

(2) Nagivate to the project directory in your terminal. For example:

```
cd census2020
```

(3) Configure the app

Copy the [.example.env](./.example.env) file to a new file in the same directory called `.env`. Adjust any configuration variables you want--if you're just working on the frontend, there's nothing you need to do, these variables are mostly around connecting to the IMAP server to send emails from the contact form.

(4) Install the node modules (libraries) needed to develop on the application

```
npm install
```

(5) In one terminal run this command. 

- This process will build the project. 
The process is ongoing until you CONTROL-C to quit the process.
The dev server will rebuild the project anytime a file in the `client` directory changes.

```
npm start
```

(6) Open localhost:3000 in your web browser

**Other notes**

Some people using Windows find that `npm start` doesn't launch the server; this should get fixed, but in the meantime you can explicitly run `npm run start:development` to get the server running.
