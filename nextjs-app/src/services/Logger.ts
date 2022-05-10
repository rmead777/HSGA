import { addPageAction } from "../clients/newrelic";

export enum LoggableEvents {
  CLICKED_HOMEPAGE_FEATURED_IMAGE = "CLICKED_HOMEPAGE_FEATURED_IMAGE",
}

function logEvent(name: LoggableEvents) {
  addPageAction(name).catch(console.error);
}

const Logger = {
  logEvent,
};

export default Logger;
