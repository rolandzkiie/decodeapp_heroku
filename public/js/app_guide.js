/*"use strict";


class App{
	constructor(){
		this.media = [
			{
				"img" : "http://lorempixel.com/580/250/nature/1",
				"alignment" : "center-align",
				"caption": "asdfasdfasdfa",
				"slogan": "asdfasdasdfasdfasdfasdfasdf"
			},
			{
				"img" : "http://lorempixel.com/580/250/nature/2",
				"alignment" : "left-align",
				"caption": "asdfasdfasdfa",
				"slogan": "asdfasdasdfasdfasdfasdfasdf"
			},
			{
				"img" : "http://lorempixel.com/580/250/nature/3",
				"alignment" : "right-align",
				"caption": "asdfasdfasdfa",
				"slogan": "asdfasdasdfasdfasdfasdfasdf"
			},
			{
				"img" : "http://lorempixel.com/580/250/nature/4",
				"alignment" : "center-align",
				"caption": "asdfasdfasdfa",
				"slogan": "asdfasdasdfasdfasdfasdfasdf"
			}
		];
	}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){

		super();
	}

	ukayLayout(){
		let html = `
			 <nav>
			    <div class="nav-wrapper blue darken-4">
			      <a href="#" class="brand-logo yellow-text ">UKAY</a>
			      <ul id="nav-mobile" class="right hide-on-med-and-down">
			        <li><a href="#">Items</a></li>
			        <li><a href="#">Cart</a></li>
			        <li><a href="#">New</a></li>
			      </ul>
			    </div>
			  </nav>


			  <div class="slider">
			    <ul class="slides">

			    `;

			   for(let i=0;i<this.media.length;i++){
					html += `
					      <li>
					        <img src="${this.media[i].img}"> <!-- random image -->
					        <div class="caption ${this.media[i].alignment}">
					          <h3>${this.media[i].caption}</h3>
					          <h5 class="light grey-text text-lighten-3">${this.media[i].slogan}</h5>
					        </div>
					      </li>
					    
					 `;
					}


			 html += `

					</ul>
				  </div>
				<footer class="page-footer blue darken-4">		          
		          <div class="footer-copyright">
		            <div class="container">
		            © 2014 Copyright Text
		            <a class="grey-text text-lighten-4 right" href="#!">Another decode app</a>
		            </div>
		          </div>
		        </footer>			  
		`;

		this.reRender(`
			${html}
			`,document.getElementById("app"));
	}
}

let component = new Component();
component.ukayLayout();

*/

