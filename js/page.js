window.addEventListener('load', () => {
    let counter = document.getElementById('count');
    counter.innerText = data.length;
    if (document.title === "Quoter | Home") {
      addQuote();
    } else {
      populateByTag();
    };
  });
  data = allQuotes;
  const quoteFactory = (i) => {
    const giveQuote = 
      `<article class="quote">
        <button class="close" onClick="this.parentElement.remove();">&minus;</button>
        <figure>
          <blockquote cite="${data[i].path}">${data[i].text}</blockquote>
          <figcaption>
            <span class="author">${data[i].author}</span> 
            <cite>
              <a href="${data[i].path}">${data[i].source}</a>
            </cite>
          </figcaption>
        </figure>
        <footer>
          <a class="tags" href="routes/${data[i].tag.toLowerCase()}.html">${data[i].tag}</a>
          <span class="dates">${data[i].date}</span>
        </footer>
      </article>`;
      return giveQuote;
  };
  
  function addQuote() {
    let parent = document.getElementById('main');
    let rand = Math.floor(Math.random() * data.length);
    parent.insertAdjacentHTML('beforeend', quoteFactory(rand));
  };
  
  function populateByTag() {
    let pageTag = document.title;
    let tagCounter = document.getElementById('tag-count');
    let parent = document.getElementById('main');
    const tagArray = data.filter(quote => quote.tag === pageTag);
    tagCounter.innerText = tagArray.length;
    for (const i in tagArray) {
      const taggedQuote = 
        `<article class="quote">
          <figure>
            <blockquote cite="${tagArray[i].path}">${tagArray[i].text}</blockquote>
            <figcaption>
              <span class="author">${tagArray[i].author}</span> 
              <cite>
                <a href="${tagArray[i].path}">${tagArray[i].source}</a>
              </cite>
            </figcaption>
          </figure>
          <footer>
            <a class="tags" href="routes/${tagArray[i].tag.toLowerCase()}.html">${tagArray[i].tag}</a>
            <span class="dates">${tagArray[i].date}</span>
          </footer>
        </article>`;
  
      parent.insertAdjacentHTML('beforeend', taggedQuote);
    };
  };
