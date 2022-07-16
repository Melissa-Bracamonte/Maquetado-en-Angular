// import { CollectionViewer, DataSource } from '@angular/cdk/collections';
// import { BehaviorSubject, range, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

// export class ItemsDataSource extends DataSource<string | undefined> {
//   private itemsInMemory = Array.from<string>({ length: 0 });
//   private itemChanges$: BehaviorSubject<string[]>;
//   private destroy$: Subject<boolean> = new Subject();
//   private pageSize = 10;
//   private lastLoadedPage = 0;
//   private source = ['./app.component.html'];

//   constructor() {
//     super();
//     this.itemChanges$ = new BehaviorSubject(this.itemsInMemory);
//     this.getInformation();
//   }

//   connect(collectionViewer: CollectionViewer) {
//     collectionViewer.viewChange
//       .pipe(takeUntil(this.destroy$))
//       .subscribe((range) => {
//         const currentPage = Math.floor(range.end / this.pageSize);
//         if (currentPage > this.lastLoadedPage) {
//           this.lastLoadedPage = currentPage;
//           this.getInformation();
//         }
//       });
//     return this.itemChanges$;
//   }
//   getInformation() {
//     for (let i = 0; i < this.pageSize; i++) {
//       this.itemsInMemory = [
//         ...this.itemsInMemory,
//         this.source[Math.floor(Math.random() * this.source.length) + 1],
//       ];
//     }
//     this.itemChanges$.next(this.itemsInMemory);
//   }
//   disconnect() {
//     this.destroy$.next(true);
//     this.destroy$.complete();
//   }
// }
