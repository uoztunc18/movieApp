import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepo } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  //categoryRepo: CategoryRepo;

  selectedCategory: Category = null;
  showAll: boolean = true;

  constructor(private categoryService : CategoryService) { 
    //this.categoryRepo = new CategoryRepo();
    //this.categories = this.categoryRepo.getCategories();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  selectCategory(item? : Category): void {
    if (!item) {
      this.selectedCategory = null;
      this.showAll = true;
    } else {
      this.selectedCategory = item;
      this.showAll = false;
    }
  }
}