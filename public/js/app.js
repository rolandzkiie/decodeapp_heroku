"use strict"

class App {
	constructor(){
		this.watchmovie = [
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

	render(html,component){
			component.innerHTML +=html;
		}

	reRender(html,component){
		component.innerHTML =html;
	}

}

class Component extends App {
	constructor(){

		super();
	}

	landingPage(){
		let html = `
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
					<li id="navlists">
						<a class="page-scroll" href="#" onclick="component.indexpage()">Home</a>
					</li>
					<li id="navlist1">
						<a class="page-scroll" href="#" onclick="component.watchpage()">Movies</a>
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
	</nav>



	<div id="indexpage" class="intro-section">
	   <div id="banner" data-video="images/banner">
			<div class="inner">
				<header>
				<br>
				<br>
				<h1>Movie Marathon Online</h1>
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


	<div id="watch" class="about-section">
		 <div id="main">
					<div class="inner">
						<div class="thumbnails">

						`;

						for(let i=0;i<this.watchmovie.length;i++){
						html += `

							<div class="box">
								<a href="${this.watchmovie[i].video}" class="image fit"><img src="${this.watchmovie[i].img}" alt="" /></a>
								<div class="inner">
									<h3>${this.watchmovie[i].title}</h3>
									<p>Year: ${this.watchmovie[i].year}</p>
									<a href="${this.watchmovie[i].video}" class="button fit" data-poptrox="youtube,1000x600">Watch</a>
								</div>
							</div>
						`;
						}

			 html += `
						</div>
					</div>
			</div>
	</div>


	<section id="addpage">
		<div id="banner1">
			<h1> This is Add Page </h1>
		</div>
	</section>


	<section id="signup">
		<div id="banner1">
			<h1> This is Sign Up Page </h1>
		</div>
	</section>


	<section id="login">
		<div class="login-pages">
			<div class="forms">
				<form class="register-forms">
					<input type="text" placeholder="name"/>
					<input type="password" placeholder="password"/>
					<input type="text" placeholder="email address"/>
					<button>create</button>
					<p class="messages">Already registered? <a href="#">Sign In</a></p>
				</form>
				<form class="login-forms">
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password"/>
					<button>login</button>
					<p class="messages">Not registered? <a href="#" onclick="component.signup()">Create an account</a></p>
				</form>
			</div>
		</div>
	</section>



	<footer id="footer">
		<div class="inner">
			<h2>Movie Marathon Online</h2>
			<p>This is just an Object Oriented Programming project. A free movie hosting website | Your suggestion is highly appreciated.</p>
					<ul class="icons">
						<li><a href="https://twitter.com/Rolandzkiie" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="https://www.facebook.com/Rolandzkiie24/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="ins" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
					</ul>
			<p class="copyright">&copy; AMA Computer College Davao. Design by: <a href="https://facebook.com/rolandzkiie">Rolandz Gardose Buta Jr.</a></p>
		</div>
	</footer>


			  `;
		this.reRender(`${html}`,document.getElementById("app"));
	}

indexpage(){
	$('#indexpage').show();
	$('#watch').hide();
	$('#addpage').hide();
	$('#signup').hide();
	$('#login').hide();

  }
  watchpage(){
	$('#indexpage').hide();
	$('#watch').show();
	$('#addpage').hide();
	$('#signup').hie();
	$('#login').hide();

  }
  addpage(){
	$('#indexpage').hide();
	$('#watch').hide();
	$('#addpage').show();
	$('#signup').hide();
	$('#login').hide();

  }

   signup(){
	$('#indexpage').hide();
	$('#watch').hide();
	$('#addpage').hide();
	$('#signup').show();
	$('#login').hide();
  }

   login(){
	$('#indexpage').hide();
	$('#watch').hide();
	$('#addpage').hide();
	$('#signup').hide();
	$('#login').show();

  }
}

let component = new Component();
component.landingPage();