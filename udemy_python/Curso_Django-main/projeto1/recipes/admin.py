from django.contrib import admin

from .models import Category, Recipe


class CateroryAdmin(admin.ModelAdmin):
    ...


admin.site.register(Category, CateroryAdmin)


class RecipeAdmin(admin.ModelAdmin):
    ...


admin.site.register(Recipe, RecipeAdmin)
