# TP6_DataEng

### Goal 
- Create a simple web NodeJS application consisting of a frontend and a backend. 
- The app counts the number of times the page has been accessed by the current user.
- The app is Dockerized, so that requires 2 docker containers.
- The code must also contain an integration test, that tests the communication between the frontend and backend. This test will be later ran on release.

### Getting start

Configure Jenkins by following instructions on screenshots [here](https://github.com/ChloeCarayon/TP6_DataEng/tree/master/screenshots)

Jenkins pipeline runs from develop branch and releases on release branch.

Steps of Jenkins
- Declaration 
- Echo Environment variables
- Docker-compose up
- Test and docker-compose down
    Add connection and test on request
- Deployment on release branch (issues with credentials wip)

In order to visualize front-end go to:
http://localhost:3000/

In order to visualize back-end go to:
http://localhost:8083/
