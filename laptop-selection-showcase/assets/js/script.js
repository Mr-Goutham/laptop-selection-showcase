document.addEventListener("DOMContentLoaded", () => {
  const laptopList = document.getElementById("laptopList");
  const categoryFilter = document.getElementById("categoryFilter");
  const searchBox = document.getElementById("searchBox");
  const downloadBtn = document.getElementById("downloadBtn");
  const themeToggle = document.getElementById("themeToggle");

  // Function to display laptops
  function displayLaptops(filteredLaptops) {
    laptopList.innerHTML = "";

    if (filteredLaptops.length === 0) {
      laptopList.innerHTML = "<p>No laptops found.</p>";
      return;
    }

    filteredLaptops.forEach(laptop => {
      const card = document.createElement("div");
      card.className = "laptop-card";

      card.innerHTML = `
        <h3>${laptop.brand} ${laptop.model}</h3>
        <p><strong>Category:</strong> ${laptop.category}</p>
        <p><strong>Processor:</strong> ${laptop.specifications.processor}</p>
        <p><strong>RAM:</strong> ${laptop.specifications.ram}</p>
        <p><strong>Storage:</strong> ${laptop.specifications.storage}</p>
        <p><strong>Screen:</strong> ${laptop.specifications.screen}</p>
        <p><strong>Price:</strong> $${laptop.price.toFixed(2)}</p>
      `;

      laptopList.appendChild(card);
    });
  }

  // Function to apply filters
  function filterLaptops() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const searchTerm = searchBox.value.toLowerCase();

    const filtered = laptops.filter(laptop => {
      const matchesCategory =
        selectedCategory === "all" || laptop.category.toLowerCase() === selectedCategory;
      const matchesSearch =
        laptop.brand.toLowerCase().includes(searchTerm) ||
        laptop.model.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });

    displayLaptops(filtered);
  }

  // Download filtered laptops as JSON
  function downloadLaptops() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const searchTerm = searchBox.value.toLowerCase();

    const filtered = laptops.filter(laptop => {
      const matchesCategory =
        selectedCategory === "all" || laptop.category.toLowerCase() === selectedCategory;
      const matchesSearch =
        laptop.brand.toLowerCase().includes(searchTerm) ||
        laptop.model.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });

    const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "filtered_laptops.json";
    link.click();

    URL.revokeObjectURL(url);
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Event listeners
  categoryFilter.addEventListener("change", filterLaptops);
  searchBox.addEventListener("input", filterLaptops);
  downloadBtn.addEventListener("click", downloadLaptops);

  // Initial render
  displayLaptops(laptops);
});
