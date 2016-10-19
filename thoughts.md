---
title: Thoughts
permalink: "/thoughts/"
header: You Are What You Think
tagline: Change your thoughts and you change your world
layout: blog
featured-image: road.jpg
---

<section class="row" id="posts-row">
    {% capture reset %}<div class="reset"></div>{% endcapture %}
    {% assign sorted = site.thoughts | sort: 'date' | reverse %}
    {% for post in sorted | limit:6 %}
        <div class="col-md-4">
            <article id="" class="">
                <figure class="entry-image">
                    <a href="{{ post.url }}">
                        <img src="{{ site.dropbox }}/photos/{{ post.featured-image }}" class="img-responsive size-posts-thumb" width="350px" height="200px">
                    </a>
                </figure>
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="{{ post.url }}" rel="bookmark">{{ post.title }}</a>
                    </h2>
                </header><!-- .entry-header -->

                <div class="entry-content">
                    <p>{{ post.excerpt }}</p>
                </div><!-- .entry-content -->

                <footer class="entry-footer">
                    <div class="entry-meta">
                        <p>
                            <span><a href="{{ site.url }}/{{ post.collection }}">{{ post.collection }}</a></span> / <time datetime="{{ post.date }}"><a href="{{ post.url }}">{{ post.date | date: '%B %-d, %Y' }}</a></time>
                        </p>
                    </div><!-- .entry-meta -->
                </footer><!-- .entry-footer -->
            </article>
        </div>
        {% if forloop.index == 3 %}
            {{ reset }}
        {% elsif forloop.last %}
            {{ reset }}
        {% endif %}
    {% endfor %}
    <div class="category-link">
        <a class="btn" href="{{ site.url }}/travel/" title="Travel">Read more in Travel</a>
        <a class="btn" href="{{ site.url }}/thoughts/" title="Thoughts">Read more in Thoughts</a>
    </div>
</section>
