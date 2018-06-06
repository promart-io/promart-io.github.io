---
layout: product
category: apps
industry: travel
title: Airports Services
icon: gear
vendor: vendorx
repository: https://github.com/dirigiblelabs/travel_airports_services
version: 1.0
tags:
- product
- travel
- services
- master
- library
brief: Contains the RESTful services and simple web based user interface about airports - name, codes, coordinates, etc. available at openflights.org
git: https://github.com/dirigiblelabs/travel_airports_services.git
info: apps/2018/06/04/travel_vendorx_airports.html
---

{{ page.title }}
---

{% assign vendor = site.data.vendors[page.vendor] %}

### Plans

<div class="row">
    <div class="col-sm-4 col-lg-4 col-md-4">
        <div class="thumbnail">
            <img src="/img/plans/basic.jpg" alt="Basic">
            <div class="caption">
                <h4 class="pull-right">$24.99</h4>
                <h4><a href="#">Basic</a>
                </h4>
                <p>This is an example how the real basic plan can look like. Describe the support obligations that you promise here.</p>
            </div>
            <div class="ratings">
                <p class="pull-right"><img src="{{vendor.logo}}" height="20px"></p>
                <p>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </p>
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4 col-md-4">
        <div class="thumbnail">
            <img src="/img/plans/professional.jpg" alt="Professional Plan">
            <div class="caption">
                <h4 class="pull-right">$64.99</h4>
                <h4><a href="#">Professional</a>
                </h4>
                <p>This is an example how the real professional plan can look like. Describe the support obligations that you promise here.</p>
            </div>
            <div class="ratings">
                <p class="pull-right"><img src="{{vendor.logo}}" height="20px"></p>
                <p>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </p>
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4 col-md-4">
        <div class="thumbnail">
            <img src="/img/plans/enterprise.jpg" alt="Enterprise Plan">
            <div class="caption">
                <h4 class="pull-right">$74.99</h4>
                <h4><a href="#">Enterprise</a>
                </h4>
                <p>This is an example how the real enterprise plan can look like. Describe the support obligations that you promise here.</p>
            </div>
            <div class="ratings">
                <p class="pull-right"><img src="{{vendor.logo}}" height="20px"></p>
                <p>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </p>
            </div>
        </div>
    </div>
</div>

### Description

As of January 2012, the OpenFlights Airports Database contains 6977 airports spanning the globe, as shown in the map above. Each entry contains the following information:

	Airport ID			Unique OpenFlights identifier for this airport.
	Name				Name of airport. May or may not contain the City name.
	City				Main city served by airport. May be spelled differently from Name.
	Country				Country or territory where airport is located.
	IATA/FAA			3-letter FAA code, for airports located in Country "United States of America". 3-letter IATA code, for all other airports. Blank if not assigned.
	ICAO				4-letter ICAO code. Blank if not assigned.
	Latitude			Decimal degrees, usually to six significant digits. Negative is South, positive is North.
	Longitude			Decimal degrees, usually to six significant digits. Negative is West, positive is East.
	Altitude			In feet.
	Timezone			Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
	DST					Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
	Tz 					database time zone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".

The data is ISO 8859-1 (Latin-1) encoded, with no special characters.
Note: Rules for daylight savings time change from year to year and from country to country. The current data is an approximation for 2009, built on a country level. Most airports in DST-less regions in countries that generally observe DST (eg. AL, HI in the USA, NT, QL in Australia, parts of Canada) are marked incorrectly.

Sample entries:

	507,"Heathrow","London","United Kingdom","LHR","EGLL",51.4775,-0.461389,83,0,"E","Europe/London"
	26,"Kugaaruk","Pelly Bay","Canada","YBB","CYBB",68.534444,-89.808056,56,-7,"A","America/Edmonton"
	3127,"Pokhara","Pokhara","Nepal","PKR","VNPK",28.200881,83.982056,2712,5.75,"N","Asia/Katmandu"


<div class="btn-toolbar pull-left">
	<a class="btn btn-warning" href="http://dirigible.eclipse.org/services/ui/anonymous.html?git={{ page.git }}.git">Run</a>
	<a class="btn btn-info" href="http://openflights.org/data.html">OpenFlights</a>
</div>

<br><br>

### Project Info

#### General

------------ | -----------
Vendor     | {{vendor.name}}
Repository | {{page.repository}}
License    | [Eclipse Public License - v 1.0](https://www.eclipse.org/legal/epl-v10.html)
Version    | {{page.version}}

<br><br>