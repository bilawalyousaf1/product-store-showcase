const output = document.getElementById("output");
const loader = document.getElementById("loader");

const get_products = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products",
    );

    loader.classList.add("hidden");

    response.data.forEach((product) => {
      const date = new Date(product.creationAt);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const rating = (Math.random() * 2 + 3).toFixed(1);
      const inStock = Math.random() > 0.2;
      const imgSrc =
        product.images?.[0] || "https://via.placeholder.com/300?text=No+Image";
      const title =
        product.title.length > 40
          ? product.title.slice(0, 40) + "..."
          : product.title;
      const desc =
        product.description.length > 100
          ? product.description.slice(0, 100) + "..."
          : product.description;

      output.innerHTML += `
                <div class="product-card">
                    <div class="card-img-wrap">
                        <img src="${imgSrc}" 
                             alt="${product.title}" 
                             referrerpolicy="no-referrer" 
                             onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Found'" />
                    </div>
                    <div class="card-body">
                        <div class="card-tags">
                            <span class="tag-category">📁 ${product.category.name}</span>
                            <span class="tag-rating">⭐ ${rating}/5</span>
                        </div>
                        <h2 class="card-title">${title}</h2>
                        <p class="card-desc">${desc}</p>
                        <div class="card-footer">
                            <div class="price-wrap">
                                <span class="price">$${product.price}</span>
                                ${product.price > 50 ? '<span class="hot-deal">🔥 HOT</span>' : ""}
                            </div>
                            <button class="btn-cart" onclick="alert('Added to cart: ${product.title.replace(/'/g, "\\'")}')">
                                🛒 Add to Cart
                            </button>
                        </div>
                        <div class="card-meta">
                            <span>🆔 ${product.id}</span>
                            <span>📅 ${formattedDate}</span>
                            <span>${inStock ? "✅ In Stock" : "❌ Out of Stock"}</span>
                            <span>📸 ${product.images.length} photos</span>
                        </div>
                    </div>
                </div>
            `;
    });
  } catch (error) {
    loader.classList.add("hidden");
    output.innerHTML = `<p style="text-align:center; color:red; grid-column:1/-1;">Failed to load products. Please try again later.</p>`;
    console.error("Error fetching products:", error);
  }
};

function changetheme() {
  document.body.classList.toggle("dark");

  const icon = document.querySelector(".theme-btn i");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

get_products();
