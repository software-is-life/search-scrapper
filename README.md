## Scrapper Comparison Project
This simple project is a web automation projects
to compare the results of two different ui elements
with typescript and puppeteer.

### Goals
- Collect `companies` page of hicaptilize page and create a type object (hint: sitemap may help)
- On Alight website search from a set of employers using search trool.
- Expose the ability to search via a REST API. (Hint: consider Postman or curl)
- Have example/test for potential employer keywords
- Have runnable and repoducible locally (potentially use Dockerfile)
- Make automations extensible where possible
- Create clear documentation for local use.

### Non-Goals
- Create a UI for the automation process
- Create a lambda for these automation scripts and productionalize the process.
- Creating a CLI for automation scripts.



### Data Type Object
```typescript
type Company = {
    name: string 
    industry: string 
    phoneNumber: string
    contact: string
    ein: string
    numberOfEmployees: number
    planProvider: ProviderPlan
}
```

```typescript
type ProviderPlan = {
    companyName: string
    provider: string
    website: string
    planName: string
    phoneNumber: string
    faxNumber: string
    hoursOfOperation: string
    address: string
    
} 
```



### Things to improve:


#### Website sources:
- https://www.hicapitalize.com/find-my-401k/
- https://www.alight.com/Find-Your-HR-Website
- https://app.hicapitalize.com/rollover/new/find-my-401k