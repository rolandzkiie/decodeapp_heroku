"use strict";

class App{
	constructor(){
		this.movies = [
		{
			"img" : "images/pic01.jpg",
			"video" : "https://youtu.be/TNAsEIoxncg",
			"title": "The Avengers",
			"year": "April 25, 2012 (Philippines)",
			"actors":"Joss Whedon",
			"details":"Live to Rise",
		},

		{
			"img" : "images/pic02.jpg",
			"video" : "https://youtu.be/n_IB00IQrDs",
			"title": "Conjuring 2",
			"year": "June 9, 2016 (Philippines)",
			"actors":"James Wan",
			"details":"The Conjuring Film Series",


		},

		{
			"img" : "images/pic03.jpg",
			"video" : "https://youtu.be/xnpY2BRF1ug",
			"title": "The Ant Man",
			"year": "June 29, 2015 (USA)",
			"actors":"Peyton Reed",
			"details":"Ant-Man Film Series",


		},
		{
			"img" : "images/pic04.jpg",
			"video" : "https://youtu.be/xnpY2BRF1ug",
			"title": "Dead Silence",
			"year": "March 16, 2007 (USA)",
			"actors":"James Wan",
			"details":"Charlie Clouser",
		},
		{
			"img" : "images/pic05.jpg",
			"video" : "https://youtu.be/xnpY2BRF1ug",
			"title": "Avatar",
			"year": "December 17, 2009 (Philippines)",
			"actors":"James Cameron",
			"details":"Avatar Series",
		},
		{

			"img" : "images/pic06.jpg",
			"video" : "https://youtu.be/xnpY2BRF1ug",
			"title": "Twilight",
			"year": "November 26, 2008 (Philippines)",
			"actors":"Catherine Hardwicke",
			"details":"Decode",
		}
		];
	}
    
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
    
    movieList(){
		let html = "";
		let m = this.movies;
		for(let i=0;i<m.length;i++){
			html += `
			<div class="box">
				<a href="${m[i].video}" class="image fit"><img src="${m[i].img}" alt="" /></a>
				<div class="inner">
					<h3>${m[i].title}</h3>
					<p>Release date:<span style="color:yellow;"> ${m[i].year}</span></p>
					<a class="button fit" onclick="component.movieDetails(${i})">Details</a>
					<a href="${m[i].video}" class="button fit" data-poptrox="youtube,1500x900">Watch</a>
				</div>
			</div>
			`;
		}
		this.reRender(html,document.getElementById('movieList'));
	}
    
    movieDetails(key){
		this.reRender(
			`
                <div id="containersz">
                    <div id="row">
                        <div id="movieDetailsInfo">
                            <div class="imagess" id="adjustDetails">
                                <div class="thumbnailzz"><img class="imgz" src="${this.movies[key].img}"></div>
                            </div>
                            <div class="buttonss" id="adjustDetails1">
                                <h1 class="slim">${this.movies[key].title}</h1>
                                <button class="btn btn-primary btn-lg outline" onclick="component.movieUpdate(${key})">Update</button>
                                <button class="btn btn-primary btn-lg outline" onclick="component.deleteMovie(${key.id})">Delete</button>
                                <button class="btn btn-primary btn-lg outline" onclick="component.showMoviePage()">Back</button>
                            </div>
                            <div class="listss" id="adjust100">
                                <ul class="groupsz"><br>
                                  <li class="itemz"><span class="headername">Release date:  </span>${this.movies[key].year}</li><br>
                                  <li class="itemz"><span class="headername">Director:  </span>${this.movies[key].actors}</li><br>
                                  <li class="itemz"><span class="headername">Featured song:  </span>${this.movies[key].details}</li>                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>				    	
			`,document.getElementById('movieDetails'));
			this.showUpdateDelete();
	}
    
    movieCreate(){
		this.render(
			`
			<center>
			<form class="sform-style-4">
			<label>
			<span>Movie Title:</span><input id="newTitle" type="text" placeholder="Enter Movie Title"/>
			</label>
			<label>
			<span>Release date:</span><input id="newYear" type="text" placeholder="Enter Movie Year"/>
			</label>
			<label>
			<span>Movie Image URL:</span><input id="newImage" type="text" placeholder="Enter Movie Image URL"/>
			</label>
			<label>
			<span>Video URL:</span><input id="newVideo" type="text" placeholder="Enter Video Link"/>
			</label>
			<label>
			<span>Director:</span><input id="newActors" type="text" placeholder="Enter Movie Actors"/>
			</label>
			<label>
			<span>Featured song:</span><input id="newDetails" type="text" placeholder="Enter Movie Details"/>
			</label>
				<button class="btn btn-success" onclick="component.createMovie()">Create</button>
                <button class="btn btn-primary" onclick="component.showMoviePage()">Back to Movie List</button>
			</form>
			</center>
			`,document.getElementById('movieCreate'));
	}
    
