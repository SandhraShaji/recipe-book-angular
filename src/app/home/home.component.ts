import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../services/recipe-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allRecipes:any[]=[];
  searchText: String=""

  constructor(private api:RecipeApiService){}
  ngOnInit(): void {
    this.viewRecipes()
  }
  viewRecipes(){
    this.api.getRecipes().subscribe({
      next:(res:any)=>{
        console.log(res.recipes);
        this.allRecipes=res.recipes;
      },
      error:(err:any)=>{
        console.log(err.message);
      }
    })
  }
}
