import {Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dotd',
  templateUrl: 'dotd.component.html',
  styleUrls: ['dotd.component.css']
})

export class DotdComponent implements OnInit {

  public imagen;
  public message = 'Perro del día';

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(environment.api_url).subscribe((dotd: any) => {
      this.imagen = dotd.message;
    });
  }
}
