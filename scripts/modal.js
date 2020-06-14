

(function () {
    // Constructor
    this.Modal = function () {
        this.docFrag = document.createDocumentFragment();
        this.triggers = document.querySelectorAll('[modal]');

        this.init();
    }

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
        this.closeButton.className = 'modal__close button';
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
        let type = parseInt(element.getAttribute('modal'));
        let url = element.getAttribute('href');
        let caption = element.getAttribute('title');
        let media;

        if (type === 1) {
            media = '<img src="' + url + '" alt="" class="img-responsive" />';
        }
        else if (type === 2) {
            media = '<div class="embed-container"><video width="400" controls autoplay><source src="' + url + '" type="video/mp4">Your browser does not support HTML video.</video></div>';
        }
        else if (type === 3) {
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
        var base = this;
        document.addEventListener('click', function (e) {
                if(e.target && e.target.parentNode.hasAttribute('modal')){
                    e.preventDefault();
                    base.onOpenModalClick(e.target.parentNode);
                 }
        }, false);

        this.content.addEventListener('click', this.onContentModalClick.bind(this));
        this.closeButton.addEventListener('click', this.onCloseModalClick.bind(this));
    }

    Modal.prototype.onOpenModalClick = function (element) {
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