import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-advanced-crud',
  templateUrl: './advanced-crud.component.html',
  styleUrls: ['./advanced-crud.component.scss']
})
export class AdvancedCrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<any>();

  form: FormGroup = this.fb.group({
    rows: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  addNewRow(): void {
    this.rows.push(this.initRow());
    this.dataSource = new MatTableDataSource(this.rows.controls);
    console.log(this.dataSource);
    
  }

  editItem(idx: number): void {
    this.rows.at(idx).get('isEditable').patchValue(false);
  }

  deleteItem(idx: number): void {
    this.rows.removeAt(idx);
  }

  saveChanges(idx: number): void {
    this.rows.at(idx).get('isEditable').patchValue(true);
  }

  cancelChanges(idx: number): void {
    this.rows.at(idx).get('isEditable').patchValue(true);
  }

  private get rows(): FormArray {
    return this.form.get('rows') as FormArray;
  }

  private initRow(): FormGroup {
    return this.fb.group({
      categoryId: [null, Validators.required],
      categoryName: [null, Validators.required],
      isEditable: [false]
    });
  }
}
