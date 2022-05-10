export function getNewRelic() {
  // @ts-expect-error NewRelic defined on the window via snippet
  const nr = window.newrelic;

  if (!nr) {
    console.error("Failed to load NR");
  } else {
    console.log("NR loaded successfully.");
  }
}

export async function addPageAction(event_name: string) {
  const newrelic = getNewRelic();

  // @ts-expect-error Unknown types
  newrelic?.addPageAction(event_name);
}
