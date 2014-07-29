function rgb2hsv (color) {
	if (color.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) == null ) {
		throw "rgb2hsv: wrong color input. \n Hex color like '#fa4839' or 'fa4839' expected";
		return false;
	}
	if (color.indexOf('#') != -1) {
		color = color.split('#')[1];
	}
var r = parseInt(color[0] + color[1], 16)/255,
	g = parseInt(color[2] + color[3], 16)/255,
	b = parseInt(color[4] + color[5], 16)/255;

var min = Math.min(r,g,b),
	max = Math.max(r,g,b);

var h,s,v;
if (min==max) h = 0;
if (max == r && g>=b) h = 60*(g-b)/(max-min);
if (max == r && g < b) h = 60*(g-b)/(max-min) +360;
if (max == g) h = 60*(b-r)/(max-min) + 120;
if (max == b) h = 60*(r-g)/(max-min) + 240;

s = 1 - (min/max);
if (max == 0) s = 0;
s *= 100;
v = max;
v *= 100;
return [Math.round(h), Math.round(s), Math.round(v)]
}

function hsv2rgb (h, s, v) {
	if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100)
	{
		throw "hsv2rgb: wrong color input. \n H = [0..360], S = [0..100], V = [0..100] expected";
		return false;
	}
	var Hi   = Math.round(h/60),
		Vmin = ((100 - s)*v)/100,
		a    = (v - Vmin)*(h%60)/60,
		Vinc = Vmin + a,
		Vdec = v - a,
		r = g = b = 0;
	switch (Hi) {
		case 0: r = v;
				g = Vinc;
				b = Vmin;
				break;
		case 1: r = Vdec;
				g = v;
				b = Vmin;
				break;
		case 2: r = Vmin;
				g = v;
				b = Vinc;
				break;
		case 3: r = Vmin;
				g = Vdec;
				b = v;
				break;
		case 4: r = Vinc;
				g = Vmin;
				b = v;
				break;
		case 5: r = v;
				g = Vmin;
				b = Vdec;
	}
	r = Math.round(r);
	g = Math.round(g);
	b = Math.round(b);
	return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}