    createMovie(){
		let i = document.getElementById('newImage');
		let t = document.getElementById('newTitle');
		let c = document.getElementById('newVideo');
		let a = document.getElementById('newYear');
		let r = document.getElementById('newActors');		
		let d = document.getElementById('newDetails');
		let mov = {"img":i.value,"title":t.value,"video":c.value,"year":a.value,"actors":r.value, "details":d.value};
		this.movies.push(mov);

		i.value = t.value = c.value = a.value =r.value = d.value = ''; //Clear Fields
		this.movieList();
	}
    
    updateMovie(key){
		let i = document.getElementById('updateImage');
		let t = document.getElementById('updateTitle');
		let c = document.getElementById('updateVideo');
		let d = document.getElementById('updateYear');
		let r = document.getElementById('updateActors');
		let a = document.getElementById('updateDetails');

		let m = this.movies[key];
		let mov = {"img":i.value,"title":t.value,"video":c.value,"year":a.value,"actors":r.value, "details":d.value};

		this.movies[key] = mov;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieList();
		this.showMoviePage();
	}
    
    movieUpdate(key){
		this.reRender(
			`
			<div class="background2">
			    <div class="containers2">
			        <div id="containers2">
			            <div class="listss2">
			            <center><h2 class="title2">${this.movies[key].title}</h2></center>
			                <ul class="groups2">
			                    <p>Image URL: <p><center><input class="itemz2" id="updateImage" type="text" value="${this.movies[key].img}" /></center>
			                    <p>Title: </p><center><input class="itemz2" id="updateTitle" type="text" value="${this.movies[key].title}" /></center>
			                    <p>Video URL: </p><center><input class="itemz2" id="updateVideo" type="text" value="${this.movies[key].video}" /></center>
			                    <p>Release date: </p><center><input class="itemz2" id="updateYear" type="text" value="${this.movies[key].year}" /></center>
			                    <p>Director: </p><center><input class="itemz2" id="updateActors" type="text" value="${this.movies[key].actors}" /></center>
			                    <p>Featured song: </p><center><input class="itemz2" id="updateDetails" type="text" value="${this.movies[key].details}" /></center>
			                    <button class="btn2 btn-primary2 btn-lg2" onclick="component.updateMovie(${key})">Save</button></center>            
			                </ul>
			            </center>
			        </div>                
			    </div>
			</div>
			`,document.getElementById('movieDetailsInfo'));
	}


	deleteMovie(key){
		let a= key;
		let r = this.movies;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.movies.splice(a, 1);
				break;
			}
		}		
		this.movieList();
		this.showMoviePage();
	}
    
	searchMovieList(){
		let searchnisya = document.getElementById("searchnisya");
		let movieList =document.getElementById("movieList");
		let s=this.movies;
		let html = ``;
		for(let a=0;a<s.length;a++){
			if(s[a].title.toLowerCase().includes(searchnisya.value)||s[a].title.toUpperCase().includes(searchnisya.value)||s[a].year.toUpperCase().includes(searchnisya.value)||s[a].year.toUpperCase().includes(searchnisya.value)){
		html += `
				<div class="box">
					<a href="${s[a].video}" class="image fit"><img src="${s[a].img}" alt="" /></a>
					<div class="inner">
						<h3>${s[a].title}</h3>
						<p>${s[a].year}</p>
						<a class="button fit" onclick="component.movieDetails(${a})">Details</a>
						<span class="button fit" onclick="openNav()">Watch</span>
					</div>
				</div>
				`;
			}
		}
		movieList.innerHTML = html;
	}


	watchMovie(key){
		this.reRender(
			`

			`,document.getElementById('watchMovie')
		);
	}
}

class Component extends App{
	constructor(){

		super();
	}

