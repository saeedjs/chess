var turn = true;
var echeck = true;
var kcheck = true;
var checkh = true;
var ccheck = true;
var scheck = true;
var rotat = true;
var rotatt = false;
const black = ["soldier","castle","horse","elephant","minister","king"];
const white = ["soldier2","castle2","horse2","elephant2","minister2","king2"];
const styl = "style";
const bgcolorb = "background-color:#9f9eca;border: 1px solid blue;";
const bgcolorr = "background-color:#f1af86;border:1px solid red;";
const bgin = "background-image: none;";
$(function () {
	var check = true;
	var check3 = true;
	var check4 = true;
	var i,ih,ik,ie,is;
	$(`#rotat`).click(function() {
		if (rotat)
		{
			rotatt = true;
			rotat = false;
			$("#rotat").attr("src","css/images/icon/rotating2.png");
		}
		else
		{
			rotatt = false;
			rotat = true;
			$("#rotat").attr("src","css/images/icon/rotating.png");
		}
	});
	$("td").click(function() {
		style();
		var switc = true;
		var doo = true;
		var id = $(this).attr("id");
		///console.log($(this).attr("data-kish"));
		var clas = $(this).attr("class");
		id = parseInt(id);
		background(id);
		var data = $(this).attr("data-check");
		if (data == "none")
		checkk();
		switch(data)
		{
			case "s":
				$(`#${is}`).attr(styl,bgin);
				$(`#${is}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/black/soldier.png);background-size: 65px 65px;");
				$(this).attr("class",black[0]);
				turnf();
				checkk();
				style();
				kishh(is,"s");
				soldier(id,true);
				scheck = true;
				rotation();
				switc = false;
			break;
			case "s2":
				$(`#${is}`).attr(styl,bgin);
				$(`#${is}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/white/soldier.png);background-size: 65px 65px;");
				$(this).attr("class",white[0]);
				turnf();
				checkk();
				style();
				kishh(is,"s2");
				soldier(id,false);
				scheck = true;
				rotation();
				switc = false;
			break;
			case "h":
				$(`#${ih}`).attr(styl,bgin);
				$(`#${ih}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/black/horse.png);background-size: 65px 65px;");
				$(this).attr("class",black[2]);
				turnf();
				checkk();
				style();
				kishh(ih,"h");
				hours2(id,false);
				switc = false;
			break;
			case "h2":
				$(`#${ih}`).attr(styl,bgin);
				$(`#${ih}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/white/horse.png);background-size: 65px 65px;");
				$(this).attr("class",white[2]);
				turnf();
				checkk();
				style();
				kishh(ih,"h");
				hours2(id,false);
				switc = false;
			break;
			case "e":
				$(`#${ie}`).attr(styl,bgin);
				$(`#${ie}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/black/elephant.png);background-size: 65px 65px;");
				$(this).attr("class",black[3]);
				echeck = true;
				kishh(ie,"e",black[3]);
				elephant(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;
			case "e2":
				$(`#${ie}`).attr(styl,bgin);
				$(`#${ie}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/white/elephant.png);background-size: 65px 65px;");
				$(this).attr("class",white[3]);
				echeck = true;
				kishh(ie,"e",white[3]);
				elephant(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;
			case "k":
				$(`#${ik}`).attr(styl,bgin);
				$(`#${ik}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/black/king.png);background-size: 65px 65px;");
				$(this).attr("class",black[5]);
				kcheck = true;
				kishh(ik,"k",black[5]);
				king(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;
			case "k2":
				$(`#${ik}`).attr(styl,bgin);
				$(`#${ik}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/white/king2.png);background-size: 65px 65px;");
				$(this).attr("class",white[5]);
				kcheck = true;
				kishh(ik,"k",black[5]);
				king(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;
			case "c":
				$(`#${ic}`).attr(styl,bgin);
				$(`#${ic}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/black/castle.png);background-size: 65px 65px;");
				$(this).attr("class",black[1]);
				ccheck = true;
				kishh(ic,"c");
				castle(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;
			case "c2":
				$(`#${ic}`).attr(styl,bgin);
				$(`#${ic}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/white/castle2.png);background-size: 65px 65px;");
				$(this).attr("class",white[1]);
				ccheck = true;
				kishh(ic,"c");
				castle(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;	
			case "m":
				$(`#${ic}`).attr(styl,bgin);
				$(`#${ic}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/black/minister.png);background-size: 65px 65px;");
				$(this).attr("class",black[4]);
				ccheck = true;
				echeck = true;
				kishh(ie,"e",black[3]);
				elephant(id,false);
				kishh(ic,"c");
				castle(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;
			case "m2":
				$(`#${ic}`).attr(styl,bgin);
				$(`#${ic}`).attr("class","none");
				$(this).attr(styl,"background-image: url(css/images/character/white/minister2.png);background-size: 65px 65px;");
				$(this).attr("class",white[4]);
				ccheck = true;
				echeck = true;
				kishh(ie,"e",white[3]);
				elephant(id,false);
				kishh(ic,"c");
				castle(id,false);
				checkk();
				style();
				turnf();
				switc = false;
			break;							
			default:
				style();
				doo  = true;
			break;
		}
		if (turn)
		{
			if (clas != black[0] &&  clas != black[1] && clas != black[2] && clas != black[5] && clas != black[4] && clas != black[3])
				doo = false;
		}
		else
		{
			if (clas != white[0] &&  clas != white[1] && clas != white[2] && clas != white[5] && clas != white[4] && clas != white[3])
				doo = false;
		}
		console.log(turn);
		if (doo && switc)
		{
			if (clas == "none" )
			{
		 		echeck = true;
		 		checkh = true;
		 		kcheck = true;
		 		ccheck = true;
		 		scheck = true;
			}
			console.log(switc)
			if (clas == black[0] || clas == white[0])
			{
				is = id;
				soldiers(id,true);
			}
			if (clas == black[2] || clas == white[2])
			{
				ih = id;
				hours2(id,true);
			}
			if (clas == black[4] || clas == white[4])
			{
				ic = id;
				ie = id;
				castle(id,true);
				elephant(id,true);
			}
			if (clas == black[3] || clas == white[3])
			{
				ie = id;
				elephant(id,true);
			}
			if (clas == black[5] || clas == white[5])
			{
				ik = id;
				king(id,true);
				idking(true);
			}
			if (clas == black[1] || clas == white[1])
			{
				ic = id;
				castle(id,true);
			}
		}
	});
 });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function rotation(){
	if (rotatt)
	{
		if (!turn)
		{
			$(`table`).css("transform", "rotate(180deg)");
			$(`table`).css("transition", "transform 2s");
			// $(`td`).css("transform", "rotate(180deg)");
		}
		else
		{
			$(`table`).css("transform", "rotate(0deg)");
			$(`table`).css("transition", "transform 2s");
			//$(`td`).css("transform", "rotate(0deg)");
		}
	}
}
function turnf() {
	if (turn)
		turn = false;
	else
		turn = true;
};
function checkk() {
	for(var i=1; i < 65; i++)
		$(`#${i}`).attr("data-check","none");
};
function background(id) {
	let color;
	for (let i=1; i < 65; i++)
		{
		 	if (i == 1 || i == 3 || i == 5 || i == 7 || i == 10 || i == 12 || i == 14 || i == 16 || i == 17 || i == 19 || i == 21 || i == 23 || i == 26 || i == 28 || i == 30 || i == 32 || i == 33 || i == 35 || i == 37 || i == 39 || i == 42 || i == 44 || i == 46 || i == 48 || i == 49 || i == 51 || i == 53 || i == 55 || i == 58 || i == 60 || i == 62 || i == 64)
		 		color = "white";
		 	else
		 		color = "#48ff50";
		 	$(`#${i}`).attr("bgcolor",color);
		}
};
function style() {
 	for (var i=1; i < 65; i++)
		$(`#${i}`).attr(styl,"none;");
	rotation();
};
function kishh(id,data,classe) {
	 switch (data)
	 {
	 	case "h":
	 		if ($(`#${id+10}`).attr("data-kish") == "kish" || $(`#${id+10}`).attr("data-kish") == "kish2")
				$(`#${id+10}`).attr("data-kish","none");
			if ($(`#${id-10}`).attr("data-kish") == "kish" || $(`#${id-10}`).attr("data-kish") == "kish2")
				$(`#${id-10}`).attr("data-kish","none");
			if ($(`#${id+17}`).attr("data-kish") == "kish" || $(`#${id+17}`).attr("data-kish") == "kish2")
				$(`#${id+17}`).attr("data-kish","none");
			if ($(`#${id-17}`).attr("data-kish") == "kish" || $(`#${id-17}`).attr("data-kish") == "kish2")
				$(`#${id-17}`).attr("data-kish","none");
			if ($(`#${id+15}`).attr("data-kish") == "kish" || $(`#${id+15}`).attr("data-kish") == "kish2")
				$(`#${id+15}`).attr("data-kish","none");
			if ($(`#${id-15}`).attr("data-kish") == "kish" || $(`#${id-15}`).attr("data-kish") == "kish2")
				$(`#${id-15}`).attr("data-kish","none");
			if ($(`#${id+6}`).attr("data-kish") == "kish" || $(`#${id+6}`).attr("data-kish") == "kish2")
				$(`#${id+6}`).attr("data-kish","none");
			if ($(`#${id-6}`).attr("data-kish") == "kish" || $(`#${id-6}`).attr("data-kish") == "kish2")
				$(`#${id-6}`).attr("data-kish","none");
		break;
		case "e":
			var classe;
			var s,c,e,h,k,m,A,B,C,D,E,F,G,H,kish;
			classe2 = $(`#${id}`).attr("class");
			if (classe2 == black[3] || classe2 == black[4])
			{
				s = white[0];
				c = white[1];
				e = white[3];
				h = white[2];
				k = white[5];
				m = white[4];
				A = 8;
				B = 16;
				C = 24;
				D = 32;
				E = 40;
				F = 48;
				G = 56;
				H = 64;
				e = "e";
				kish = black[3];
			}
			else
			{
				s = black[0];
				c = black[1];
				e = black[3];
				h = black[2];
				k = black[5];
				m = black[4];
				A = 1;
				B = 9;
				C = 17;
				D = 25;
				E = 33;
				F = 41;
				G = 49;
				H = 57;
				e = "e2";
				kish = white[3];
			}
			if (classe2 == black[4])
				e = "m";
			else if (classe2 == white[4])
				e = "m2";
			var i=9;
			classe = $(`#${id+i}`).attr("class");
			while (classe == "none")
			{
				if (id+i == 1 || id+i == 9 || id+i == 17 || id+i == 25 || id+i == 33 || id+i == 41 || id+i == 49 || id+i == 57)
					break;
				else
				{
					$(`#${id+i}`).attr("data-kish","none");
					i+=9;
					classe = $(`#${id+i}`).attr("class");
				}
				
			}
			if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
			{
				if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
					$(`#${id+i}`).attr("data-kish","none");
			}
				var i=7;
			classe = $(`#${id+i}`).attr("class");
			while (classe == "none")
			{
				if (id+i == 8 || id+i == 16 || id+i == 24 || id+i == 32 || id+i == 40 || id+i == 48 || id+i == 56 || id+i == 64)
					break;
				else
				{
					$(`#${id+i}`).attr("data-kish","none");
					i+=7;
					classe = $(`#${id+i}`).attr("class");
				}
				
			}
			if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
			{
					if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
						$(`#${id+i}`).attr("data-kish","none");
				}
				var i=-7;	
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 1 || id+i == 9 || id+i == 17 || id+i == 25 || id+i == 33 || id+i == 41 || id+i == 49 || id+i == 57)
						break;
					else
					{
						$(`#${id+i}`).attr("data-kish","none");
						i-=7;
						classe = $(`#${id+i}`).attr("class");
					}
					
				}
				if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
				{
					if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
						$(`#${id+i}`).attr("data-kish","none");
				}

				var i=-9;
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 8 || id+i == 16 || id+i == 24 || id+i == 32 || id+i == 40 || id+i == 48 || id+i == 56 || id+i == 64)
						break;
					else
					{
						$(`#${id+i}`).attr("data-kish","none");
						i-=9;
						classe = $(`#${id+i}`).attr("class");
					}
					
			}
			if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
			{
				if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
					$(`#${id+i}`).attr("data-kish","none");
			}
		break;
		case "c":
			var castle = 65;
			var i2 = castle - id;
			ic = id;
			var i;
			var s,c,e,h,k,m,c2,kish;
			var classe2 = $(`#${id}`).attr("class");
			if (classe2 == black[1] || classe2 == black[4])
			{
				s = white[0];
				c = white[1];
				e = white[3];
				h = white[2];
				k = white[5];
				m = white[4];
				c2 = "c";
				kish = black[1];
			}
			else
			{
				s = black[0];
				c = black[1];
				e = black[3];
				h = black[2];
				k = black[5];
				m = black[4];
				c2 = "c2";
				kish = white[1];
			}
			if (classe2 == black[4])
				c2 = "m";
			else if (classe2 == white[4])
				c2 = "m2";
			for (i=8; i < 65; i+=8)
			{
				var classc = $(`#${id+i}`).attr("class");             
				if (classc == "none")
					$(`#${id+i}`).attr("data-kish","none");
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id+i}`).attr("data-kish","none");
					break;
				}
				else
					break;
			}
			for (i=8; i < 65; i+=8)
			{
				var classc = $(`#${id-i}`).attr("class");
				if (classc == "none")
					$(`#${id-i}`).attr("data-kish","none");
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id-i}`).attr("data-kish","none");
					break;
				}
				else
					break;
			}
			var i=id,i2=1;
			var n;
			if (id > 0 && id < 9)
				n = 9;
			else if (id > 8 && id < 17)
				n = 17;
			else if (id > 16 && id < 25)
				n = 25;
			else if (id > 24 && id < 33)
				n = 33;
			else if (id > 32 && id < 41)
				n = 41;
			else if (id > 40 && id < 49)
				n = 49;
			else if (id > 48 && id < 57)
				n = 57;
			else if (id > 56 && id < 65)
				n = 65;
			var r = n - id;
			for(var i=1; i < r; i++)
			{
				var classc = $(`#${id+i}`).attr("class");
				if (classc == "none")
					$(`#${id+i}`).attr("data-kish","none");
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id+i}`).attr("data-kish","none");
					break;
				}
				else
					break;
			}
			i2 = -1;
			r = id - (n-8);
			for(i=1; i < r+1; i++)
			{
				var classc = $(`#${id-i}`).attr("class");
				if (classc == "none")
					$(`#${id-i}`).attr("data-kish","none");
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id-i}`).attr("data-kish","none");
					break;
				}
				else
					break;
			}
		break;
		case "k":
			if ($(`#${id+1}`).attr("data-kish") == black[5] || $(`#${id+1}`).attr("data-kish") == white[5])
				$(`#${id+1}`).attr("data-kish","none");
			if ($(`#${id+9}`).attr("data-kish") == black[5] || $(`#${id+9}`).attr("data-kish") == white[5])
				$(`#${id+9}`).attr("data-kish","none");
			if ($(`#${id-7}`).attr("data-kish") == black[5] || $(`#${id-7}`).attr("data-kish") == white[5])
				$(`#${id-7}`).attr("data-kish","none");
			if ($(`#${id+8}`).attr("data-kish") == black[5] || $(`#${id+8}`).attr("data-kish") == white[5])
				$(`#${id+8}`).attr("data-kish","none");
			if ($(`#${id-8}`).attr("data-kish") == black[5] || $(`#${id-8}`).attr("data-kish") == white[5])
				$(`#${id-8}`).attr("data-kish","none");
			if ($(`#${id-1}`).attr("data-kish") == black[5] || $(`#${id-1}`).attr("data-kish") == white[5])
				$(`#${id-1}`).attr("data-kish","none");
			if ($(`#${id-7}`).attr("data-kish") == black[5] || $(`#${id-7}`).attr("data-kish") == white[5])
				$(`#${id-7}`).attr("data-kish","none");
			if ($(`#${id-9}`).attr("data-kish") == black[5] || $(`#${id-9}`).attr("data-kish") == white[5])
				$(`#${id-9}`).attr("data-kish","none");
		break;
		case "s":
			if ($(`#${id+1}`).attr("data-kish") == black[0])
				$(`#${id+1}`).attr("data-kish","none");
		break;
		case "s2":
			if ($(`#${id-1}`).attr("data-kish") == white[0])
				$(`#${id-1}`).attr("data-kish","none");
		break;
	}
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function soldier(id,bool) 
{
	var end;
	if (id > 0 && id < 9)
		end = 9;
	else if (id > 8 && id < 17)
		end = 17;
	else if (id > 16 && id < 25)
		end = 25;
	else if (id > 24 && id < 33)
		end = 33;
	else if (id > 32 && id < 41)
		end = 41;
	else if (id > 40 && id < 49)
		end = 49;
	else if (id > 48 && id < 57)
		end = 57;
	else if (id > 56 && id < 65)
		end = 65;
	if (bool)
	{
		if (id+1 < end)
			$(`#${id+1}`).attr("data-kish",black[0]);
	}
	else
	{
		if (id-1 > end-9)
			$(`#${id-1}`).attr("data-kish",white[0]);
	}
}
function hours(data,b) {
	var s,c,h,e,k,m;
	if (b)
	{
		s = black[0];
		c = black[1];
		h = black[2];
		e = black[3];
		k = black[5];
		m = black[4];
	}
	else
	{
		s = white[0];
		c = white[1];
		h = white[2];
		e = white[3];
		k = white[5];
		m = white[4];
	}
	for (var i=1; i < 65; i++)
	{
		var a = $(`#${i}`).attr("class");
		if (a != "none")
			$(`#${i}`).attr(styl,"none");
		if ($(`#${i}`).attr("data-check") == data)
		{
			if (a == s || a == c || a == h || a == e || a == k || a == m)
				$(`#${i}`).attr(styl,bgcolorr);
		}
	} 
};
function idking(a) {
	var clas1,clas2,clas3,clas4,i;
	for (i=1; i < 66; i++)
	{
		clas = $(`#${i}`).attr("class");
		if (clas == black[5])
			break;
	}
	clas = $(`#${i+10}`).attr("class");
	if (clas == white[2])
	{
		$(`#${i}`).attr(styl,"background-color:red;");
		$(`#${i}`).attr("data-kish","kish");
	}
}
function soldiers(id,b)
{
	var c,n;
	var clas = $(`#${id}`).attr("class");
	var end;
	if (id > 0 && id < 9)
		{
			end = 9;
			start = 0;
		}
	else if (id > 8 && id < 17)
		{
			end = 17;
			start = 8;
		}
	else if (id > 16 && id < 25)
		{
			end = 25;
			start = 16;
		}
	else if (id > 24 && id < 33)
		{
			end = 33;
			start = 24;
		}
	else if (id > 32 && id < 41)
		{
			end = 41;
			start = 32;
		}
	else if (id > 40 && id < 49)
		{
			end = 49;
			start = 40;
		}
	else if (id > 48 && id < 57)
		{
			end = 57;
			start = 48;
		}
	else if (id > 56 && id < 65)
		{
			end = 65;
			start = 56;
		}
	if (scheck)
	{
		switch (clas)
		{
			case black[0]:
			if (id == 2 || id == 10 || id == 18 || id == 26 || id == 34 || id == 42 || id == 50 || id == 58)
				n = 3;
			else
				n = 2;
				for (var i=1; i < n; i++)
				{
					var c = $(`#${id+i}`).attr("class");
					if (c == "none" && id+i < end)
					{
						$(`#${id+i}`).attr(styl,bgcolorb);
						$(`#${id+i}`).attr("data-check","s");
					}
					else
						break;
				}
				var c9,c7;
				c9 = $(`#${id+9}`).attr("class");
				if (c9 == white[0] || c9 == white[1] || c9 == white[2] || c9 == white[3] || c9 == white[5] || c9 == white[4] && id+9 < end)
				{
					$(`#${id+9}`).attr(styl,bgcolorr);
					$(`#${id+9}`).attr("data-check","s");
				}
				c7 = $(`#${id-7}`).attr("class");
				if (c7 == white[0] || c7 == white[1] || c7 == white[2] || c7 == white[3] || c7 == white[5] || c7 == white[4] && id-7 < end)
				{
					$(`#${id-7}`).attr(styl,bgcolorr);
					$(`#${id-7}`).attr("data-check","s");
				}
			break;
			case white[0]:
				if (id == 7 || id == 15 || id == 23 || id == 31 || id == 39 || id == 47 || id == 55 || id == 63)
					n = 3;
				else
					n = 2;
				for (var i=1; i < n; i++)
				{
					var c = $(`#${id-i}`).attr("class");
					if (c == "none" && id-i > start)
					{
						$(`#${id-i}`).attr(styl,bgcolorb);
						$(`#${id-i}`).attr("data-check","s2");
					}
					else
						break;
				}
				var c9,c7;
				c9 = $(`#${id-9}`).attr("class");
				if (c9 == black[0] || c9 == black[1] || c9 == black[2] || c9 == black[3] || c9 == black[5] || c9 == black[4] && id-9 > start)
				{
					$(`#${id-9}`).attr(styl,bgcolorr);
					$(`#${id-9}`).attr("data-check","s2");
				}
				c7 = $(`#${id+7}`).attr("class");
				if (c7 == black[0] || c7 == black[1] || c7 == black[2] || c7 == black[3] || c7 == black[5] || c7 == black[4] && id+7 > start)
				{
					$(`#${id+7}`).attr(styl,bgcolorr);
					$(`#${id+7}`).attr("data-check","s2");
				}
			break;
		}
		scheck = false;
	}
	else
	{
		style();
		checkk();
		scheck = true;
	}
};
function castle(id,b) 
{
	var castle = 65;
	var i2 = castle - id;
	ic = id;
	var i;
	var s,c,e,h,k,m,c2,kish;
	var classe2 = $(`#${id}`).attr("class");
	if (classe2 == black[1] || classe2 == black[4])
	{
		s = white[0];
		c = white[1];
		e = white[3];
		h = white[2];
		k = white[5];
		m = white[4];
		c2 = "c";
		kish = black[1];
	}
	else
	{
		s = black[0];
		c = black[1];
		e = black[3];
		h = black[2];
		k = black[5];
		m = black[4];
		c2 = "c2";
		kish = white[1];
	}
	if (classe2 == black[4])
		c2 = "m";
	else if (classe2 == white[4])
		c2 = "m2";
	if (b)
	{
		if (ccheck)
		{
			for (i=8; i < 65; i+=8)
			{
				var classc = $(`#${id+i}`).attr("class");
				if (classc == "none")
				{
					$(`#${id+i}`).attr(styl,bgcolorb);
					$(`#${id+i}`).attr("data-check",c2);
				}
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id+i}`).attr(styl,bgcolorr);
					$(`#${id+i}`).attr("data-check",c2);
					break;
				}
				else
					break;
			}
			for (i=8; i < 65; i+=8)
			{
				var classc = $(`#${id-i}`).attr("class");
				if (classc == "none")
				{
					$(`#${id-i}`).attr(styl,bgcolorb);
					$(`#${id-i}`).attr("data-check",c2);
				}
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id-i}`).attr(styl,bgcolorr);
					$(`#${id-i}`).attr("data-check",c2);
					break;
				}
				else
					break;
			}
			var i=id,i2=1;
			var n;
			if (id > 0 && id < 9)
				n = 9;
			else if (id > 8 && id < 17)
				n = 17;
			else if (id > 16 && id < 25)
				n = 25;
			else if (id > 24 && id < 33)
				n = 33;
			else if (id > 32 && id < 41)
				n = 41;
			else if (id > 40 && id < 49)
				n = 49;
			else if (id > 48 && id < 57)
				n = 57;
			else if (id > 56 && id < 65)
				n = 65;
			var r = n - id;
			for(var i=1; i < r; i++)
			{
				var classc = $(`#${id+i}`).attr("class");
				if (classc == "none")
				{
					$(`#${id+i}`).attr(styl,bgcolorb);
					$(`#${id+i}`).attr("data-check",c2);
				}
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
							$(`#${id+i}`).attr(styl,bgcolorr);
					$(`#${id+i}`).attr("data-check",c2);
					break;
				}
				else
					break;
			}
			i2 = -1;
			r = id - (n-8);
			for(i=1; i < r+1; i++)
			{
				var classc = $(`#${id-i}`).attr("class");
				if (classc == "none")
				{
					$(`#${id-i}`).attr(styl,bgcolorb);
					$(`#${id-i}`).attr("data-check",c2);
				}
				else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
				{
					$(`#${id-i}`).attr(styl,bgcolorr);
					$(`#${id-i}`).attr("data-check",c2);
					break;
				}
				else
					break;
			}
			ccheck = false;
		}
		else
		{
			style();
			checkk();
			ccheck = true;
		}
	}
	else
	{
		for (i=8; i < 65; i+=8)
		{
			var classc = $(`#${id+i}`).attr("class");
			if (classc == "none")
				$(`#${id+i}`).attr("data-kish",kish);
			else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
			{
				$(`#${id+i}`).attr("data-kish",kish);
				break;
			}
			else
				break;
		}
		for (i=8; i < 65; i+=8)
		{
			var classc = $(`#${id-i}`).attr("class");
			if (classc == "none")
				$(`#${id-i}`).attr("data-kish",kish);
			else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
			{
				$(`#${id-i}`).attr("data-kish",kish);
				break;
			}
			else
				break;
		}
		var i=id,i2=1;
		var n;
		if (id > 0 && id < 9)
			n = 9;
		else if (id > 8 && id < 17)
			n = 17;
		else if (id > 16 && id < 25)
			n = 25;
		else if (id > 24 && id < 33)
			n = 33;
		else if (id > 32 && id < 41)
			n = 41;
		else if (id > 40 && id < 49)
			n = 49;
		else if (id > 48 && id < 57)
			n = 57;
		else if (id > 56 && id < 65)
			n = 65;
		var r = n - id;
		for(var i=1; i < r; i++)
		{
			var classc = $(`#${id+i}`).attr("class");
			if (classc == "none")
				$(`#${id+i}`).attr("data-kish",kish);
			else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
			{
				$(`#${id+i}`).attr("data-kish",kish);
				break;
			}
			else
				break;
		}
		i2 = -1;
		r = id - (n-8);
		for(i=1; i < r+1; i++)
		{
			var classc = $(`#${id-i}`).attr("class");
			if (classc == "none")
				$(`#${id-i}`).attr("data-kish",kish);
			else if (classc == s || classc == c || classc == h || classc == e || classc == k || classc == m) 
			{
				$(`#${id-i}`).attr("data-kish",kish);
				break;
			}
			else
				break;
		}
	}
};
function hours2(id,b) {
	if (b)
	{
		var h;
		var clas = $(`#${id}`).attr("class");
		if (clas == black[2])
		h = "h";
			else
		h = "h2";
		if (checkh == true)
		{
			if (id > 0 && id < 9)
			{
				if (id-1 > 0 || id-2 > 0)
				{
					if (id-1 > 0 && id-2 > 0)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
				 		$(`#${id-2-8}`).attr(styl,bgcolorb);
				 		$(`#${id-2+8}`).attr("data-check",`${h}`);
				 		$(`#${id-2-8}`).attr("data-check",`${h}`);
				 	}
				}
				if (id+1 < 9 || id+2 < 9)
				{
					if (id+1 < 9 && id+2 < 9)
					{
						$(`#${id+2+8}`).attr(styl,bgcolorb);
				 		$(`#${id+2-8}`).attr(styl,bgcolorb);
				 		$(`#${id+2+8}`).attr("data-check",`${h}`);
				 		$(`#${id+2-8}`).attr("data-check",`${h}`);
				 	}
				}
					
			}
			if (id > 8 && id < 17)
			{
				if (id-1 > 8 || id-2 > 8)
				{
					if (id-1 > 8 && id-2 > 8)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
				 		$(`#${id-2-8}`).attr(styl,bgcolorb);
				 		$(`#${id-2+8}`).attr("data-check",`${h}`);
				 		$(`#${id-2-8}`).attr("data-check",`${h}`);
				 	}
				}
				if (id+1 < 17 || id+2 < 17)
				{
					if (id+1 < 17 && id+2 < 17)
					{
						$(`#${id+2+8}`).attr(styl,bgcolorb);
				 		$(`#${id+2-8}`).attr(styl,bgcolorb);
				 		$(`#${id+2+8}`).attr("data-check",`${h}`);
				 		$(`#${id+2-8}`).attr("data-check",`${h}`);
				 	}
				}
					
			}
			if (id > 16 && id < 25)
			{
				if (id-1 > 16 || id-2 > 16)
				{
					if (id-1 > 16 && id-2 > 16)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
				 		$(`#${id-2-8}`).attr(styl,bgcolorb);
				 		$(`#${id-2+8}`).attr("data-check",`${h}`);
				 		$(`#${id-2-8}`).attr("data-check",`${h}`);
				 	}
				}
				if (id+1 < 25 || id+2 < 25)
				{
					if (id+1 < 25 && id+2 < 25)
					{
						$(`#${id+2+8}`).attr(styl,bgcolorb);
				 		$(`#${id+2-8}`).attr(styl,bgcolorb);
				 		$(`#${id+2+8}`).attr("data-check",`${h}`);
				 		$(`#${id+2-8}`).attr("data-check",`${h}`);
				 	}
				}
			}
			if (id > 24 && id < 33)
			{
				if (id-1 > 24 || id-2 > 24)
				{
					if (id-1 > 24 && id-2 > 24)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
				 		$(`#${id-2-8}`).attr(styl,bgcolorb);
				 		$(`#${id-2+8}`).attr("data-check",`${h}`);
				 		$(`#${id-2-8}`).attr("data-check",`${h}`);
				 	}
				}
					if (id+1 < 33 || id+2 < 33)
					{
						if (id+1 < 33 && id+2 < 33)
						{
							$(`#${id+2+8}`).attr(styl,bgcolorb);
					 		$(`#${id+2-8}`).attr(styl,bgcolorb);
					 		$(`#${id+2+8}`).attr("data-check",`${h}`);
					 		$(`#${id+2-8}`).attr("data-check",`${h}`);
					 	}
					}
			}
			if (id > 32 && id < 41)
			{
				if (id-1 > 32 || id-2 > 32)
				{
					if (id-1 > 32 && id-2 > 32)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
					 	$(`#${id-2-8}`).attr(styl,bgcolorb);
					 	$(`#${id-2+8}`).attr("data-check",`${h}`);
					 	$(`#${id-2-8}`).attr("data-check",`${h}`);
					 }

				}
				if (id+1 < 41 || id+2 < 41)
				{
					if (id+1 < 41 && id+2 < 41)
					{
						$(`#${id+2+8}`).attr(styl,bgcolorb);
					 	$(`#${id+2-8}`).attr(styl,bgcolorb);
					 	$(`#${id+2+8}`).attr("data-check",`${h}`);
					 	$(`#${id+2-8}`).attr("data-check",`${h}`);
					}
				}
			}
			if (id > 40 && id < 49)
			{
				if (id-1 > 40 || id-2 > 40)
				{
					if (id-1 > 40 && id-2 > 40)
					{	
						$(`#${id-2+8}`).attr(styl,bgcolorb);
					 	$(`#${id-2-8}`).attr(styl,bgcolorb);
					 	$(`#${id-2+8}`).attr("data-check",`${h}`);
					 	$(`#${id-2-8}`).attr("data-check",`${h}`);
					 }
				}
				if (id+1 < 49 || id+2 < 49)
				{
				 	if (id+1 < 49 && id+2 < 49)	
				 	{
				 		$(`#${id+2+8}`).attr(styl,bgcolorb);
					 	$(`#${id+2-8}`).attr(styl,bgcolorb);
					 	$(`#${id+2+8}`).attr("data-check",`${h}`);
					 	$(`#${id+2-8}`).attr("data-check",`${h}`);
				 	}
							
				}
			}
			if (id > 48 && id < 57)
			{
				if (id-1 > 48 || id-2 > 48)
				{
					if (id-1 > 48 && id-2 > 48)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
				 		$(`#${id-2-8}`).attr(styl,bgcolorb);
				 		$(`#${id-2+8}`).attr("data-check",`${h}`);
				 		$(`#${id-2-8}`).attr("data-check",`${h}`);
				 	}
				}
				if (id+1 < 56 || id+2 < 56)
				{
					if (id+1 < 56 && id+2 < 56)
					{
						$(`#${id+2+8}`).attr(styl,bgcolorb);
				 		$(`#${id+2-8}`).attr(styl,bgcolorb);
				 		$(`#${id+2+8}`).attr("data-check",`${h}`);
				 		$(`#${id+2-8}`).attr("data-check",`${h}`);
				 	}
				}
			}
			if (id > 56 && id < 65)
			{
				if (id-1 > 56 || id-2 > 56)
				{
					if (id-1 > 56 && id-2 > 56)
					{
						$(`#${id-2+8}`).attr(styl,bgcolorb);
				 		$(`#${id-2-8}`).attr(styl,bgcolorb);
				 		$(`#${id-2+8}`).attr("data-check",`${h}`);
				 		$(`#${id-2-8}`).attr("data-check",`${h}`);
				 	}
				}
				if (id+1 < 65 || id+2 < 65)
				{
					if (id+1 < 65 && id+2 < 65)
					{
						$(`#${id+2+8}`).attr(styl,bgcolorb);
				 		$(`#${id+2-8}`).attr(styl,bgcolorb);
				 		$(`#${id+2+8}`).attr("data-check",`${h}`);
				 		$(`#${id+2-8}`).attr("data-check",`${h}`);
				 	}
				}
			}
			var ch = true;
			for (var a=8; a < 65; a+=8)
			{
				if (clas == black[2])
				{
					if (id+16-1 == a)
						ch = false;
				}
				else
				{
					if (id-16-1 == a || id+16-1 == a)
						ch = false;
				}
			}
			if (ch)
			{
				$(`#${id+16-1}`).attr(styl,bgcolorb);
				$(`#${id+16-1}`).attr("data-check",`${h}`);
				$(`#${id-16-1}`).attr(styl,bgcolorb);
				$(`#${id-16-1}`).attr("data-check",`${h}`);
			}
			var ch = true;
			for (var a=1; a < 58; a+=8)
			{
				if (clas == black[2])
				{
					if (id+16+1 == a || id-16+1 == a)
						ch = false;
				}
				else
				{
					if (id-16+1 == a)
						ch = false;
				}
			}
			if (ch)
			{
				$(`#${id+16+1}`).attr(styl,bgcolorb);
				$(`#${id+16+1}`).attr("data-check",`${h}`);
				$(`#${id-16+1}`).attr(styl,bgcolorb);
				$(`#${id-16+1}`).attr("data-check",`${h}`);
			}
			if (clas == white[2])
				hours("h2",true);
			else
				hours("h",false);
			checkh = false;
		}
		else
		{
			style();
			checkk();
			checkh = true;
		}
	}
	else
	{
		var kish;
		if (clas == black[2])
	 		kish = "kish2"
	 	else
	 		kish = "kish"
		if (id > 0 && id < 9)
		{
			if (id-1 > 0 || id-2 > 0)
			{
				if (id-1 > 0 && id-2 > 0)
				{
			 		$(`#${id-2+8}`).attr("data-kish",kish);
			 		$(`#${id-2-8}`).attr("data-kish",kish);
			 	}
			}
			if (id+1 < 9 || id+2 < 9)
			{
				if (id+1 < 9 && id+2 < 9)
				{
			 		$(`#${id+2+8}`).attr("data-kish",kish);
			 		$(`#${id+2-8}`).attr("data-kish",kish);
			 	}
			}
				
		}
		if (id > 8 && id < 17)
		{
			if (id-1 > 8 || id-2 > 8)
			{
				if (id-1 > 8 && id-2 > 8)
				{
			 		$(`#${id-2+8}`).attr("data-kish",kish);
			 		$(`#${id-2-8}`).attr("data-kish",kish);
			 	}
			}
			if (id+1 < 17 || id+2 < 17)
			{
				if (id+1 < 17 && id+2 < 17)
				{
			 		$(`#${id+2+8}`).attr("data-kish",kish);
			 		$(`#${id+2-8}`).attr("data-kish",kish);
			 	}
			}
				
		}
		if (id > 16 && id < 25)
		{
			if (id-1 > 16 || id-2 > 16)
			{
				if (id-1 > 16 && id-2 > 16)
				{
			 		$(`#${id-2+8}`).attr("data-kish",kish);
			 		$(`#${id-2-8}`).attr("data-kish",kish);
			 	}
			}
			if (id+1 < 25 || id+2 < 25)
			{
				if (id+1 < 25 && id+2 < 25)
				{
			 		$(`#${id+2+8}`).attr("data-kish",kish);
			 		$(`#${id+2-8}`).attr("data-kish",kish);
			 	}
			}
		}
		if (id > 24 && id < 33)
		{
			if (id-1 > 24 || id-2 > 24)
			{
				if (id-1 > 24 && id-2 > 24)
				{
			 		$(`#${id-2+8}`).attr("data-kish",kish);
			 		$(`#${id-2-8}`).attr("data-kish",kish);
			 	}
			}
				if (id+1 < 33 || id+2 < 33)
				{
					if (id+1 < 33 && id+2 < 33)
					{
	
				 		$(`#${id+2+8}`).attr("data-kish",kish);
				 		$(`#${id+2-8}`).attr("data-kish",kish);
				 	}
				}
		}
		if (id > 32 && id < 41)
		{
			if (id-1 > 32 || id-2 > 32)
			{
				if (id-1 > 32 && id-2 > 32)
				{
				 	$(`#${id-2+8}`).attr("data-kish",kish);
				 	$(`#${id-2-8}`).attr("data-kish",kish);
				 }

			}
			if (id+1 < 41 || id+2 < 41)
			{
				if (id+1 < 41 && id+2 < 41)
				{
				 	$(`#${id+2+8}`).attr("data-kish",kish);
				 	$(`#${id+2-8}`).attr("data-kish",kish);
				}
			}
		}
		if (id > 40 && id < 49)
		{
			if (id-1 > 40 || id-2 > 40)
			{
				if (id-1 > 40 && id-2 > 40)
				{	
				 	$(`#${id-2+8}`).attr("data-kish",kish);
				 	$(`#${id-2-8}`).attr("data-kish",kish);
				 }
			}
			if (id+1 < 49 || id+2 < 49)
			{
			 	if (id+1 < 49 && id+2 < 49)	
			 	{
			 		//alert(id);
				 	$(`#${id+2+8}`).attr("data-kish",kish);
				 	$(`#${id+2-8}`).attr("data-kish",kish);
				 	//alert($(`#${id+2-8}`).attr("data-ckish"));
			 	}
						
			}
		}
		if (id > 48 && id < 57)
		{
			if (id-1 > 48 || id-2 > 48)
			{
				if (id-1 > 48 && id-2 > 48)
				{
			 		$(`#${id-2+8}`).attr("data-kish",kish);
			 		$(`#${id-2-8}`).attr("data-kish",kish);
			 	}
			}
			if (id+1 < 56 || id+2 < 56)
			{
				if (id+1 < 56 && id+2 < 56)
				{
			 		$(`#${id+2+8}`).attr("data-kish",kish);
			 		$(`#${id+2-8}`).attr("data-kish",kish);
			 	}
			}
		}
		if (id > 56 && id < 65)
		{
			if (id-1 > 56 || id-2 > 56)
			{
				if (id-1 > 56 && id-2 > 56)
				{
			 		$(`#${id-2+8}`).attr("data-kish",kish);
			 		$(`#${id-2-8}`).attr("data-kish",kish);
			 	}
			}
			if (id+1 < 65 || id+2 < 65)
			{
				if (id+1 < 65 && id+2 < 65)
				{
			 		$(`#${id+2+8}`).attr("data-kish",kish);
			 		$(`#${id+2-8}`).attr("data-kish",kish);
			 	}
			}
		}
		var ch2 = true;
		for (var a=8; a < 65; a+=8)
		{
			if (clas == black[2])
			{
				if (id+16-1 == a)
					ch2 = false;
			}
			else
			{
				if (id-16-1 == a || id+16-1 == a)
					ch2 = false;
			}
		}
		if (ch2)
		{
			$(`#${id+16-1}`).attr("data-kish",kish);
			$(`#${id-16-1}`).attr("data-kish",kish);
		}
		var ch2 = true;
		for (var a=1; a < 58; a+=8)
		{
			if (clas == black[2])
			{
				if (id+16+1 == a || id-16+1 == a)
					ch2 = false;
			}
			else
			{
				if (id-16+1 == a)
					ch2 = false;
			}
		}
		if (ch2)
		{
			$(`#${id+16+1}`).attr("data-kish",kish);
			$(`#${id-16+1}`).attr("data-kish",kish);
		}
	}
};
function elephant(id,b) {
	var classe;
	var s,c,e,h,k,m,A,B,C,D,E,F,G,H,a,b,c,d,e,f,g,h,kish;
	classe2 = $(`#${id}`).attr("class");
	if (classe2 == black[3] || classe2 == black[4])
	{
		s = white[0];
		c = white[1];
		e = white[3];
		h = white[2];
		k = white[5];
		m = white[4];
		A = 8;
		B = 16;
		C = 24;
		D = 32;
		E = 40;
		F = 48;
		G = 56;
		H = 64;
		if (classe2 == black[3])
			e2 = "e";
		else
			e2 = "m";
		kish = black[3];
	}
	else
	{
		s = black[0];
		c = black[1];
		e = black[3];
		h = black[2];
		k = black[5];
		m = black[4];
		A = 1;
		B = 9;
		C = 17;
		D = 25;
		E = 33;
		F = 41;
		G = 49;
		H = 57;
		if (classe2 == white[3])
			e2 = "e2";
		else
			e2 = "m2";
		kish = white[3];
	}
	if (classe2 == black[4])
		e = "m";
	else if (classe2 == white[4])
		e = "m2";
		if (b)
		{
			if (echeck)
			{
				var i=9;
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 1 || id+i == 9 || id+i == 17 || id+i == 25 || id+i == 33 || id+i == 41 || id+i == 49 || id+i == 57)
						break;
					else
					{
						$(`#${id+i}`).attr(styl,bgcolorb); 
						$(`#${id+i}`).attr("data-check",e2);
						i+=9;
						classe = $(`#${id+i}`).attr("class");
					}
					
				}
				if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
				{
					if (id+i != 1 && id+i != 9 && id+i != 17 && id+i != 25 && id+i != 33 && id+i != 41 && id+i != 49 && id+i != 57)
					{
						$(`#${id+i}`).attr(styl,bgcolorr);
						$(`#${id+i}`).attr("data-check",e2);
					}
				}

				var i=7;
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 8 || id+i == 16 || id+i == 24 || id+i == 32 || id+i == 40 || id+i == 48 || id+i == 56 || id+i == 64)
						break;
					else
					{
						$(`#${id+i}`).attr(styl,bgcolorb);
						$(`#${id+i}`).attr("data-check",e2);
						i+=7;
						classe = $(`#${id+i}`).attr("class");
					}
					
				}
				if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
				{
					if (id+i != 8 && id+i != 16 && id+i != 24 && id+i != 32 && id+i != 40 && id+i != 48 && id+i != 56 && id+i != 64)
					{
						$(`#${id+i}`).attr(styl,bgcolorr);
						$(`#${id+i}`).attr("data-check",e2);
					}
				}

				var i=-7;
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 1 || id+i == 9 || id+i == 17 || id+i == 25 || id+i == 33 || id+i == 41 || id+i == 49 || id+i == 57)
						break;
					else
					{
						$(`#${id+i}`).attr(styl,bgcolorb);
						$(`#${id+i}`).attr("data-check",e2);
						i-=7;
						classe = $(`#${id+i}`).attr("class");
					}
					
				}
				if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
				{
					if (id+i != 1 && id+i != 9 && id+i != 17 && id+i != 25 && id+i != 33 && id+i != 41 && id+i != 49 && id+i != 57)
					{
						$(`#${id+i}`).attr(styl,bgcolorr);
						$(`#${id+i}`).attr("data-check",e2);
					}
				}

				var i=-9;
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 8 || id+i == 16 || id+i == 24 || id+i == 32 || id+i == 40 || id+i == 48 || id+i == 56 || id+i == 64)
						break;
					else
					{
						$(`#${id+i}`).attr(styl,bgcolorb);
						$(`#${id+i}`).attr("data-check",e2);
						i-=9;
						classe = $(`#${id+i}`).attr("class");
					}
					
				}
				if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
				{
					if (id+i != 8 && id+i != 16 && id+i != 24 && id+i != 32 && id+i != 40 && id+i != 48 && id+i != 56 && id+i != 64)
					{
						$(`#${id+i}`).attr(styl,bgcolorr);
						$(`#${id+i}`).attr("data-check",e2);
					}
				}
				echeck = false;
			}	
			else
			{
				style();
				checkk();
				echeck = true;
			}
		}
		else
		{
			var i=9;
			classe = $(`#${id+i}`).attr("class");
			while (classe == "none")
			{
				if (id+i == 1 || id+i == 9 || id+i == 17 || id+i == 25 || id+i == 33 || id+i == 41 || id+i == 49 || id+i == 57)
					break;
				else
				{
					$(`#${id+i}`).attr("data-kish",kish);
					i+=9;
					classe = $(`#${id+i}`).attr("class");
				}
				
			}
			if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
			{
				if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
					$(`#${id+i}`).attr("data-kish",kish);
			}
				var i=7;
			classe = $(`#${id+i}`).attr("class");
			while (classe == "none")
			{
				if (id+i == 8 || id+i == 16 || id+i == 24 || id+i == 32 || id+i == 40 || id+i == 48 || id+i == 56 || id+i == 64)
					break;
				else
				{
					$(`#${id+i}`).attr("data-kish",kish);
					i+=7;
					classe = $(`#${id+i}`).attr("class");
				}
				
			}
			if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
			{
					if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
						$(`#${id+i}`).attr("data-kish",kish);
				}
				var i=-7;	
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 1 || id+i == 9 || id+i == 17 || id+i == 25 || id+i == 33 || id+i == 41 || id+i == 49 || id+i == 57)
						break;
					else
					{
						$(`#${id+i}`).attr("data-kish",kish);
						i-=7;
						classe = $(`#${id+i}`).attr("class");
					}
					
				}
				if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
				{
					if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
						$(`#${id+i}`).attr("data-kish",kish);
				}

				var i=-9;
				classe = $(`#${id+i}`).attr("class");
				while (classe == "none")
				{
					if (id+i == 8 || id+i == 16 || id+i == 24 || id+i == 32 || id+i == 40 || id+i == 48 || id+i == 56 || id+i == 64)
						break;
					else
					{
						$(`#${id+i}`).attr("data-kish",kish);
						i-=9;
						classe = $(`#${id+i}`).attr("class");
					}
					
			}
			if (classe == s || classe == c || classe == e || classe == h || classe == k || classe == m)
			{
				if (id+i != A && id+i != B && id+i != C && id+i != D && id+i != E && id+i != F && id+i != G && id+i != H)
					$(`#${id+i}`).attr("data-kish",kish);
			}
		}
};

