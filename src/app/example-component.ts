import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

interface Option {
  value: string;
  description: string;
}

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent {

  public myControl = new FormControl();

  public mySelect = new FormControl();

  public options: Option[] = [
    {
      value: 'One',
      description: 'the first one'
    },
    {
      value: 'Two',
      description: 'the second one'
    },
    {
      value: 'Three',
      description: 'the third one'
    }
  ];

  public foods: Option[] = [
    {
      value: 'Steak',
      description: 'Steeeeeeeeeeeeeeeeeeeeeeak'
    },
    {
      value: 'Pizza',
      description: 'PizzaPizzaPizzaPizza'
    },
    {
      value: 'Tacos',
      description: 'Tacos!!!!!!!!!!!!'
    }
  ];

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */