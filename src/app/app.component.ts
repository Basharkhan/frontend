import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { MapsAPILoader } from '@agm/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;

  lat: number = 23.8103;
  lng: number = 90.4125;

  constructor(private mapsApiLoader: MapsAPILoader, private ngZone: NgZone) {}

  public handleAddressChange(address: Address) {
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
    console.log(address.geometry.location.toJSON())
    console.log(address.geometry.viewport.getNorthEast())
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
  }
}
