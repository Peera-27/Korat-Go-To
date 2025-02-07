import { Component, ViewChild } from '@angular/core'
import { MapInfoWindow, MapMarker, GoogleMapsModule } from '@angular/google-maps'


@Component({
    selector: 'app-map',
    imports: [GoogleMapsModule, MapMarker, MapInfoWindow],
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {
    center: google.maps.LatLngLiteral = { lat: 14.979, lng: 102.100 }; // ตำแหน่งเริ่มต้น (โคราช)
    zoom = 13;
    markers: any[] = [];

    @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow
    infoContent = '';

    // เพิ่ม Marker ลงใน Map
    addMarker(lat: number, lng: number, name: string) {
        this.markers.push({ position: { lat, lng }, title: name })
    }

    openInfoWindow(marker: MapMarker, title: string) {
        this.infoContent = title
        this.infoWindow.open(marker)
    }
}
