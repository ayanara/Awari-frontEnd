const postsData = [
    {
      title: "Google Chrome",
      content:
        "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!",
    },
    {
      title: "Mozilla Firefox",
      content:
        "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.",
    },
    {
      title: "Microsoft Edge",
      content:
        "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.",
    },
  ];
  
  const postsContainer = document.getElementById("posts");
  
  for (const postData of postsData) {
    const article = document.createElement("article");
    article.classList.add("article");
  
    const title = document.createElement("h2");
    title.classList.add("article-title");
    title.textContent = postData.title;
    article.appendChild(title);
  
    const content = document.createElement("p");
    content.classList.add("article-content");
    content.textContent = postData.content;
    article.appendChild(content);
  
    // Adiciona uma imagem ao artigo
    const image = document.createElement("img");
    image.src = postData.imageUrl;
    image.classList.add("article-image");
    article.appendChild(image);
  
    postsContainer.appendChild(article);
  }
  