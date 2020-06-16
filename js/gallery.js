
(function () {
    // Constructor
    this.Gallery = function () {
        this.mediaGallery = document.getElementById('mediaGallery');
        this.gallery = this.mediaGallery.getElementsByClassName("gallery")[0];
        this.galleryItems = globalGalleryItems;
        this.titleCounter = document.getElementById('mediaGalleryCount');

        this.display = 6;
        this.currentDisplayed = 0;
        this.nrOfCards = Object.keys(this.galleryItems).length;

        this.init();
    }

    Gallery.prototype.init = function () {
        this.createGallery();
        this.handleEvents();
        this.loadCards(this.display);
    }

    Gallery.prototype.createGallery = function () {
        this.loadButton = document.createElement('button');
        this.loadButton.className = 'gallery__load-more button';
        this.loadButton.innerHTML = 'Meer media';
        this.mediaGallery.appendChild(this.loadButton);
        this.titleCounter.innerHTML = Object.keys(this.galleryItems).length;
    }

    Gallery.prototype.handleEvents = function () {
        this.loadButton.addEventListener('click', this.onLoadMoreClick.bind(this));
    }

    Gallery.prototype.onLoadMoreClick = function () {
        this.loadCards(this.display)
    }

    Gallery.prototype.addCard = function (item) {
        this.card = document.createElement('article');
        this.card.className = 'card gallery__item';
        this.card.innerHTML = `
                    <div class="card__media">
                      <a
                        href="${item.mediaOriginalFile}"
                        title="${item.mediaCaption}"
                        target="_blank"
                        modal="${item.mediaType}"
                      >
                        <img
                          alt="${item.mediaAlt}"
                          src="${item.mediaTabletFile}"
                          srcset="${item.mediaMobileFile} 640w, ${item.mediaTabletFile} 916w"
                          sizes=" 
                            (min-width: 1366px) 916px, 
                            (min-width: 1536px) 1030px
                          "
                          class="img-responsive gallery__image"
                        />
                      </a>
                    </div>
                    <div class="card__body">
                    <p>${item.mediaCaption}</p>
                    ${item.mediaData ? "<p>" + item.mediaData + "</p>" : ""}
                    </div>
                    <div class="card__footer">
                      <a href="${item.mediaOriginalFile}" download="groot" class="button-link" target="_blank"
                        >${item.linkCaption}</a
                      >
                    </div>
        `;
        
    const links = document.getElementsByClassName('.button-link');
    links.forEach(link => link.addEventListener('mouseenter', shootLines));

    function shootLines(e) {

        const itemDim = this.getBoundingClientRect(),
            itemSize = {
                x: itemDim.right - itemDim.left,
                y: itemDim.bottom - itemDim.top,
            },
            shapes = ['line', 'zigzag'],
            colors = ['#2FB5F3',
                '#FF0A47',
                '#FF0AC2',
                '#47FF0A'];

        const chosenC = Math.floor(Math.random() * colors.length),
            chosenS = Math.floor(Math.random() * shapes.length);

        // create shape
        const burst = new mojs.Burst({
            left: itemDim.left + (itemSize.x / 2),
            top: itemDim.top + (itemSize.y / 2),
            radiusX: itemSize.x,
            radiusY: itemSize.y,
            count: 8,

            children: {
                shape: shapes[chosenS],
                radius: 10,
                scale: { 0.8: 1 },
                fill: 'none',
                points: 7,
                stroke: colors[chosenC],
                strokeDasharray: '100%',
                strokeDashoffset: { '-100%': '100%' }, 
                duration: 350,
                delay: 100,
                easing: 'quad.out',
                isShowEnd: false,
            }
        });

        burst.play(); 
    }
        this.gallery.appendChild(this.card);
    }

    Gallery.prototype.loadCards = function (nr) {
        if(this.currentDisplayed < this.nrOfCards){
            let count = this.currentDisplayed + nr;
            for(let display = this.currentDisplayed;display < count; display++){
                this.currentDisplayed++;
                this.addCard(this.galleryItems[display]);
                if(this.currentDisplayed >= this.nrOfCards){
                    addClass(this.loadButton, 'disabled');
                }
            }
        }
        
    }
}());
