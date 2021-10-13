import { Category } from "./category";

export class CategoryRepo {

    private categories: Category[];

    constructor() {}

    getCategories(): Category[] {
        return this.categories;
    }
}