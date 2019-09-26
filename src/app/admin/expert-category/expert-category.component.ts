import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expert-category',
  templateUrl: './expert-category.component.html',
  styleUrls: ['./expert-category.component.scss']
})
export class ExpertCategoryComponent implements OnInit {
 // movies: any[];
 category$;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category$ = this.categoryService.getAll();
    console.log(this.category$);
    // .subscribe(items => {
      // items.map(item => console.log(item));
  }

}
