function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
      // Document is already ready, call the callback directly
      callbackFunc();
    } else if (document.addEventListener) {
      // All modern browsers to register DOMContentLoaded
      document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
      // Old IE browsers
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
          callbackFunc();
        }
      });
    }
  }
  
  ready(function() {
    var modal = new Modal();
  });



  (function () {
    // Constructor
    this.Modal = function () {
        this.modal = document.getElementById('modal');
        this.content = this.modal.getElementsByClassName('modal__content')[0];
        this.triggers = document.querySelectorAll('[modal]');
        this.init();
    }

        //PRIVATE
        function hassClass(el,className) {
            return el.classList.contains(className);;
        }
        function addClass(el,className) {
            el.classList.add(className);
        }
        function removeClass(el,className) {
            el.classList.remove(className);
        }
    // PUBLIC
    Modal.prototype.init = function () {
        this.handleEvents();
    }
    
    Modal.prototype.openModal = function (element) {
        addClass(document.body, 'modal-open');
        //element.getAttribute("modal")
     }
     Modal.prototype.closeModal = function () {
        removeClass(document.body, 'modal-open');
     }

    Modal.prototype.handleEvents = function () {
        this.triggers.forEach((element) => {
            element.addEventListener('click', this.onOpenModalClick.bind(this, element));
        });
        this.content.addEventListener('click', this.onContentModalClick.bind(this));
    }
    Modal.prototype.onOpenModalClick = function (element, event) {
        event.preventDefault();
        this.openModal(element);
    }
    Modal.prototype.onContentModalClick = function (event) {
        event.preventDefault();
        if(this.content === event.target)
            this.closeModal();
    }
}());