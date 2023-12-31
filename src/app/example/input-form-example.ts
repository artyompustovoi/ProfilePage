import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ButtonOverviewExample } from "../button_component/button-overview-example";





/**
 * @title Inputs in a form
 */
@Component({
    selector: 'input-form-example',
    templateUrl: 'input-form-example.html',
    styleUrls: ['input-form-example.css'],
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, ButtonOverviewExample]
})
export class InputFormExample { }


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */