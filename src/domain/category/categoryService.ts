import {categoryApi} from "@/api/categoryApi";
import {Category} from "@/domain/category/category";

export const categoryService = {
    categories: new Map([
        ['GO', []],
        ['BLIN', []],
        ['PROJECT', []]
    ]),

    getMainCategory() {
        return Array.from(this.categories.keys());
    },

    getSubCategory(category: string) {
        return this.categories.get(category) || [];
    },

    async getCategories() {
        const response = await categoryApi.getCategories();
        response.forEach((category) => {
            const existingCategories = this.categories.get(category.type) || [];
            this.categories.set(category.type, [
                ...existingCategories,
                new Category(category.id, category.title),
            ]);
        });


        return this.categories;
    }
}
