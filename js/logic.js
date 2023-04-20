window.addEventListener('load', () => {
    displayQuote();
    let counter = document.getElementById('count');
    counter.innerText = data.length;
  });

  const existingcards=[]

  function getQuote() {
    const seed = Math.random();
    let selected = document.getElementById('select').value;
    const _data = data.filter((data)=>!existingcards.includes(data.text))
    const filteredData = _data.filter(quote => quote.tag === selected);
    if (selected != 'All') {
      const i = (Math.floor(seed * filteredData.length));
      existingcards.push(filteredData[i].text)
      return filteredData[i];
    } else {
      const i = (Math.floor(seed * data.length));
      existingcards.push(_data[i].text)
      return _data[i];
    }
  };
  const quoteFactory = (obj) => {
    const makeQuote = 
      `<article class="quote">
        <button class="close" onClick="this.parentElement.remove();">&times;</button>
        <figure>
          <blockquote cite="${obj.path}">${obj.text}</blockquote>
          <figcaption>
            <span class="author">${obj.author}</span> 
            <cite>
              <a href="${obj.path}">${obj.source}</a>
            </cite>
          </figcaption>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${obj.video}?start=${obj.start}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="videosize"></iframe>
        </figure>
        <footer>
          <span class="dates">${obj.date}</span>
          <span class="tags">${obj.tag}</span>
        </footer>
      </article>`;
      return makeQuote;
  };
  
  function displayQuote() {
    let parentNode = document.getElementById('main');
    parentNode.insertAdjacentHTML('beforeend', quoteFactory(getQuote()));
  }