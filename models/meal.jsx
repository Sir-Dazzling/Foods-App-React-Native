class Meal
{
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps,isGlutenFree,isLactoseFree, isVegetarian, isVegan )
    {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isLactoseFree = isLactoseFree;
        this.isVegetarian = isVegetarian;
        this.isVegan = isVegan;
    }
}

export default Meal;