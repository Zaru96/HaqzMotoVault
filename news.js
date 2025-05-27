// News API configuration
const NEWS_API_KEY = "e689e1ea6a5c4960b5fc689232449b30"; // Replace with your NewsAPI key
const NEWS_API_URL = "https://newsapi.org/v2/everything";

// Function to fetch motorsport news
async function fetchMotorsportNews() {
  try {
    const response = await fetch(
      `${NEWS_API_URL}?q=(motogp OR wsbk OR "Formula 1" OR F1) AND motorsport&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "ok") {
      displayNews(data.articles);
    } else {
      console.error("Error fetching news:", data.message);
      document.querySelector(".news-container").innerHTML =
        '<p class="error-message">Unable to load news at this time.</p>';
    }
  } catch (error) {
    console.error("Error:", error);
    document.querySelector(".news-container").innerHTML =
      '<p class="error-message">Unable to load news at this time.</p>';
  }
}

// Function to create and show popup
function showArticlePopup(article) {
  const popup = document.createElement("div");
  popup.className = "article-popup";

  const content = document.createElement("div");
  content.className = "popup-content";

  const closeBtn = document.createElement("button");
  closeBtn.className = "popup-close";
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = () => {
    document.body.removeChild(popup);
    document.body.style.overflow = "auto";
  };

  const imageUrl =
    article.urlToImage || "https://via.placeholder.com/800x400?text=No+Image";
  const publishedDate = new Date(article.publishedAt).toLocaleDateString();

  content.innerHTML = `
    <div class="popup-header">
      <h2>${article.title}</h2>
      <p class="popup-date">${publishedDate}</p>
    </div>
    <div class="popup-image">
      <img src="${imageUrl}" alt="${article.title}">
    </div>
    <div class="popup-body">
      <p>${article.description || "No description available"}</p>
      <p>${article.content || ""}</p>
    </div>
    <div class="popup-footer">
      <a href="${
        article.url
      }" target="_blank" class="read-original">Read Original Article</a>
    </div>
  `;

  content.insertBefore(closeBtn, content.firstChild);
  popup.appendChild(content);
  document.body.appendChild(popup);
  document.body.style.overflow = "hidden";
}

// Function to display news articles
function displayNews(articles) {
  const newsContainer = document.querySelector(".news-container");
  newsContainer.innerHTML = "";

  articles.slice(0, 6).forEach((article) => {
    const newsCard = document.createElement("div");
    newsCard.className = "news-card";

    const imageUrl =
      article.urlToImage || "https://via.placeholder.com/300x200?text=No+Image";
    const publishedDate = new Date(article.publishedAt).toLocaleDateString();

    newsCard.innerHTML = `
      <div class="news-image">
        <img src="${imageUrl}" alt="${article.title}">
      </div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p class="news-date">${publishedDate}</p>
        <p class="news-description">${
          article.description || "No description available"
        }</p>
        <div class="news-buttons">
          <button class="read-more" onclick='showArticlePopup(${JSON.stringify(
            article
          ).replace(/'/g, "&#39;")})'>Read Article</button>
        </div>
      </div>
    `;

    newsContainer.appendChild(newsCard);
  });
}

// Initialize news section when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchMotorsportNews();
});
