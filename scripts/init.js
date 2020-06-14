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

const MediaTypeEnum = {
    IMAGE: 1,
    VIDEO: 2,
    YOUTUBE: 3,
};

function hassClass(el, className) {
    return el.classList.contains(className);;
}
function addClass(el, className) {
    el.classList.add(className);
}
function removeClass(el, className) {
    el.classList.remove(className);
}

ready(function () {
    var gallery = new Gallery();
    var modal = new Modal();
});

const globalGalleryItems = [
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "1. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.VIDEO,
        "mediaOriginalFile": "/img/mov_bbb.mp4",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "2. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "1m34 - 200MB",
        "linkCaption": "Download video",
    },
    {
        "mediaType": MediaTypeEnum.YOUTUBE,
        "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "3. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "8m56",
        "linkCaption": "Ga naar youtube",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "4. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "5. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.VIDEO,
        "mediaOriginalFile": "/img/mov_bbb.mp4",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "6. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "1m34 - 200MB",
        "linkCaption": "Download video",
    },
    {
        "mediaType": MediaTypeEnum.YOUTUBE,
        "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "7. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "8m56",
        "linkCaption": "Ga naar youtube",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "8. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "9. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.VIDEO,
        "mediaOriginalFile": "/img/mov_bbb.mp4",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "10. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "1m34 - 200MB",
        "linkCaption": "Download video",
    },
    {
        "mediaType": MediaTypeEnum.YOUTUBE,
        "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "11. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "8m56",
        "linkCaption": "Ga naar youtube",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "12. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "13. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.VIDEO,
        "mediaOriginalFile": "/img/mov_bbb.mp4",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "14. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "1m34 - 200MB",
        "linkCaption": "Download video",
    },
    {
        "mediaType": MediaTypeEnum.YOUTUBE,
        "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "15. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "8m56",
        "linkCaption": "Ga naar youtube",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "16. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "17. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.VIDEO,
        "mediaOriginalFile": "/img/mov_bbb.mp4",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "18. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "1m34 - 200MB",
        "linkCaption": "Download video",
    },
    {
        "mediaType": MediaTypeEnum.YOUTUBE,
        "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "19. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "8m56",
        "linkCaption": "Ga naar youtube",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "20. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "21. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
    {
        "mediaType": MediaTypeEnum.VIDEO,
        "mediaOriginalFile": "/img/mov_bbb.mp4",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "22. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "1m34 - 200MB",
        "linkCaption": "Download video",
    },
    {
        "mediaType": MediaTypeEnum.YOUTUBE,
        "mediaOriginalFile": "https://www.youtube.com/embed/u5XO_59jQVc",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "23. Video caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": "8m56",
        "linkCaption": "Ga naar youtube",
    },
    {
        "mediaType": MediaTypeEnum.IMAGE,
        "mediaOriginalFile": "/img/1920x950.png",
        "mediaMobileFile": "/img/640x300.png",
        "mediaTabletFile": "/img/916x480.png",
        "mediaCaption": "24. Image caption - Lorem ipsum solor sit amet",
        "mediaAlt": "Uitsnede foto",
        "mediaData": undefined,
        "linkCaption": "Download afbeelding",
    },
];