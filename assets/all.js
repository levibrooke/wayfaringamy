---
---

{% include bootstrap.min.js %}
{% include instafeed.min.js %}

//// custom js

// instafeed
var feed = new Instafeed({
    get: 'user',
    userId: '267315238',
    accessToken: '267315238.d11dd2f.2e085b492f4a4a3795d16a6c369e1d43',
    resolution: 'standard_resolution',
    limit: '12',
    template: '{% raw %}<div class="col-md-2" id="single"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><span class="likes"><i class="fa fa-heart-o"></i>{{likes}}</span></a></div>{% endraw %}',
});
feed.run();