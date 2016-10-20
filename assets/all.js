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
    limit: '8',
    template: '{% raw %}<a class="col-md-3 insta-link" href="{{link}}" target="_blank"><img class="insta-image" src="{{image}}" /><span class="likes"><i class="fa fa-heart-o"></i>{{likes}}</span></a>{% endraw %}',
    
});
feed.run();

 // option 1
//template: '{% raw %}<div class="col-md-3" id="single"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><span class="likes"><i class="fa fa-heart-o"></i>{{likes}}</span></a></div>{% endraw %}',

// option 2
//template: '{% raw %}<a href="{{link}}" target="_blank"><div class="col-md-3 id="single" style="background-image:url('{{image}}');"><span class="likes"><i class="fa fa-heart-o"></i>{{likes}}</span></div></a>{% endraw %}',