import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMatcher } from 'src/assets/shared/utils/utils';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  matcher = new ErrorMatcher();

  ngOnInit(): void {
  }

  get email(): FormControl {
    return this.orderForm.get('email') as FormControl;
  }
}
