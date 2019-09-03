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

(3) Install the node modules (libraries) needed to develop on the application

- `--no-shrinkwrap` parameter allows us to update package.json without 
modifying the package-lock.json file
```
npm install --no-shrinkwrap
```

(4) In one terminal run this command. 

- This process will build the project. 
The process is ongoing until you CONTROL-C to quit the process.
The `dev` server will rebuild the project anytime it sees saved 
changes in the `javascript` or `styles` directories.
```
npm run build:dev
```

(5) In another terminal run this command. 

- This process will run an Express server on your localhost. 
The process is ongoing until you CONTROL-C to quit the process.
The `dev` server will rebuild the project anytime it sees saved 
changes in the `server.js` file.

```
npm run server:dev
```

(6) Open localhost:8080 in your web browser

**Other notes**


