(function(win) {
    var caches = new Caches();
    var container = $('#docContainer');
    var body = $('body');

    // Slide
    request('./post/layout_slidebar.md', function(res) {
        $('#slidebar').html( marked(res) );
    });

    // Menu
    request('./post/layout_menu.md', function(res) {
        $('#nav-header').html( marked(res) );
    });

    container.delegate('.view-code', 'click', function() {
        var fn = 'slideUp';
        if( !this.__slideactive__ ) {
            fn = 'slideDown';
        }
        this.__slideactive__ = !this.__slideactive__;
        $(this).prev('pre').stop()[fn](100);
    });

    function request(url, success, err) {
        $.ajax({
            url: url,
            dataType: 'text',
            success: success,
            error: err
        });
    }

    function Caches() {
        this._data = {};
        this.get = function(key) {
            return this._data[key];
        }
        this.set = function(key, val) {
            this._data[key] = val;
        }
    }

    function requestCB(res, path) {
        res = $('<div>').append( marked(res, path) );
        $('pre > code', res).each(function(key, it) {
            var cur = $(it), ret, wraper, parent;
            
            if( (ret = it.innerHTML.match(/^-(?:\s+)?([\w\W]+)/)) ) {
                cur.html ( ret[1] );
            }
            else {
                parent = cur.parent();
                wraper = $('<div class="code-wraper"></div>');
                parent.before(wraper);
                ret = it.innerHTML.replace(/\&lt\;/g, '<').replace(/\&gt\;/g, '>');
                wraper.append('<div class="example">'+ret+'</div>').append(parent)
                .append('<a class="view-code text-main">VIEW CODE</a>');
            }
            hljs.highlightBlock(it);
        });

        // 为table添加样式
        $('table', res).each(function() {
            var cur = $(this);
            if( !cur.parent('.example').length ) {
                cur.addClass('table use-colbar use-divider use-border');
            }
        });

        res = res.html();
        container.html( res );
        caches.set(path, res);
    }

    function run(name) {
        var res, path;        
        path = './post/'+name+'.md';
        if( !(res = caches.get(path)) ) {
            container.html('<div class="alert use-center">Loading...</div>');
            request(path, function(data) {
                requestCB(data, path);
            }, function() {
                container.html('<div class="alert use-danger use-center">The request timeout or URL address is incorrect!</div>');
            });
        }
        else {
            container.html(res);
        }
        body.scrollTop(0);
    }

    var pn = __detailname__;

    if( 'introduction' === pn ) {
        var hash;
        win.onhashchange = function() {
            hash = /#(\w+)/.exec(location.hash);
            run( hash ? hash[1] : 'layout_error' );  
        };

        hash = /#(\w+)/.exec(location.hash);
        pn = hash ? hash[1] : pn;
    }
    run( pn );
})(this);