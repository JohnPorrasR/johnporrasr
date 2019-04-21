import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

  protected val: string;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.val = this.rutaActiva.snapshot.params.val;
    console.log(this.val);
  }

}
