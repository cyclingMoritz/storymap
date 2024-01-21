var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZ2lzbWFzdGVybTIiLCJhIjoiY2plZHhubTQxMTNoYzMza3Rqa3kxYTdrOCJ9.53B1E6mKD_EQOVb2Y0-SsA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Where is Luca from?',
    subtitle: "The main leads regarding Luca's nationality",
    byline: 'V1: 21/01/2024',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Current Location',
            image: 'location.jpg',
            description: 'Where we should be around now',
            location: {
                center: [2.139423577969441,41.3822612689802],
                zoom: 18,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Where it all started....',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: "Vesuvius has a long historic and literary tradition. It was considered a divinity of the Genius type at the time of the eruption of AD 79: it appears under the inscribed name Vesuvius as a serpent in the decorative frescos of many lararia, or household shrines, surviving from Pompeii. An inscription from Capua[8] to IOVI VESVVIO indicates that he was worshipped as a power of Jupiter; that is, Jupiter Vesuvius.[9]. \n The Romans regarded Mount Vesuvius as being devoted to Hercules.[10] The historian Diodorus Siculus relates a tradition that Hercules, in the performance of his labors, passed through the country of nearby Cumae on his way to Sicily and found there a place called the Phlegraean Plain (Φλεγραῖον πεδίον, plain of fire), from a hill which anciently vomited out fire ... now called Vesuvius.[11] It was inhabited by giant bandits, the sons of the Earth. With the gods' assistance, he pacified the region and continued. The facts behind the tradition, if any, remain unknown, as does whether Herculaneum was named after it. An epigram by the poet Martial in 88 AD suggests that both Venus, patroness of Pompeii, and Hercules were worshipped in the region devastated by the eruption of 79.[12]",
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan3',
            alignment: 'right',
            hidden: false,
            title: 'Where it actually started',
            image: 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2021/01/13131201/filomena-shutterstock-1024x683.jpg',
            location: {
                center: [ -3.6910761992906056, 40.420535251929124],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'Where was I born?',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Altstadtbr%C3%BCcke_und_Peterskirche_in_G%C3%B6rlitz.jpg',
            location: {
                center: [ 14.99229638783196,51.15833535706055],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'First trip',
            image: 'https://media.cntraveler.com/photos/629fa2fa811eeb0c0dcf6ee2/master/pass/16x9_Milos_Poliegos_Merakos_02.jpg',
            location: {
                center: [  23.765548425781684, 40.22880126880727],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
