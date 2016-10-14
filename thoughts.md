---
title: Thoughts
permalink: "/thoughts/"
header: You Are What You Think
tagline: Change your thoughts and you change your world
layout: default
---

<header class="featured-header">
    <section class="featured-post container">
        <div class="row">
            <article class="col-md-6">
                <header class="col-md-12">
                    <h1 class="page-title"><span>{{ page.title }}</span></h1>
                </header>
                <footer class="post-meta col-md-12">
                    <p>{{ page.tagline }}</p>
                </footer>
            </article>
            <aside class="email-signup col-md-4 col-md-offset-2">
                <p>Something about signing up for my newsletter because it will be awesome.</p>
                <form action="" method="post" class="signup-form">
                    <input type="email" name="Email" placeholder="Your Email..." id="">
                    <input type="hidden" name="location" id="location" value="home">
                    <div style="position:absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="" tabindex="">
                    </div>
                    <button type="submit" name="subsribe" id="">Sign Up</button>
                </form>
            </aside>
        </div>
    </section>
</header>
<main class="container" id="" role="main">
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
</main>
<section class="instagram">
    {% include instafeed.html %}
</section>