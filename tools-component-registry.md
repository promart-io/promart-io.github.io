---
layout: default
title: Component Registry
---

{{ page.title }}
===

<br>

The Component Registry is the place where all the available software components produced by the developers in the ProMART network can be found. All the registered developers are allowed to publish their components under the ProMART Terms of Use.

There are different types of components depending on their usage type (master data, business processes, integrations, user interfaces, etc.). There are also an important set of meta-data attributes attached to each end every software component, which makes them compliant for reuse in Solutions composed by the Vendors. These meta-data attributes includes:

* *author* - the name of the developer who made the registration of the component
* *vendor* - the name of the developer or the company owns the copyrights of the component
* *repository* - the location of the repository containing the source code of the component or the parent project
* *version* - the version of the component
* *type* - the usage type
* *support* - the link to the preferred way to receive bug reports or feature requests 


<br>


<div class="clearfix"></div>
<h2><i class="fa fa-server fa-fw"></i>
Components built by our developers network</h2>

<br>

<div class="row">
	{% for post in site.tags.component %}
		{% if post.categories contains 'components' %}
		<div class="col-sm-6 col-md-4">
		    <div class="thumbnail">
		      <img src="img/industries/{{post.industry}}.jpg" alt="{{post.industry}}">
		      <div class="caption">
		        <h3>{{ post.title }}</h3>
		        <p>{{ post.brief }}</p>
		        {% assign author = site.data.developers[post.author] %}
		        <h5><img width="30em" style="border-radius: 50%" src="https://avatars1.githubusercontent.com/u/6852373" > brought by {{author.name}}</h5>
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