	landingPage(){
		let html = `
		<!-- START NAVIGATION -->
		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header page-scroll">
					<a class="navbar-brand page-scroll" href="#" onclick="component.indexpage()">M A R A T H O N</a>
				</div>
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav">
						<li id="navlists">
							<a class="page-scroll" href="#" onclick="component.showIndexPage()">Home</a>
						</li>
						<li id="navlist1">
							<a class="page-scroll" href="#" onclick="component.showMoviePage()">Movies</a>
						</li>
						<li id="navlist2">
							<a class="page-scroll" href="#" onclick="component.showMovieCreate()">Add Movie</a>
						</li>
						<li id="navlist3">
							<a class="page-scroll" style="color: #00FF00;" href="#popupz1"><h6>Sign Up</h6></a>
						</li>
						<div id="popupz1" class="overlayz">
							<div class="popupz">
								<h2>Sign Up</h2>
								<a class="closez" href="#">&times;</a>
								<div class="contentz">
									Full Name: <input type="text" placeholder="name"/>
									Email: <input type="text" placeholder="email"/>
									Password: <input type="password" placeholder="password"/>
									Confirm Password: <input type="password" placeholder="password"/>
									<br>
									<right><a class="buttonz" href="#indexpage">Submit</a></right>
									<br>
									<br>
								</div>
							</div>
						</div>

						<li id="navlist4">
							<a class="page-scroll" style="color:blue;" href="#popupzz1"><h6>Login</h6></a>
						</li>
						<div id="popupzz1" class="overlayz">
							<div class="popupz">
								<h2>Login</h2>
								<a class="closez" href="#">&times;</a>
								<div class="contentz">
									<form class="login-forms">
										<input type="text" placeholder="username"/>
										<br>
										<input type="password" placeholder="password"/>
										<br>
										<right><a class="buttonz" href="#indexpage">Submit</a></right>
										<br>
										<br>
										<p class="messages">Not registered? <a href="#indexpage">Create an account</a></p>
									</form>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</nav>
		<!-- END NAVIGATION -->


		<!-- START HEADER -->
		<section id="indexpage" class="intro-section">
			<div id="banner" data-video="images/banner">
				<div class="inner">
					<header>
						<br>
						<br>
						<br>
						<br>
						<br>
						<h1>Movie Marathon Online</h1>
						<p><strong style="font-size: 50px; color: red; font-family: 'Minion Cyrillic Bold', arial;">Hi, </strong> &nbspExplore and watch your favorite movie for free.</p>
					</header>
					<br>
					<br>
					<br>
					<br>
					<br>
					<a href="#nextpage" class="more">Learn More</a>
				</div>
			</div>
			<div id="nextpage">
				<img src="images/nextpage1.jpg" alt="Next Page" style="width:95%;height:400px; margin-top:15px">
			</div>

			<div id="nextpage1">
				<img src="images/nextpage2.jpg" alt="Next Page" style="width:95%;height:400px; margin-top:15px">
			</div>

			<div id="nextpage2">
				<img src="images/nextpage3.jpg" alt="Next Page" style="width:95%;height:400px; margin-top:15px">
			</div>
		</section>
		<!-- END HEADER -->


		<!-- START MOVIE PAGE -->
		<section id="moviepage" class="about-section">
			<div class="main">
			<br>
				<input type="search" class="search_1" placeholder="Search Movie Title, Year" id="searchnisya" />
				<button type="submit" class="submit_1" value="search" onclick="component.searchMovieList()">Search</button>
				<br>
				<br>
				<div id="movieList" class="thumbnails"></div>
			</div>
		</section>
		<!-- END MOVIE PAGE -->


		<!-- START UPDATE-DELETE PAGE -->
		<section id="updatedeletepage" class="background1">
    		<div class="containersz" id="adjust5">
        		<div class="row">
            		<div id="movieDetails"></div>
            	</div>
            </div>
		</section>
		<!-- END UPDATE-DELETE PAGE -->

		<!-- START WATCH POPUP -->
			<div id="myNav" class="overlay1">
			  <a href="javascript:void(0)" class="closebtn1" onclick="closeNav()">&times;</a>
			  <div id="watchMovie" class="overlay-content1">
			  	<object data="" width="955" height="505"></object>
			  </div>
			</div>
		<!-- END WATCH POPUP -->


		<!-- START CREATE PAGE -->
		<section id="addpage">
			<div id="movieCreate"><br><br><br><br><br><br><br></div>
		</section>
		<!-- END CREATE PAGE -->

		<!-- START FOOTER PAGE -->
		<footer id="footer">
			<div class="inner">
				<h2>Movie Marathon Online</h2>
				<p>This is just an Object Oriented Programming project. A free movie hosting website | Your suggestion is highly appreciated.</p>
				<ul class="icons">
					<li><a href="https://twitter.com/Rolandzkiie"  target="tab" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="https://www.facebook.com/Rolandzkiie24/" target="tab" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
					<li><a href="https://www.instagram.com/landzkiie/" class="icon fa-instagram" target="tab"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon fa-envelope" target="tab" ><span class="label">Email</span></a></li>
				</ul>
				<p class="copyright">&copy; AMA Computer College Davao. Design by: <a href="https://facebook.com/rolandzkiie">Rolandz Gardose Buta Jr.</a></p>
			</div>
		</footer>
		<!-- END FOOTER PAGE-->

		`;
		this.reRender(`${html}`,document.getElementById("app"));	
		this.movieList();
	}


	showIndexPage(){
		$('#indexpage').show();
		$('#moviepage').hide();
        $('#updatedeletepage').hide();
        $('#addpage').hide();
	}

	showMoviePage(){
		$('#indexpage').hide();
		$('#moviepage').show();
        $('#updatedeletepage').hide();
        $('#addpage').hide();
	}
    
    showUpdateDelete(){
		$('#indexpage').hide();
		$('#moviepage').hide();
        $('#updatedeletepage').show();
        $('#addpage').hide();
	}
    
    showMovieCreate(){
        $('#indexpage').hide();
		$('#moviepage').hide();
        $('#updatedeletepage').hide();
        $('#addpage').show();
        
    }

}

let component = new Component();
component.landingPage();
component.movieCreate();