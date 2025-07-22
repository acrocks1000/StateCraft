// shared/services/loading.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private requestCount = signal(0);
  readonly isLoading = signal(false);

  show(): void {
    this.requestCount.update((count) => {
      const updated = count + 1;
      this.isLoading.set(updated > 0);
      return updated;
    });
  }

  hide(): void {
    this.requestCount.update((count) => {
      const updated = Math.max(0, count - 1);
      this.isLoading.set(updated > 0);
      return updated;
    });
  }
}
