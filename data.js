var topics = [
  {
    name : "activityEvent",
    ns : "http://streams.event-processing.org/ids/",
    prefix : "s",
    resource_url : "http://API/topics/activityEvent"
  },
  {
    name : "MyEvent",
    ns : "http://streams.event-processing.org/ids/",
    prefix : "s",
    resource_url : "http://API/topics/MyEvent"
  }
];
module.exports.topics = topics;
module.exports.topic = topics[0];

var patterns = [
  {
    name : "activityEvent",
    ns : "http://streams.event-processing.org/ids/",
    prefix : "s",
    resource_url : "http://API/topics/activityEvent"
  },
  {
    name : "MyEvent",
    ns : "http://streams.event-processing.org/ids/",
    prefix : "s",
    resource_url : "http://API/topics/MyEvent"
  }
];
module.exports.patterns = patterns;
module.exports.pattern = patterns[0];

var subscriptions = [
  {
    resource : "http://streams.event-processing.org/ids/TaxiUCOutNetwork#stream",
    subscriber :"http:\/\/host:port\/foo\/bar\/baz",
    subscription_id : "c520227f-3cfa-4f67-b6bf-ee982cbb393e",
    resource_url : "http://API/subscriptions/c520227f-3cfa-4f67-b6bf-ee982cbb393e"
  },
  {
    resource : "http://streams.event-processing.org/ids/MyStream#stream",
    subscriber : "http:\/\/host:port\/foo\/bar",
    subscription_id : "920bf749-391a-4cf0-b97e-7dea183480fd",
    resource_url : "http://API/subscriptions/920bf749-391a-4cf0-b97e-7dea183480fd"
  }
];
module.exports.subscriptions = subscriptions;
module.exports.subscription = subscriptions[0];
