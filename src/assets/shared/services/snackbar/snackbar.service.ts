import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private config: MatSnackBarConfig = {
    duration: 1000000000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    panelClass: []
  };

  constructor(
    public snackbar: MatSnackBar,
    private zone: NgZone) { }

  success(message: string): void {
    this.show(message, ['snackbar-success']);
  }

  private show(message: string, panelClasses: Array<string>): void {
    this.zone.run(() => {
      this.snackbar.openFromComponent(SnackbarComponent, {
        ...this.config,
        data: message,
        panelClass: panelClasses
      });
    });
  }
}
