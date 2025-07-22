import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'app/shared/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
})
export class AppLoaderComponent {
  private loadingService = inject(LoadingService);
  isLoading = this.loadingService.isLoading;
}
