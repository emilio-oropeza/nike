var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="kelloggs-copa-america";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;

var numeroImages2=8;
var slider_on2=false;
var intervalID2;
var posicion_slider2=0;

function loadDisqus(source, identifier, url) {
	if (window.DISQUS) {
		jQuery('#disqus_thread').insertAfter(source);
		/** if Disqus exists, call it's reset method with new parameters **/

		DISQUS.reset({
		reload: true,
		config: function () { 
		this.page.identifier = identifier.toString();    //important to convert it to string
		this.page.url = url;
		}
		});
	} else {
		//insert a wrapper in HTML after the relevant "show comments" link
		source.append('<div id="disqus_thread"></div>');
		//jQuery('<div id="disqus_thread"></div>').insertAfter(source);
		disqus_identifier = identifier; //set the identifier argument
		disqus_url = url; //set the permalink argument
		disqus_per_page=3;
		//append the Disqus embed script to HTML
		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
		jQuery('head').append(dsq);
	}
};

loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);