/*

"use strict";

class App{
	constructor(){
		this.recipe = [
			{
				"id": 1,
				"name": "Utan",
				"description": "Utan or Utan Bisaya is a vegetable soup dish popular in the Visayan region, commonly it consists different vegetables like malunggay leaves, okra, squash, taro, vine spinach (alugbati), eggplants, snake beans (sitaw), ginger and tomatoes cooked together with either pork, fish or shrimps. Similar to laswa and the only difference it the vegetable used, are the ones commonly found in the Visayas.",
				"photo": "img/utan.jpg",
				"ingredients":[
					{
						"qty": "1 large bunch",
						"name": "spinach"
					},
					{
						"qty": "1/2 small",
						"name": "butternut squash"
					},
					{
						"qty": "200 g",
						"name": "sliced okra"
					},
					{
						"qty": "250 g",
						"name": "fatty minced pork"
					},
					{
						"qty": "6 cups",
						"name": "chicken stock"
					},
					{
						"qty": "1",
						"name": "finely chopped onion"
					},
					{
						"qty": "4 cloves",
						"name": "minced garlic"
					},
					{
						"qty": "1 tbsp",
						"name": "minced ginger"
					},
					{
						"qty": "1",
						"name": "fish sauce"
					},
					{
						"qty": "1",
						"name": "freshly ground black pepper"
					},
					{
						"qty": "1",
						"name": "oil"
					}
				],
				"preparationtime": "15 minutes",
				"cookingtime": "20 minutes",
				"yields": "4-5 servings",
				"procedure": [
					"In a pot add oil then sauté garlic, ginger and onions.",
					"Add the pork mince and cook until brown in colour.",
					"Add the chicken stock then bring to a boil, simmer for 5 minutes.",
					"Add the squash cook for 3 minutes.",
					"Add the okra and cook for 3 more minutes.",
					"Season with fish sauce and freshly ground black pepper add the spinach then simmer for one more minute, turn heat off then cover. Let spinach cook in residual heat for 2 minutes then serve."
				]
			},
			{
				"id": 2,
				"name": "Tolang Bisaya",
				"description": "One of the things and considered as very special food in Iligan City that is also known for fresh seafood capital in the region. Most fish sold in our local market here in Pila came from Laguna Lake, bangus (milkfish), tilapia, dalag (mudfish), hito and kanduli (catfish).",
				"photo": "img/tolangbisaya.jpg",
				"ingredients":[
					{
						"qty": "1/2 kilo",
						"name": "Pampano or any white-meat fish"
					},
					{
						"qty": "1",
						"name": "quartered bell pepper"
					},
					{
						"qty": "1 stalk",
						"name": "Salay (lemongrass)"
					},
					{
						"qty": "3",
						"name": "quartered tomatoes"
					},
					{
						"qty": "2",
						"name": "sliced in half onions"
					},
					{
						"qty": "1 bunch",
						"name": "leeks"
					},
					{
						"qty": "3 cups",
						"name": "water"
					}
				],
				"preparationtime": "15 minutes",
				"cookingtime": "20 minutes",
				"yields": "4-5 servings",
				"procedure": [
					"Place all ingredients in a casserole except fish.",
					"Bring to a boil.",
					"Add the fish and boil again until the fish is cooked.",
					"Serve hot."
				]
			},
			{
				"id": 3,
				"name": "Pork Humba Bisaya",
				"description": "Humba (HOOM-BAA) is a Filipino dish similar to adobo, and popular in central part of the Philippines, particularly among the Visayan speaking people. The method of cooking is similar to adobo (chicken or lean pork) by simmering the meat in a marinade of soy sauce, vinegar, brown sugar, bay leaf, and peppercorns. The difference is the type of meat used which is pork belly, which has skin, fat, and lean portions.",
				"photo": "img/porkhumbabisaya.jpg",
				"ingredients":[
					{
						"qty": "2 lbs.",
						"name": "cut into 1 and 1/2-inch squares of pork belly"
					},
					{
						"qty": "1 pack",
						"name": "dried banana blossoms"
					},
					{
						"qty": "1/4 cup",
						"name": "salted black beans"
					},
					{
						"qty": "1/2 cup",
						"name": "soy sauce"
					},
					{
						"qty": "1/4 cup",
						"name": "distilled white vinegar"
					},
					{
						"qty": "1/2 cup",
						"name": "brown sugar"
					},
					{
						"qty": "6",
						"name": "minced garlic cloves"
					},
					{
						"qty": "2",
						"name": "dry bay leaves"
					},
					{
						"qty": "1 teaspoon",
						"name": "whole peppercorns"
					},
					{
						"qty": "4 cups",
						"name": "water"
					}
				],
				"preparationtime": "10 minutes",
				"cookingtime": "1 hours, 30 minutes",
				"yields": "6-8 servings",
				"procedure": [
					"Rinse meat thoroughly under cold running water and pat dry with paper towels.",
					"In a non-stick skillet over medium heat, arrange pork belly slices in one layer and pan-fry until most of the oil comes out. If you use a smaller pan, you may do this in two batches.",
					"Once the meat turns brown and most of the fat has rendered, remove from heat and transfer to a cooking pot.",
					"Add the rest of the ingredients into the pot and bring to a boil. Lower heat to medium low and simmer for an hour until pork has become tender and sauce has thickened.",
					"Serve with rice."
				]
			},
			{
				"id": 4,
				"name": "Manok Adobo Sa Gata",
				"description": "Masarap ang “native na manok” sa lutuing ito.  Masarap lalo na kapag ‘sinagkotsa ito sa tanglad” bago ito lagyan ng gata at luyang dilaw.",
				"photo": "img/manokadobosagata.jpg",
				"ingredients":[
					{
						"qty": "1 kilo",
						"name": "manok adobo cut"
					},
					{
						"qty": "1",
						"name": "Sibuyas katamtaman ang laki"
					},
					{
						"qty": "3",
						"name": "butil ng Bawang"
					},
					{
						"qty": "1 piece",
						"name": "Laurel"
					},
					{
						"qty": "1 piece",
						"name": "Tanglad"
					},
					{
						"qty": "1",
						"name": "Luyang dilaw"
					},
					{
						"qty": "1",
						"name": "Luya"
					},
					{
						"qty": "1",
						"name": "Sili pangsigang o pamaksiw"
					},
					{
						"qty": "1",
						"name": "Sili Labuyo"
					},
					{
						"qty": "1",
						"name": "Sili pokingan o bell pepper"
					},
					{
						"qty": "1",
						"name": "Paminta durog"
					},
					{
						"qty": "1/2 cup",
						"name": "Vinegar"
					},
					{
						"qty": "1 tablespoon",
						"name": "Patis"
					},
					{
						"qty": "1",
						"name": "Magic Sarap"
					},
					{
						"qty": "1",
						"name": "Gata"
					}
				],
				"preparationtime": "10 minutes",
				"cookingtime": "1 hours, 30 minutes",
				"yields": "6-8 servings",
				"procedure": [
					"Igisa ang sibuyas, bawang at luya papulahin kunti",
					"Ilagay ang manok, patis paminta at laurel, hayaan ng 5 minuto na kumukulo at ilagay na rin ang tanglad at suka.  Takpan.",
					"Kapag tapos na itong pakuluan ng 5 minuto, ilagay ang pangalawang gata kasabay ang luyang dilaw na hiniwa-hiwa ng maliliit.  Hayaang kumulo ng mga  10 minuto.",
					"Puwede nang isabay ang papaya na hiniwa ng slanting o ayon sa gusto mong sukat",
					"Kapag luto na, ilagay na ang panghuling gata, kasabay ng siling pamaksiw at siling labuyo (tantyahin lamang ang gusto mong anghang).",
					"Timplahin ng asin at magic sarap, ilagay ang bell pepper o siling pokingan.",
					"Pakuluan ng dahan dahan hanggang sa ito ay lumapot.  Mas masarap kapag lumabas ang sariling mantika ng niyog ng kunti.",
					"Ihain na mainit kasabay ng mainit din na kanin."
				]
			}			
		];
		this.state = [
			{
				"bind": {
					"procedures":[],
					"ingredients_qty":[],
					"ingredients_name":[]
				}
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createRecipe(){
		let id = document.getElementById('recipe_id');
		let name = document.getElementById('recipe_name');
		let description = document.getElementById('recipe_description');
		let photo = document.getElementById('recipe_photo');
		let preparationtime = document.getElementById('recipe_preparationtime');
		let cookingtime = document.getElementById('recipe_cookingtime');
		let yields = document.getElementById('recipe_yields');
		
		let dummyIngredients = [];
		for(let i=0;i<this.state[0].bind.ingredients_qty.length;i++){
			dummyIngredients.push({
				"qty" : this.state[0].bind.ingredients_qty[i],
				"name" : this.state[0].bind.ingredients_name[i]
			});
		}
		let ingredients = dummyIngredients;

		let dummyProcedure = [];
		for(let i=0;i<this.state[0].bind.procedures.length;i++){
			dummyProcedure.push(this.state[0].bind.procedures[i]);
		}
		let procedure = dummyProcedure;

		let recipe = {			
			"id": id.value,
			"name": name.value,
			"description": description.value,
			"photo": photo.value,
			"ingredients":ingredients,
			"preparationtime": preparationtime.value,
			"cookingtime": cookingtime.value,
			"yields": yields.value,
			"procedure": procedure
		};


		this.recipe.push(recipe);

		//Clear Fields
		this.state[0].bind.procedures = this.state[0].bind.ingredients_qty = this.state[0].bind.ingredients_name = [];
		id.value = name.value = description.value = photo.value = preparationtime.value = cookingtime.value = yields.value = ''; 
	}	

	deleteRecipe(key){
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.recipe.splice(i,1);
				break;
			}
		}		
		this.recipeLayout();
	}

	findRecipeByID(id){
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	findRecipeByName(name){
		let objects = [];
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}

	bindRecipeNewProcedures(val,id){
		let bind = this.state[0].bind.procedures;
		bind[id] = val;
		// console.log(bind);
	}	

	bindRecipeNewIngredients(val,id,obj){
		let bind = null;
		if(obj === "qty"){
			bind = this.state[0].bind.ingredients_qty;
		}
		else if(obj === "name"){
			bind = this.state[0].bind.ingredients_name;
		}
		bind[id] = val;
		// console.log(bind);
	}	
}

class Component extends App{
	constructor(){
		
		super();
	}

	recipeLayout(){
		let html = `
			<div id="recipeLayout" class="container">
				<nav>
					<div class="nav-wrapper">
						<a href="#" onclick="component.recipeLayout()" class="brand-logo">&nbsp;&nbsp;SUD-AN</a>
						<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
						<ul class="right hide-on-med-and-down">
							<li><a href="#" onclick="component.recipeList()"><i class="material-icons left">assignment</i>Recipes</a></li>
							<li><a href="#" onclick="component.recipeCreate()"><i class="material-icons left">note_add</i>Create</a></li>
						</ul>
						<ul class="side-nav" id="mobile-demo">
							<li><a href="#" onclick="component.recipeList()"><i class="material-icons left">assignment</i>Recipes</a></li>
							<li><a href="#" onclick="component.recipeCreate()"><i class="material-icons left">note_add</i>Create</a></li>
						</ul>
					</div>
				</nav>

				<div id="recipeRecent"></div>
				<div id="recipeView"></div>
				<div id="recipeList"></div>
				<div id="recipeCreate"></div>

				<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Recipe App</h5>
								<p class="grey-text text-lighten-4">Another decode demo app for students in web dev't and oop. A bisaya inspired recipe app that promotes native food and culture.</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Links</h5>
								<ul>
									<li>
										<a class="grey-text text-lighten-3" href="#" onclick="component.recipeLayout()">
											<!-- <i class="material-icons left">dashboard</i> -->
											Home</a></li>
											<li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeList()">
												<!-- <i class="material-icons left">assignment</i> -->
												Recipes</a></li>
												<li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeCreate()">
													<!-- <i class="material-icons left">dashboard</i> -->
													Create</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="footer-copyright">
										<div class="container">
											© 2016-2017 Copyright Text
											<img class="right" src="img/decode.png" style="margin-top:6px;" />

										</div>
									</div>
								</footer>	

							</div>
		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.recipeRecent();		
	}

	recipeRecent(){
		
		let html = `
			<h5 class="center-align">Recent Recipes</h5>
			<div class="row">
		`;

		let r = this.recipe;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 3)break;
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.render(`		
			${html}
			`,document.getElementById("recipeRecent"));
	}

	recipeView(id){
		let r = this.findRecipeByID(id);

		let html = `
			<h5 class="center-align">${r.name}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${r.description}</p>
							</div>
							<div class="card-action small">								
								<span onclick="component.deleteRecipe(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.recipeLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>					
					</div>				
				</div>			
			</div>
		`;

		html += `
			<div class="row">
				<table class="striped">
					<thead>
						<tr>
							<th>Preparation Time</th>
							<th>Cooking Time</th>
							<th>Yields</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${r.preparationtime}</td>
							<td>${r.cookingtime}</td>
							<td>${r.yields}</td>
						</tr>					
					</tbody>
				</table>
			</div>
		`;

		html += `
			<div class="row">				
				<div class="col s6 m6">
					<h6>Ingredients</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.ingredients.length;i++){
			let ri = r.ingredients[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">star</i>
							<span class="title">${ri.qty}</span>
							<p>${ri.name}<br>
								
							</p>
							
						</li>
			`;
		}

		html += `				
					</ul>
				</div>
				<div class="col s6 m6">
					<h6>Procedure</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.procedure.length;i++){
			let rp = r.procedure[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">done</i>
							<span class="title">Step ${i+1}</span>
							<p>${rp}<br>
								
							</p>
							
						</li>
			`;
		}	

		html += `
					</ul>
				</div>			
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("recipeView"));
		$('#recipeView').show();
		$('#recipeRecent').hide();
		$('#recipeList').hide();
		$('#recipeCreate').hide();
	}

	recipeList(){
		let html = `
			<br/>
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">				
							<input onkeyup="component.recipeListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="recipeListItems">
		`;
		let r = this.recipe;
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("recipeList"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();
		$('#recipeCreate').hide();		
	}

	recipeListItems(name){
		let html = ``;
		let r = this.findRecipeByName(name);
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("recipeListItems"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();	
		$('#recipeCreate').hide();
	}

	recipeCreate(){
		let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align">Create New Recipe</h5>
				<button onclick="component.createRecipe()" class="btn waves-effect waves-light">Save</button>
					<div class="row">
						<div class="input-field col s6">
							<input disabled value="${this.recipe.length+1}" id="recipe_id" type="text" class="validate">
						</div>
						<div class="input-field col s6">
							<input id="recipe_name" type="text" class="validate">
							<label for="recipe_name">NAME</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="recipe_description" type="text" class="validate">
							<label for="recipe_description">DESCRIPTION</label>
						</div>
						<div class="input-field col s6">
							<input id="recipe_photo" type="text" class="validate">
							<label for="recipe_photo">PHOTO</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s4">
							<input id="recipe_preparationtime" type="text" class="validate">
							<label for="recipe_preparationtime">PREPARATION TIME</label>
						</div>
						<div class="input-field col s4">
							<input id="recipe_cookingtime" type="text" class="validate">
							<label for="recipe_cookingtime">COOKING TIME</label>
						</div>
						<div class="input-field col s4">
							<input id="recipe_yields" type="text" class="validate">
							<label for="recipe_yields">YIELDS</label>
						</div>
					</div>


					<div class="row">
						<div class="input-field col s6">
							<h6> INGREDIENTS</h6>
							<button onclick="component.recipeNewIngredients()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="recipeNewIngredients"></div>
						</div>
						<div class="input-field col s6">
							<h6>PROCEDURES</h6>
							<button onclick="component.recipeNewProcedures()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="recipeNewProcedures"></div>
						</div>
					</div>					
				</form>
			</div>			
		`;

		this.reRender(`
			${html}
			`,document.getElementById("recipeCreate"));
		$('#recipeCreate').show();
		$('#recipeList').hide();
		$('#recipeView').hide();
		$('#recipeRecent').hide();
		this.state[0].bind.procedures = [];		
		this.state[0].bind.ingredients_qty = [];		
		this.state[0].bind.ingredients_name = [];		
	}

	recipeNewProcedures(){
		let bind = this.state[0].bind.procedures;
		bind.push("");		
		
		let html = ``;
		for(let i=0;i<bind.length;i++){
			let decode_bind = `onkeyup="component.bindRecipeNewProcedures(this.value,${i})"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind} value="${bind[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("recipeNewProcedures"));
	}

	recipeNewIngredients(obj){
		let bind_qty = this.state[0].bind.ingredients_qty;
		let bind_name = this.state[0].bind.ingredients_name;
		bind_qty.push("");		
		bind_name.push("");		
		
		let html = ``;
		for(let i=0;i<bind_qty.length;i++){
			let decode_bind_qty = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'qty')"`;
			let decode_bind_name = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'name')"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_qty} value="${bind_qty[i]}" type="text" />					
					</div>
				</div>	
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_name} value="${bind_name[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("recipeNewIngredients"));
	}	


}

let component = new Component();
component.recipeLayout();
*/
//////////////////////////////////////

