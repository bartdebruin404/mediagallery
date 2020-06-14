function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        // Document is already ready, call the callback directly
        callbackFunc();
    } else if (document.addEventListener) {
        // All modern browsers to register DOMContentLoaded
        document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
        // Old IE browsers
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') {
                callbackFunc();
            }
        });
    }
}





ready(function () {
    var gallery = new Gallery();
    var modal = new Modal();
});


(function () {
    // Constructor
    this.Gallery = function () {
        this.gallery = document.getElementById('mediaGallery');
        this.galleryItems = [
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/mov_bbb.mp4",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "1m34 - 200MB",
                "linkCaption": "Download video",
            },
            {
                "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "8m56",
                "linkCaption": "Ga naar youtube",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/mov_bbb.mp4",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "1m34 - 200MB",
                "linkCaption": "Download video",
            },
            {
                "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "8m56",
                "linkCaption": "Ga naar youtube",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/mov_bbb.mp4",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "1m34 - 200MB",
                "linkCaption": "Download video",
            },
            {
                "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "8m56",
                "linkCaption": "Ga naar youtube",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/mov_bbb.mp4",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "1m34 - 200MB",
                "linkCaption": "Download video",
            },
            {
                "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "8m56",
                "linkCaption": "Ga naar youtube",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/mov_bbb.mp4",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "1m34 - 200MB",
                "linkCaption": "Download video",
            },
            {
                "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "8m56",
                "linkCaption": "Ga naar youtube",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
            {
                "mediaOriginalFile": "img/mov_bbb.mp4",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "1m34 - 200MB",
                "linkCaption": "Download video",
            },
            {
                "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Video caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": "8m56",
                "linkCaption": "Ga naar youtube",
            },
            {
                "mediaOriginalFile": "img/1920x950.png",
                "mediaMobileFile": "img/640x300.png",
                "mediaTabletFile": "img/916x480.png",
                "mediaCaption": "Image caption - Lorem ipsum solor sit amet",
                "mediaAlt": "Uitsnede foto",
                "mediaData": undefined,
                "linkCaption": "Download afbeelding",
            },
        ];

        this.galleryItems.forEach(item => {
            this.card = document.createElement('article');
            this.card.className = 'card gallery__item';
            this.card.innerHTML = `
                        <div class="card__media">
                          <a
                            href="${item.mediaOriginalFile}"
                            title="${item.mediaCaption}"
                            target="_blank"
                            modal
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
                        ${item.mediaData ? "<p>"+item.mediaData+"</p>" : ""}
                        </div>
                        <div class="card__footer">
                          <a href="${item.mediaOriginalFile}" download="groot" class="button-link" target="_blank"
                            >${item.linkCaption}</a
                          >
                        </div>
            `;


            this.gallery.appendChild(this.card);
        })
    }
}());

(function () {
    // Constructor
    this.Modal = function () {
        this.docFrag = document.createDocumentFragment();
        this.triggers = document.querySelectorAll('[modal]');

        this.init();
    }

    //PRIVATE
    function hassClass(el, className) {
        return el.classList.contains(className);;
    }
    function addClass(el, className) {
        el.classList.add(className);
    }
    function removeClass(el, className) {
        el.classList.remove(className);
    }

    // PUBLIC
    Modal.prototype.init = function () {
        this.createModal();
        this.handleEvents();
    }

    Modal.prototype.createModal = function () {
        this.modal = document.createElement('div');
        this.modal.className = 'modal';

        this.content = document.createElement('div');
        this.content.className = 'modal__content';
        this.modal.appendChild(this.content);

        this.inner = document.createElement('div');
        this.inner.className = 'modal__content__inner';
        this.content.appendChild(this.inner);

        this.closeButton = document.createElement('button');
        this.closeButton.className = 'modal__close';
        this.closeButton.innerHTML = '&times;';
        this.inner.appendChild(this.closeButton);

        this.media = document.createElement('div');
        this.media.className = 'modal__media';
        this.media.innerHTML = '';
        this.inner.appendChild(this.media);

        this.caption = document.createElement('div');
        this.caption.className = 'modal__caption';
        this.caption.innerHTML = '';
        this.inner.appendChild(this.caption);

        this.docFrag.appendChild(this.modal);
        document.body.appendChild(this.docFrag);
    }

    Modal.prototype.openModal = function (element) {
        addClass(document.body, 'modal-open');
        let type = element.getAttribute('modal');
        let url = element.getAttribute('href');
        let caption = element.getAttribute('title');
        let media;


        if (url.match(/.png/g)) {
            media = '<img src="' + url + '" alt="" class="img-responsive" />';
        }
        else if (url.match(/.mp4/g)) {
            media = '<div class="embed-container"><video width="400" controls autoplay><source src="' + url + '" type="video/mp4">Your browser does not support HTML video.</video></div>';
        }
        else if (url.match(/youtube/g)) {
            media = '<div class="embed-container"><iframe width="1120" height="630" src="' + url + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
        else {
            //window.location = url;
            return false;
        }
        this.media.innerHTML = media;
        this.caption.innerHTML = caption;
    }
    Modal.prototype.closeModal = function () {
        removeClass(document.body, 'modal-open');
        this.media.innerHTML = "";
        this.caption.innerHTML = "";
    }

    Modal.prototype.handleEvents = function () {
        this.triggers.forEach((element) => {
            element.addEventListener('click', this.onOpenModalClick.bind(this, element));
        });
        this.content.addEventListener('click', this.onContentModalClick.bind(this));
        this.closeButton.addEventListener('click', this.onCloseModalClick.bind(this));
    }

    Modal.prototype.onOpenModalClick = function (element, event) {
        event.preventDefault();
        this.openModal(element);
    }

    Modal.prototype.onCloseModalClick = function (event) {
        event.preventDefault();
        this.closeModal();
    }

    Modal.prototype.onContentModalClick = function (event) {
        event.preventDefault();
        if (this.content === event.target)
            this.closeModal();
    }
}());