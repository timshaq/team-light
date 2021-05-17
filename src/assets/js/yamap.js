export default function () {
const ourGeo = [55.726048, 37.785159]
const mapEl = document.getElementById('contactsMap');
if(!mapEl) return
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("contactsMap", {
            center: ourGeo,
            zoom: 17
        });
		// var myGeoObject = new ymaps.GeoObject({
		//     geometry: {
		//         type: "Point", // тип геометрии - точка
		//         coordinates: ourGeo // координаты точки
		//     }
		// });

		// myMap.geoObjects.add(myGeoObject);
		var myPlacemark = new ymaps.Placemark(ourGeo, {}, {
		    iconLayout: 'default#image',
		    iconImageHref: 'assets/img/yamap-tag.png',
		    iconImageSize: [130, 85],
		    iconImageOffset: [-56, -85]
		});
		myMap.geoObjects.add(myPlacemark);

    }
 

}