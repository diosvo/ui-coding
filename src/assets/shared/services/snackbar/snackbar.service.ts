import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { MessageType } from '../../models/alert';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private type: MessageType;

  private config: MatSnackBarConfig = {
    duration: 1000000000,
    verticalPosition: 'top',
    horizontalPosition: 'center'
  };

  constructor(
    private snackbar: MatSnackBar,
    private zone: NgZone
  ) { }

  success(message: string): void {
    this.type = 'success';
    return this.show(message, this.getStyles(this.type));
  }

  info(message: string): void {
    this.type = 'info';
    return this.show(message, this.getStyles(this.type));
  }

  warning(message: string): void {
    this.type = 'warning';
    return this.show(message, this.getStyles(this.type));
  }

  error(message: string): void {
    this.type = 'error';
    return this.show(message, this.getStyles(this.type));
  }

  private show(message: string, panelClasses: Array<string>): void {
    this.zone.run(() => {
      const snackbar = this.snackbar.openFromComponent(SnackbarComponent, {
        ...this.config,
        data: message,
        panelClass: panelClasses
      });
      snackbar.onAction().subscribe({
        complete: () => snackbar.dismiss()
      });
    });
  }

  private getStyles(type: MessageType): Array<string> {
    return [`bg-${type}`, `bd-${type}`];
  }
}
