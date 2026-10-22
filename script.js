
const destinations = [
  {
    name: "Manali",
    description: "Mountains, snow and adventure.",
    price: 6000,
    image: "photo-1626621341517-bbf3d9990a23"
  },
  {
    name: "Goa",
    description: "Beaches, sunsets and relaxation.",
    price: 8000,
    image: "photo-1512343879784-a960bf40e7f2"
  },
  {
    name: "Jaipur",
    description: "Historic forts and royal culture.",
    price: 5000,
    image: "photo-1599661046827-dacff0c0f09a"
  },
  {
    name: "Shimla",
    description: "Beautiful hills and peaceful views.",
    price: 4500,
    image: "photo-1626621341517-bbf3d9990a23"
  },
  {
    name: "Amritsar",
    description: "Golden Temple and Punjabi food.",
    price: 3000,
    image: "photo-1514222134-b57cbb8ce073"
  },
  {
    name: "Rishikesh",
    description: "River views, yoga and nature.",
    price: 4000,
    image: "photo-1581793745862-99fde7fa73d2"
  }
];

const list = document.getElementById("destination-list");
const search = document.getElementById("search");

function renderDestinations(query = "") {
  const matches = destinations.filter(place =>
    place.name.toLowerCase().includes(query.toLowerCase())
  );

  list.replaceChildren();

  if (matches.length === 0) {
    list.textContent = "No destinations found. Try another name.";
    return;
  }

  matches.forEach(place => {
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.src = `https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=700&q=80`;
    img.alt = place.name;
    img.loading = "lazy";

    const content = document.createElement("div");
    content.className = "card-content";

    const heading = document.createElement("h3");
    heading.textContent = place.name;

    const description = document.createElement("p");
    description.textContent = place.description;

    const price = document.createElement("p");
    price.textContent =
      `Estimated starting budget: ₹${place.price.toLocaleString("en-IN")}`;

    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = "Plan this trip";

    button.addEventListener("click", () => {
      document.getElementById("destination").value = place.name;
      document.getElementById("book-place").value = place.name;
      document.getElementById("planner").scrollIntoView({
        behavior: "smooth"
      });
    });

    content.append(heading, description, price, button);
    card.append(img, content);
    list.append(card);
  });
}

search.addEventListener("input", () => {
  renderDestinations(search.value);
});

renderDestinations();

// Create a basic sample itinerary
document.getElementById("trip-form").addEventListener("submit", event => {
  event.preventDefault();

  const city = document.getElementById("city").value.trim();
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const days = Number(document.getElementById("days").value);
  const budget = Number(document.getElementById("budget").value);
  const output = document.getElementById("itinerary");

  if (!city || !destination || !date ||
      days < 1 || days > 30 || budget <= 0) {
    output.textContent = "Please enter valid trip details.";
    return;
  }

  const place = destinations.find(item => item.name === destination);
  const dailyBudget = Math.floor(budget / days);

  const result = document.createElement("div");
  result.className = "result";

  const heading = document.createElement("h3");
  heading.textContent = `${city} to ${destination}`;

  const details = document.createElement("p");
  details.textContent =
    `Start date: ${date} | ${days} days | Total budget: ₹${budget.toLocaleString("en-IN")}`;

  const estimate = document.createElement("p");
  estimate.textContent =
    `Your daily budget: ₹${dailyBudget.toLocaleString("en-IN")}. ` +
    `Indicative destination budget: ₹${place.price.toLocaleString("en-IN")}. ` +
    "These are estimates, not live prices.";

  const itineraryTitle = document.createElement("h4");
  itineraryTitle.textContent = "Suggested itinerary";

  const itineraryList = document.createElement("ol");

  const activities = [
    `Arrive in ${destination} and explore nearby places`,
    `Visit popular attractions and enjoy local food`,
    `Explore nature, markets or cultural landmarks`
  ];

  for (let i = 0; i < days; i++) {
    const item = document.createElement("li");
    item.textContent = `Day ${i + 1}: ${activities[i % activities.length]}`;
    itineraryList.append(item);
  }

  result.append(heading, details, estimate, itineraryTitle, itineraryList);
  output.replaceChildren(result);
});

// Demo booking only: no server, payment or database
document.getElementById("booking-form").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("traveler").value.trim();
  const destination = document.getElementById("book-place").value;
  const result = document.getElementById("booking-result");

  const message = document.createElement("div");
  message.className = "result";

  const heading = document.createElement("h3");
  heading.textContent = "Demo Booking Request Created!";

  const details = document.createElement("p");
  details.textContent =
    `Thank you, ${name}. Your sample request for ${destination} has been prepared.`;

  const note = document.createElement("p");
  note.textContent =
    "This is only a frontend demo. No real reservation has been made.";

  message.append(heading, details, note);
  result.replaceChildren(message);
});