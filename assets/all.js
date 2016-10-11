---
# all.js
---

{% include bootstrap.min.js %}
{% include instafeed.min.js %}

//// custom js

// instafeed
var feed = new Instafeed({
    get: 'user',
    userId: '31176171',
    accessToken: '31176171.fea787d.53fdae91a765404e8aa92c654757abc0',
    clientId: '298e54c29bec4729910c1054558ed11b',
    resolution: 'standard_resolution',
    limit: '12',
    template: '<div class="col-md-2" id="single"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><span class="likes"><i class="fa fa-heart-o"></i>{{likes}}</span></a></div>',
});
feed.run();