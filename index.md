---
layout: default
---

<main class="container" id="" role="main">
    <section class="row" id="about-amy">
        <div class="col-md-12 frame-area">
            <div class="col-md-6">
                <figure>
                        <img class="img-responsive" id="profile" src="{{ site.dropbox }}/assets/amy.jpg" alt="A picture of Amy" />
                </figure>
            </div>
            <div class="frame-border"></div>
            <div class="col-md-6">
                <aside>
                    <h2>Hi, I'm Amy!</h2>
                    <p class="about-text">A few months ago, I quit my comfortable, salaried career to pursue real happiness. What does that look like? To be honest, I'm not really sure. But I've decided to start with learning more about our world through experiencing it.</p>
                    <a class="text-link" href="/about">Learn more about my journey</a>
                </aside>
            </div>
        </div>
    </section>
    <section class="row" id="posts-row">
        <!-- forloop -->
        {% capture reset %}<div class="reset"></div>{% endcapture %}
        {% assign documents = site.documents | where:"master","true" | where:"meta.sticky","no" | sort: 'date' | reverse %}
        {% for document in documents | limit:5 %}
        <div class="col-md-4">
            <article id="" class="">
                <figure class="entry-image">
                    <a href="{{ document.url }}">
                        <img src="{{ site.dropbox }}/photos/{{ document.featured-image }}" class="img-responsive size-posts-thumb" width="350px" height="200px">
                    </a>
                </figure>
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="{{ document.url }}" rel="bookmark">{{ document.title }}</a>
                    </h2>
                </header><!-- .entry-header -->

                <div class="entry-content">
                    <p>{{ document.excerpt }}</p>
                </div><!-- .entry-content -->

                <footer class="entry-footer">
                    <div class="entry-meta">
                        <p>
                            <span><a href="{{ site.url }}/{{ document.collection }}">{{ document.collection }}</a></span> / <time datetime="{{ document.date }}"><a href="{{ document.url }}">{{ document.date | date: '%B %-d, %Y' }}</a></time>
                        </p>
                    </div><!-- .entry-meta -->
                </footer><!-- .entry-footer -->
            </article>
        </div>
            {% if forloop.index == 3 %}
                {{ reset }}
            {% elsif forloop.index == 5 %}
                {% break %}
            {% endif %}
        {% endfor %}
        <div class="col-md-4">
            <aside class="upcoming-travel">
                <header>
                    <i class="fa fa-4x fa-calendar" id="calendar"></i>
                    <h3>Upcoming Travel Plans</h3>
                </header>
                {% for destination in site.calendar limit:3 %}
                <div class="itinerary">
                    <p class="place">{{ destination.title }}</p>
                    <time datetime="{{ destination.dates }}">{{ destination.dates }}</time>
                </div>
                {% endfor %}

                <style>.upcoming-travel:before {background-image: url('{{ site.dropbox }}/assets/travel.jpg');}</style>    
            </aside>
        </div>
        {{ reset }}
        <div class="category-link">
            <a class="btn" href="{{ site.url }}/travel" title="Travel">Read more in Travel</a>
            <a class="btn" href="{{ site.url }}/thoughts" title="Thoughts">Read more in Thoughts</a>
        </div>
    </section>
</main>
<section class="instagram">
    {% include instafeed.html %}
</section>
            
            
