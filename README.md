### Important
- To work on this implementation I used a starter kit I've built a time ago to get me started quickly every time I've got to kick off a new project. For that reason, there are many things that were already setup and didn't take much of my time that, otherwise, in some cases, I wouldn't have  been able to inlcude. For instance, loader, test reports, tests configuration, 404 page, request error handling mechanism (which includes the toast message), react router (basic routing) and the basic folder structure. 
- I stuck to the 4 hours constrain but would like to make you aware that I used some extra time to add some styling (I hadn't finished the offers list styles in time) and create these documents.
- As I didn't have the time to implement all the test cases required, I tried to add an example of each type, that is, unit (functions and components in isolation), integration (how components interact with eachother) and e2e (Cypress).
- The "Share a link to my shipment's results via a unique URL" was partialy implemented because I didn't have the time to finish it.
I would still need to format the params (the date params to be more specific) received from the url in order to be able to use them.

### Description
I built the features requested in the task's description as good as possiblie given the time constrains.
It is basically an offers page where you can search for offers bases on the filters provided, either by populating the form manually or
by URL params. My approach was basically to split up the implementation and one task at a time in orther of relevance. I tried to complete every task as it was being implemented so that I could deliver a working decent example not matter how far I had got.

### Stack
- React
- React-router
- React-query
- TypeScript
- Tailwing
- vitest
- React testing library 
- Cypress

### Scripts
Run development server

```bash
$ npm run dev
```

Build

```bash
$ npm run build
```

Unit and Integration Test

```bash
$ npm run test
```

e2e Test

```bash
$ npm run cy:withServer
```
### Link to the search results
Once the app is running locally, you can use the following generic URL to access the corresponding results:
http://localhost:3000/?weight=&endDate=null&startDate=null&originAirportCode=FRA&destinationAirportCode=

### Test reports
You can find the tests reports in the reports folder. 
In order to view them just open the HTML files in browser.

### Feedback
I don't have any complains anout the exercise. The instructions were clear and easy to follow.
I would maybe suggest to provide and endpoint instead of a file with the data as that would resemble more a real life scenario.

### Preview
![image](https://github.com/julian69/cargo-one-test/assets/6019858/1716ebb5-37bc-496a-8ad0-e296846e9520)


