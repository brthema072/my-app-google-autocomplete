import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-google-place',
  templateUrl: './google-place.component.html',
  styleUrls: ['./google-place.component.css']
})
export class GooglePlaceComponent implements OnInit {

  @ViewChild("placesRef", {static: false}) placesRef : GooglePlaceDirective;
  public handleAddressChange(address: Address) {
    
    console.log(address)
    
    this.lat = address.geometry.location.lat();

    this.lng = address.geometry.location.lng();
    // Do some stuff
  }

  lat;
  lng;
  zoom: number = 15;
  constructor() { }

  ngOnInit() {
  }

}
