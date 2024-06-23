const api = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=81bf149708374912bad20a0e10e5340c";

fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    for (let i = 0; i < 10; i++) {
      var id = `${i}`;
      var simages = document.getElementsByClassName("simage");
      simages[id].style.backgroundImage = `url(${data.articles[i].urlToImage})`;
      var sheadlines = document.getElementsByClassName("sheadline");
      sheadlines[id].innerText = data.articles[i].title;
      var sdates = document.getElementsByClassName("stext");
      sdates[id].innerText = new Date(data.articles[i].publishedAt).toLocaleString();

      var img = document.getElementsByClassName("sblog");
      img[i].onclick = function() {
        var modal = document.getElementById('popup');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = data.articles[i].urlToImage;
        captionText.innerHTML = data.articles[i].content;
      };

      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        var modal = document.getElementById('popup');
        modal.style.display = "none";
      };
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
  // Fetch data function
  const apiKeys = {
    apple: "81bf149708374912bad20a0e10e5340c",
    tesla: "81bf149708374912bad20a0e10e5340c",
    business: "81bf149708374912bad20a0e10e5340c",
    techcrunch: "81bf149708374912bad20a0e10e5340c",
    wsj: "81bf149708374912bad20a0e10e5340c"
  };
  
  // Function to fetch data from different APIs
  async function fetchData(api) {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.articles; // Extract articles from response
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Function to update content based on the fetched data
  function updateContent(data) {
    const cards = document.querySelectorAll('.card1, .card2');
    const lheadlines = document.querySelectorAll('.lheadline');
    const lauthors = document.querySelectorAll('.lauthor');
    const ldates = document.querySelectorAll('.ldate');
    const lb1Divs = document.querySelectorAll('.lfeature #lb1');
    const lb2Divs = document.querySelectorAll('.lfeature #lb2');
    const buttons = document.querySelectorAll('.lfeature button'); // Select all buttons
  
    for (let i = 0; i < 2; i++) {
      if (data[i]) {
        cards[i].style.backgroundImage = `url(${data[i].urlToImage})`;
        lheadlines[i].innerText = data[i].title;
        lauthors[i].innerText = data[i].author || 'Unknown';
        ldates[i].innerText = new Date(data[i].publishedAt).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        lb1Divs[i].innerText = 'Featured';
        lb2Divs[i].innerText = data[i].source.name;
  
        // Add click event listener to button to open modal
        buttons[i].onclick = function() {
          const modal = document.getElementById('popup');
          const modalImg = document.getElementById("img01");
          const captionText = document.getElementById("caption");
  
          modal.style.display = "block";
          modalImg.src = data[i].urlToImage || ''; // Ensure it's a valid URL
          captionText.innerHTML = data[i].content || ''; // Ensure content exists
        };
      } else {
        // Handle case where there is no data for the index
        cards[i].style.backgroundImage = '';
        lheadlines[i].innerText = '';
        lauthors[i].innerText = '';
        ldates[i].innerText = '';
        lb1Divs[i].innerText = '';
        lb2Divs[i].innerText = '';
      }
    }
  }
  
  // Event listeners for navigation items
  document.getElementById('h').addEventListener('click', async () => {
    const api = `https://newsapi.org/v2/everything?q=apple&from=2024-06-22&to=2024-06-22&sortBy=popularity&apiKey=${apiKeys.apple}`;
    const data = await fetchData(api);
    if (data) {
      updateContent(data.slice(0, 2)); // Slice first 2 articles for HOME
      highlightNavItem('h');
    }
  });
  
  document.getElementById('n').addEventListener('click', async () => {
    const api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKeys.business}`;
    const data = await fetchData(api);
    if (data) {
      const n = Math.floor(Math.random() * data.length);
      const m = Math.floor(Math.random() * data.length);
      updateContent([data[n], data[m]]);
      highlightNavItem('n');
    }
  });
  
  document.getElementById('hi').addEventListener('click', async () => {
    const api = `https://newsapi.org/v2/everything?q=tesla&from=2024-05-23&sortBy=publishedAt&apiKey=${apiKeys.tesla}`;
    const data = await fetchData(api);
    if (data) {
      updateContent(data.slice(2, 4)); // Slice historical articles
      highlightNavItem('hi');
    }
  });
  
  document.getElementById('l').addEventListener('click', async () => {
    const api = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKeys.techcrunch}`;
    const data = await fetchData(api);
    if (data) {
      updateContent(data.slice(4, 6)); // Slice lifestyle articles
      highlightNavItem('l');
    }
  });
  
  document.getElementById('f').addEventListener('click', async () => {
    const api = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKeys.wsj}`;
    const data = await fetchData(api);
    if (data) {
      updateContent(data.slice(6, 8)); // Slice food articles
      highlightNavItem('f');
    }
  });
  
  document.getElementById('s').addEventListener('click', async () => {
    const api = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKeys.business}`;
    const data = await fetchData(api);
    if (data) {
      updateContent(data.slice(8, 10)); // Slice science articles
      highlightNavItem('s');
    }
  });
  
  // Initial fetch and update for default category (HOME)
  document.addEventListener('DOMContentLoaded', async () => {
    const api = `https://newsapi.org/v2/everything?q=apple&from=2024-06-22&to=2024-06-22&sortBy=popularity&apiKey=${apiKeys.apple}`;
    const data = await fetchData(api);
    if (data) {
      updateContent(data.slice(0, 2)); // Update with default category data (HOME)
      highlightNavItem('h'); // Highlight default tab
    }
  });
  
  // Function to highlight clicked navigation item
  function highlightNavItem(id) {
    const navItems = document.querySelectorAll('.navcon');
    navItems.forEach(item => {
      if (item.id === id) {
        item.style.backgroundColor = '#322C2B';
        item.style.color = '#E4C59E';
      } else {
        item.style.backgroundColor = '#E4C59E';
        item.style.color = '#322C2B';
      }
    });
  }
  
  // Close the modal when the user clicks anywhere outside the modal
  window.onclick = function(event) {
    const modal = document.getElementById('popup');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Close the modal when the user clicks on the close button
  document.getElementById('close').onclick = function() {
    const modal = document.getElementById('popup');
    modal.style.display = "none";
  };
  