"use strict";

class App{
	constructor(){
		this.movies = [
			{
			"img" : "images/pic01.jpg",
			"video" : "https://youtu.be/TNAsEIoxncg",
			"title": "The Avengers",
			"year": "2011",
			"details":"images/details01.jpg",
		},

		{
			"img" : "images/pic02.jpg",
			"video" : "https://youtu.be/n_IB00IQrDs",
			"title": "Conjuring 2",
			"year": "2012",

		},

		{
			"img" : "images/pic03.jpg",
			"video" : "https://youtu.be/xnpY2BRF1ug",
			"title": "The Ant Man",
			"year": "2013",

		},

		{
			"img" : "images/pic04.jpg",
			"video" : "https://youtu.be/QqxibDFWBqw",
			"title": "Silent Dead",
			"year": "2014",

		},

		{
			"img" : "images/pic05.jpg",
			"video" : "https://youtu.be/PzPWsCPdHns",
			"title": "Avatar",
			"year": "2015",

		},

		{
			"img" : "images/pic06.jpg",
			"video" : "https://youtu.be/yEF61JXHyv0",
			"title": "Twilight",
			"year": "2016",

		}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createMovie(){
		let t = document.getElementById('newTitle');
		let y = document.getElementById('newYear');
		let d = document.getElementById('newDirector');
		let p = document.getElementById('newPoster');
		let a = document.getElementById('newActors');

		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
		this.movies.push(movie);

		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
		this.movieListInfo();
	}

	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();	
		this.showMovieList();	
	}

	updateMovie(key){
		let t = document.getElementById('updateTitle');
		let y = document.getElementById('updateYear');
		let d = document.getElementById('updateDirector');
		let a = document.getElementById('updateActors');

		let m = this.movies[key];
		let movie = {"id":m.id,"Title":t.value,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

		this.movies[key] = movie;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();
		this.showMovieList();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	

	searchMovie(value=""){
		let objects = [];
		let r = this.movies;
		for(let i=0;i<r.length;i++){
			// console.log("r:",r[i].Title.toUpperCase().indexOf(title.toUpperCase()));
			let expr1 = (r[i].Title.toUpperCase().indexOf(value.toUpperCase()) > -1);
			let expr2 = (r[i].Year.toUpperCase().indexOf(value.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr1 || expr2){
				objects.push(r[i]);
			}
		}
		return objects;		
	}
}

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		this.render(
			`	      
			<div class="header clearfix">
				<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
					<div class="container">
						<div class="navbar-header page-scroll">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<a class="navbar-brand page-scroll" href="#indexpage" onclick="component.indexpage()">Marathon</a>
						</div>

						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse navbar-ex1-collapse">
							<ul class="nav navbar-nav">
								<!-- Hidden li included to remove active class from about link when scrolled up past about section -->
								<li class="hidden">
									<a class="page-scroll" href="#indexpage" onclick="component.indexpage()"></a>
								</li>
								<li id="navlist1">
									<a class="page-scroll" href="#" onclick="component.watchpage()">Watch Movie</a>
								</li>
								<li id="navlist2">
									<a class="page-scroll" href="#" onclick="component.addpage()">Add Movie</a>
								</li>
								<li id="navlist3">
									<a style="color: #00FF00;" href="#" onclick="component.signup()">Sign Up</a>
								</li>
								<li id="navlist4">
									<a style="color:blue;" href="#" onclick="component.login()">Login</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>>
			</div>


          <div id="landingpage">
          	<div id="banner" data-video="images/banner">
          		<div class="inner">
          			<header>
          				<h1>Movie Marathon Online</h1>
          				<br>
          				<br>
          				<br>
          				<br>
          				<p><strong style="font-size: 50px; color: red; font-family: 'Minion Cyrillic Bold', arial;">Hi, </strong> &nbspExplore and watch your favorite movie for free.</p>
          			</header>
          			<br>
          			<br>
          			<br>
          			<br>
          			<br>
          			<br>
          			<a href="#watch" class="more">Learn More</a>
          		</div>
          	</div>
          </div>
                  

		
				
          <div id="createpage" class="row marketing">
          	<div class="col col-sm-12">
          		<div id="movieCreate"></div>						
          	</div>
          </div>

          <div id="readpage" class="row marketing">
          	<div class="col col-sm-12">
          		<h1>Movie List</h1>
          		<table id="movieList" class="table">
          			<thead>
          				<tr>
          					<th>Title</th>
          					<th>Year</th>
          					<th>Action</th>
          				</tr>
          			</thead>
          			<div class="form-group">
          				<label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
          				<div class="input-group">
          					<div class="input-group-addon">
          						<span class="fa fa-search"></span>
          					</div>
          					<input oninput="component.movieListInfo(this.value)" type="text" class="form-control" placeholder="Search">
          				</div>
          			</div>
          			<tbody id="movieListInfo"></tbody>
          		</table>
          	</div>
          </div>

          <div id="updatedeletepage" class="row marketing">
          	<div id="movieDetails"></div>
          </div>
				
          <footer class="footer">
            <p>&copy; decode 2016</p>
          </footer>

			`
			,document.getElementById('app'));
		this.movieListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}

	movieListInfo(filter){
		// console.log(filter);
		let html = "";
		// let m = this.movies;
		let m = this.searchMovie(filter);
		for(let i=0;i<m.length;i++){	
			html += `
				<tr>
					<td>${m[i].Title}</td>
					<td>${m[i].Year}</td>
					<td><button class="btn btn-primary"  onclick="component.movieDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('movieListInfo'));
	}

	movieDetails(key){
		this.reRender(
			`
				<h1>Movie Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="movieDetailsInfo">
				        <h4 class="media-heading">${this.movies[key].Title}</h4>
				        Year: ${this.movies[key].Year}<br/>
						Director: ${this.movies[key].Director}<br/>
						Actors: ${this.movies[key].Actors}<br/>
						<button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showMovieList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('movieDetails'));
			this.showUpdateDelete();
	}

	movieCreate(){
		this.render(
			`
				<h1>Movie Create</h1>
				Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
				Year: <input class="form-control" id="newYear" type="" placeholder="Enter Title" /><br/>
				Director: <input class="form-control" id="newDirector" type="" placeholder="Enter Director" /><br/>
				Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			`,document.getElementById('movieCreate'));
	}

	movieUpdate(key){
		this.reRender(
			`
				<div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>ID</span>
		        	</span>
		        	<input readonly class="form-control" type="text" value="${this.movies[key].id}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Title</span>
		        	</span>
		        	<input class="form-control" id="updateTitle" type="text" value="${this.movies[key].Title}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Year</span>
		        	</span>
		        	<input class="form-control" id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Director</span>
		        	</span>
		        	<input class="form-control" id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
		        </div>	
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Actors</span>
		        	</span>
		        	<input class="form-control" id="updateActors" type="text" value="${this.movies[key].Actors}" /><br/>
		        </div>	
				<br/>
				<button class="btn btn-success btn-block" onclick="component.updateMovie(${key})">Save</button>
			`,document.getElementById('movieDetailsInfo'));
	}


	
}

let component = new Component();
component.movieList();
component.movieCreate();