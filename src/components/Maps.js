import { YMaps, Map, GeolocationControl, Clusterer, Placemark } from 'react-yandex-maps';

const mapSetting = {
    center: [55.75, 37.57], 
    zoom: 10,
}

const mapOptions = {
    width: '100%',
    height: '500px'
}

const Maps = () => (
<YMaps>
    <div className = 'container'>
        <div className = 'maps'>
            <Map defaultState = {mapSetting} style = {mapOptions}>
            <GeolocationControl />
                <Clusterer>
                    <Placemark
                        geometry={[55.68213466904518, 37.58078761874056]}
                    />
                    <Placemark
                        geometry={[55.68431103049897, 37.62117458501379]}
                    />
                    <Placemark
                        geometry={[55.64486702301957, 37.51985507742309]}
                    />
                    <Placemark
                        geometry={[55.67606483734886, 37.524609477264896]}
                    />
                    <Placemark
                        geometry={[55.69459533842857, 37.557839762743356]}
                    />
                    <Placemark
                        geometry={[55.67113200357631, 37.5288360110302]}
                    />
                </Clusterer>
            </Map>
        </div>
    </div>
</YMaps>
);

export {Maps}
