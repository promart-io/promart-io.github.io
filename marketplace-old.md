---
layout: default
title: Marketplace
---

{{ page.title }}
===


<div class="clearfix"></div>
<h2><i class="fa fa-server fa-fw"></i>
Apps developed by our business network</h2>

<br>

<div class="row">
	{% for post in site.tags.product %}
		{% if post.categories contains 'apps' %}
		<div class="col-sm-6 col-md-4">
		    <div class="thumbnail">
		      <img src="img/industries/{{post.industry}}.jpg" alt="{{post.industry}}">
		      <div class="caption">
		        <h3>{{ post.title }}</h3>
		        <p>{{ post.brief }}</p>
		        {% assign vendor = site.data.vendors[post.vendor] %}
		        <p class="pull-right"><img src="{{vendor.logo}}" height="20px"></p>
		        <p><i class="fa fa-play-circle fa-fw"></i>	<a href="{{ post.location }}">{{ post.title }}</a></p>
		      </div>
		    </div>
	    </div>
		{% endif %}
	{% endfor %}
</div>

<hr>

<div class="col-lg-6 heading-lead">
	<br>
    <div class="clearfix"></div>
    <h2><i class="fa fa-industry fa-fw"></i>
    Apps by Industry</h2>
    <p>Here you can find reusable libraries and end-to-end solutions that solve business problems following the needs of the particular industry.
    </p>
    <ul>
    	<li><a href="products/agriculture.html">Agriculture</a></li>
    	<li><a href="products/automotive.html">Automotive</a></li>
    	<li><a href="products/banking.html">Banking</a></li>
		<li><a href="products/education.html">Education & Research</a></li>
		<li><a href="products/engineering.html">Engineering & Construction</a></li>
		<li><a href="products/food.html">Food & Beverage</a></li>
		<li><a href="products/healthcare.html">Healthcare</a></li>
		<li><a href="products/it.html">Information Technology</a></li>
		<li><a href="products/manufacturing.html">Manufacturing</a></li>
		<li><a href="products/media.html">Media</a></li>
		<li><a href="products/professional.html">Professional Services</a></li>
		<li><a href="products/public.html">Public Sector</a></li>
		<li><a href="products/realestate.html">Real Estate</a></li>
		<li><a href="products/retail.html">Retail</a></li>
		<li><a href="products/sports.html">Sports & Entertainment</a></li>
		<li><a href="products/telecom.html">Telecommunications</a></li>
    	<li><a href="products/travel.html">Travel & Transportation</a></li>
    	<li><a href="products/utilities.html">Utilities</a></li>
    	<li><a href="products/distribution.html">Wholesale Distribution</a></li>
    </ul>
</div>

<br><br><br><br>
