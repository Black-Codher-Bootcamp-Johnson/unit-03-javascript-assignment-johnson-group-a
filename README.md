[TODO: Replace with your Netflify status badge]

# JavaScript Assessment

For your unit 3 assessment you are required to work with your study group as an agile team to create an animated interactive timeline for Mayme's Bakery. The interactivity (behaviour/actions) of timeline should be agreed upon by all group members.

## Who is Mayme's Bakery?

They are family owned business whose baked goods have been shipped worldwide.

They would love to display a history of baking and cakes in an online interactive timeline.

## How to organise yourselves for group work

We have provided some initial user stories. Your group can choose which project management tool you'd like to use (e.g. trello, github projects). As the project continues add more user stories and/or tasks until the project is complete.

### User Stories

1. **As a** user, **I want to** see the summary of each historical item in a summary card, **so that** I can see a brief introduction of each historical item
1. **As a** user, **I want to** see the summary cards in a timeline in date order, **so that** I can see a brief history (in date order) in one place
1. **As a** user, **I want to** see more details on a particular item in a modal **so that** I can see the full information (including an image)
1. **As a** user, **I want to** dismiss the full details of a single historical item, **so that** I can return to the timeline
1. **As a** developer, **I want to** deploy the changes made to the timeline, **so that** the timeline can be viewed publicly

## Starter Files

We have provided two files to get you started:

1. `index.html`
1. `js/data.js`

### HTML

The provided `index.html` includes:

```html
<script type="module" src="js/index.js"></script>
```

Having `type="module"` means you can the ES6 feature `modules` (refer to the slides for a reminder of what `modules` are). `src="js/index.js"` indicates your main javascript file must be named `index.js` within the `js` directory.

### Data

We have provided an array of objects with the data that should be displayed in your timeline. This data can be found in the `js/data.js` file and must be imported into your `js/index.js` so you can use it. If you choose, you can add more data to the file, but this is the minimum amount of data you must display in your timeline.

## Assessment Criteria

The only HTML you should add to the `body` is in step 1. Everything else should be done in JavaScript.

1. In your HTML file add a `<div>` with the class name `timeline`.
1. Loop over the provided **array** of objects to create to the summary card of each timeline item with:
   1. A `div` with the class name `timeline-item`. This `div` is your container for your summary card and everything for the summary card must be inside of it. Inside the `div` should be:
      1. `h2` with the class name `timeline-item-title`. The title of each timeline item needs to be here
      1. `span` with the class name `timeline-item-date`. This should have the date of each timeline item
      1. The element that displays the summary text must have the class name `timeline-item-summary`
      1. The element that opens the modal so that a visitor can see full information must have the class name `timeline-item-more-info`
1. Inside the modal (where the full information should be displayed) you must include the following:
   1. The container `div` must have the id `modal-container`
   1. The date must have the id `modal-date`
   1. The title must have the id `modal-title`
   1. The image must have the id `modal-image`
   1. The full description must have the id `modal-full-description`
   1. The element that closes the modal must have the id `modal-close-button`
1. Create an external stylesheet here `css/main.css` (see [CSS](#css) for more info)
1. [Deployed to Netlify](https://docs.netlify.com/site-deploys/create-deploys/) and your [site's status badge](https://docs.netlify.com/monitor-sites/status-badges/) added to this file (`README.md`)

### CSS

All styling (CSS) is completely up to you, but must be in a folder named `css` with a primary stylesheet called `main.css`.

## How to submit

You must push all the code to your group project repo.