function king(id,b) {
	var i,A,B,C,D,E,F,G,H,clas,k,king,king2;
	clas = $(`#${id}`).attr("class");
	A = 8;
	B = 16;
	C = 24;
	D = 32;
	E = 40;
	F = 48;
	G = 56;
	H = 64;
	A2 = 1;
	B2 = 9;
	C2 = 17;
	D2 = 25;
	E2 = 33;
	F2 = 41;
	G2 = 49;
	H2 = 57;
	if (clas == black[5])
	{
		k = "k";
		s = white[0];
		c = white[1];
		e = white[3];
		h = white[2];
		k2 = white[5];
		m = white[4];
		kish = "kish";
		king = black[5];
	}
	else
	{
		k = "k2";
		s = black[0];
		c = black[1];
		e = black[3];
		h = black[2];
		k2 = black[5];
		m = black[4];
		kish = "kish2";
		king = white[5];
	}
	if (b)
	{
		if (kcheck)
		{	
			if (id+7 != A && id+7 != B && id+7 != C && id+7 != D && id+7 != E && id+7 != F && id+7 != G && id+7 != H)
			{
				class9 = $(`#${id+7}`).attr("class");
				if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
				{
					var ki = $(`#${id+7}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id+7}`).attr(styl,bgcolorr);
						$(`#${id+7}`).attr("data-check",k);
					}
				}
				else
				{
					if (class9 == "none")
					{
						var ki = $(`#${id+7}`).attr("data-kish");
						if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						{
							$(`#${id+7}`).attr(styl,bgcolorb);
							$(`#${id+7}`).attr("data-check",k);
						}
					}
				}
			}
			class9 = $(`#${id+8}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id+8}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
				{
					$(`#${id+8}`).attr(styl,bgcolorr);
					$(`#${id+8}`).attr("data-check",k);
				}
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id+8}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id+8}`).attr(styl,bgcolorb);	
						$(`#${id+8}`).attr("data-check",k);
					}
				}
			}
			if (id+9 != A2 && id+9 != B2 && id+9 != C2 && id+9 != D2 && id+9 != E2 && id+9 != F2 && id+9 != G2 && id+9 != H2)
			{
				class9 = $(`#${id+9}`).attr("class");
				if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
				{
					var ki = $(`#${id+9}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id+9}`).attr(styl,bgcolorr);
						$(`#${id+9}`).attr("data-check",k);
					}
				}
				else
				{
					if (class9 == "none")
					{
						var ki = $(`#${id+9}`).attr("data-kish");
						if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						{
							$(`#${id+9}`).attr(styl,bgcolorb);
							$(`#${id+9}`).attr("data-check",k);
						}
					}
				}
			}
			if (id-7 != A2 && id-7 != B2 && id-7 != C2 && id-7 != D2 && id-7 != E2 && id-7 != F2 && id-7 != G2 && id-7 != H2)
			{
				class9 = $(`#${id-7}`).attr("class");
				if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
				{
					var ki = $(`#${id-7}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id-7}`).attr(styl,bgcolorr);
						$(`#${id-7}`).attr("data-check",k);
					}
				}
				else
				{
					if (class9 == "none")
					{
						var ki = $(`#${id-7}`).attr("data-kish");
						if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						{
							$(`#${id-7}`).attr(styl,bgcolorb);
							$(`#${id-7}`).attr("data-check",k);
						}
					}
				}
			}
			class9 = $(`#${id-8}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id-8}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
				{
					$(`#${id-8}`).attr(styl,bgcolorr);
					$(`#${id-8}`).attr("data-check",k);
				}
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id-8}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id-8}`).attr(styl,bgcolorb);	
						$(`#${id-8}`).attr("data-check",k);
					}
				}
			}
			if (id-9 != A && id-9 != B && id-9 != C && id-9 != D && id-9 != E && id-9 != F && id-9 != G && id-9 != H)
			{
				class9 = $(`#${id-9}`).attr("class");
				if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
				{
					var ki = $(`#${id-9}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id-9}`).attr(styl,bgcolorr);
						$(`#${id-9}`).attr("data-check",k);
					}
				}
				else
				{
					if (class9 == "none")
					{
						var ki = $(`#${id-9}`).attr("data-kish");
						if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						{
							$(`#${id-9}`).attr(styl,bgcolorb);
							$(`#${id-9}`).attr("data-check",k);
						}
					}
				}
			}
			if (id+1 != A2 && id+1 != B2 && id+1 != C2 && id+1 != D2 && id+1 != E2 && id+1 != F2 && id+1 != G2 && id+1 != H2)
			{
				class9 = $(`#${id+1}`).attr("class");
				if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
				{
					var ki = $(`#${id+1}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id+1}`).attr(styl,bgcolorr);
						$(`#${id+1}`).attr("data-check",k);
					}
				}
				else
				{
					if (class9 == "none")
					{
						var ki = $(`#${id+1}`).attr("data-kish");
						if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						{
							$(`#${id+1}`).attr(styl,bgcolorb);
							$(`#${id+1}`).attr("data-check",k);
						}
					}
				}
			}
			if (id-1 != A && id-1 != B && id-1 != C && id-1 != D && id-1 != E && id-1 != F && id-1 != G && id-1 != H)
			{	
				class9 = $(`#${id-1}`).attr("class");
				if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
				{
					var ki = $(`#${id-1}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					{
						$(`#${id-1}`).attr(styl,bgcolorr);
						$(`#${id-1}`).attr("data-check",k);
					}
				}
				else
				{
					if (class9 == "none")
					{
						var ki = $(`#${id-1}`).attr("data-kish");
						if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						{
							$(`#${id-1}`).attr(styl,bgcolorb);
							$(`#${id-1}`).attr("data-check",k);
						}
					}
				}
				
			}
			kcheck = false;
		}
		else 
		{
			style();
			checkk();
			kcheck = true;
		}
	}
	else
	{
		if (id+7 != A && id+7 != B && id+7 != C && id+7 != D && id+7 != E && id+7 != F && id+7 != G && id+7 != H)
		{
			class9 = $(`#${id+7}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id+7}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id+7}`).attr("data-kish",king);
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id+7}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						$(`#${id+7}`).attr("data-kish",king);
				}
			}
		}
		class9 = $(`#${id+8}`).attr("class");
		if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
		{
			var ki = $(`#${id+8}`).attr("data-kish");
			if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
				$(`#${id+8}`).attr("data-kish",king);
		}
		else
		{
			if (class9 == "none")
			{
				var ki = $(`#${id+8}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id+8}`).attr("data-kish",king);
			}
		}
		if (id+9 != A2 && id+9 != B2 && id+9 != C2 && id+9 != D2 && id+9 != E2 && id+9 != F2 && id+9 != G2 && id+9 != H2)
		{
			class9 = $(`#${id+9}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id+9}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id+9}`).attr("data-kish",king);
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id+9}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						$(`#${id+9}`).attr("data-kish",king);
				}
			}
		}
		if (id-7 != A2 && id-7 != B2 && id-7 != C2 && id-7 != D2 && id-7 != E2 && id-7 != F2 && id-7 != G2 && id-7 != H2)
		{
			class9 = $(`#${id-7}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id-7}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id-7}`).attr("data-kish",king);
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id-7}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						$(`#${id-7}`).attr("data-kish",king);
				}
			}
		}
		class9 = $(`#${id-8}`).attr("class");
		if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
		{
			var ki = $(`#${id-8}`).attr("data-kish");
			if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
				$(`#${id-8}`).attr("data-kish",king);
		}
		else
		{
			if (class9 == "none")
			{
				var ki = $(`#${id-8}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id-8}`).attr("data-kish",king);
			}
		}
		if (id-9 != A && id-9 != B && id-9 != C && id-9 != D && id-9 != E && id-9 != F && id-9 != G && id-9 != H)
		{
			class9 = $(`#${id-9}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id-9}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id-9}`).attr("data-kish",king);
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id-9}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						$(`#${id-9}`).attr("data-kish",king);
				}
			}
		}
		if (id+1 != A2 && id+1 != B2 && id+1 != C2 && id+1 != D2 && id+1 != E2 && id+1 != F2 && id+1 != G2 && id+1 != H2)
		{
			class9 = $(`#${id+1}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id+1}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id+1}`).attr("data-kish",king);
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id+1}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						$(`#${id+1}`).attr("data-kish",king);
				}
			}
		}
		if (id-1 != A && id-1 != B && id-1 != C && id-1 != D && id-1 != E && id-1 != F && id-1 != G && id-1 != H)
		{	
			class9 = $(`#${id-1}`).attr("class");
			if (class9 == s || class9 == c || class9 == e || class9 == h || class9 == k2 || class9 == m)
			{
				var ki = $(`#${id-1}`).attr("data-kish");
				if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
					$(`#${id-1}`).attr("data-kish",king);
			}
			else
			{
				if (class9 == "none")
				{
					var ki = $(`#${id-1}`).attr("data-kish");
					if (ki != kish &&  ki != s && ki != c && ki != e && ki != h && ki != k2 && ki != m)
						$(`#${id-1}`).attr("data-kish",king);
				}
			}
		}
	}
};