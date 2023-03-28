fetch("../../../web_component/imageCard.html")
  .then((stream) => stream.text())
  .then((htmlFile) => renderComponent(htmlFile));

function renderComponent(htmlFile) {
  class ImageCard extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: "open" });
      shadowDOM.innerHTML = htmlFile;

      // Import CSS
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "imageCard.css");
      link.setAttribute("id", "imageCardCSS")
      shadowDOM.appendChild(link);
      
    }

    // Callback
    connectedCallback() {
      const { shadowRoot, shadowDOM } = this;
      console.log('Custom component element added to page.');
      // entry parameters
      let image = "https://www.dklo.co/DkLMRsT/cfDftOpaytr?u=EWLlMWiZJGGm";
      let title = "New Title";
      let subtitle = "New Subtitle";
      let description = "New Description for the Image";

      if (this.hasAttribute("data-title")) {
        title = this.getAttribute("data-title");
      }
      if (this.hasAttribute("data-subtitle")) {
        subtitle = this.getAttribute("data-subtitle");
      }
      if (this.hasAttribute("data-description")) {
        description = this.getAttribute("data-description");
      }
      if (this.hasAttribute("data-image")) {
        image = this.getAttribute("data-image");
      }
      if(this.hasAttribute("action1")){
        let action1 = this.getAttribute("action1");
        let action1Tag = shadowRoot.getElementById("action1");
        action1Tag.innerText = action1;
        
        if(this.hasAttribute("action1-href")){
          let action1Href = this.getAttribute("action1-href");
          action1Tag.href = action1Href;
        }
      }
      if(this.hasAttribute("action2")){
        let action1 = this.getAttribute("action2");
        let action1Tag = shadowRoot.getElementById("action2");
        action1Tag.innerText = action1;
        
        if(this.hasAttribute("action2-href")){
          let action1Href = this.getAttribute("action2-href");
          action1Tag.href = action1Href;
        }
      }
    
      if (this.hasAttribute("template")){
        let cssCode = this.getAttribute("template");

        let linkTag = shadowRoot.getElementById("imageCardCSS");
        linkTag.remove();

        let styleTag = document.createElement("style");
        styleTag.innerHTML = cssCode;

        shadowRoot.appendChild(styleTag);

      }
      
      //imagen
      let img1 = shadowRoot.getElementById('image1');
      img1.src = image;
      //titulo
      let title1 = shadowRoot.getElementById('title');
      title1.innerText = title;
      //subtitulo
      let subtitle1 = shadowRoot.getElementById('subtitle');
      subtitle1.innerText = subtitle;
      //descripcion
      let description1 = shadowRoot.getElementById('description');
      description1.innerText = description;
    }

    disconnectedCallback() {
      console.log("Custom component element removed from page.");
    }

    adoptedCallback() {
      console.log("Custom component element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("Custom component element attributes changed.");
      
    }
  }

  customElements.define("image-card", ImageCard);
}
