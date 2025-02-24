/* create a function that helps an event planner decide whether to hold an event indoors or outdoors based on the weather forecast. The function should take in the forecasted weather and the type of event as arguments and return 'indoors' or 'outdoors' based on the following criteria:
Weather Conditions:
rainy
sunny
cloudy
Event Types:
wedding
picnic
concert
Rules:
If the weather is rainy, the event should be held indoors.
If the weather is sunny, the event should be held outdoors.
If the weather is cloudy, the event should be held indoors if it is a wedding, and outdoors if it is a picnic or concert.
If the event is a picnic and the weather is rainy, the event should be canceled. */

function eventPlanner(weather, event) {
  switch (weather) {
    case 'rainy':
      return event === 'picnic' ? 'canceled' : 'indoors';
    case 'sunny':
      return 'outdoors';
    case 'cloudy':
      return event === 'wedding' ? 'indoors' : 'outdoors';
    default:
      return 'invalid input';
  }
}
