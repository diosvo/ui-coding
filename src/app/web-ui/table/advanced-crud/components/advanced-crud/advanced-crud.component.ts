import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-advanced-crud',
  templateUrl: './advanced-crud.component.html',
  styleUrls: ['./advanced-crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedCrudComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<any>();

  form: FormGroup = this.fb.group({
    rows: this.fb.array([])
  });

  @ViewChildren('focusInput') focusInput: QueryList<ElementRef>;
  destroy$ = new Subscription();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }

  addNewRow(): void {
    this.rows.push(this.initRow());
    this.dataSource = new MatTableDataSource(this.rows.controls);
  }

  editItem(idx: number): void {
    this.rows.at(idx).get('isEditable').patchValue(false);
  }

  deleteItem(idx: number): void {
    this.rows.removeAt(idx);
    this.dataSource = new MatTableDataSource(this.rows.controls);
  }

  saveChanges(idx: number): void {
    this.rows.at(idx).get('isEditable').patchValue(true);
  }

  cancelChanges(idx: number): void {
    this.rows.at(idx).get('isEditable').patchValue(true);
  }

  rowValid(idx: number): boolean {
    return this.rows.at(idx).get('categoryId').value
      && this.rows.at(idx).get('categoryName').value ? false : true;
  }

  focus(): void {
    /***
    * @description: another way to set autofocus without using OnPush
    * this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.focusInput.last.nativeElement.focus();
          this.cdr.detectChanges();
        });
      });
     */

    this.destroy$ = this.focusInput.changes.subscribe(() => {
      this.focusInput.last.nativeElement.focus();
    });
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

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
