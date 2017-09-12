(function(win) {
    function highlight() {
        
        $('pre > code').each(function(key, it) {
            hljs.highlightBlock(it);
        });
    }

    function run() {
        var RHASHSTART = /^#/, hashs = location.hash;
        if( !RHASHSTART.test(hashs) ) {
            hashs = '#Introduction';
        }
        hashs = hashs.replace(/#/, '').toLowerCase();

        $.get('./post/'+hashs+'.md', function(res) {
            document.getElementById('docContainer').innerHTML = marked(res);
            highlight();
        })
    }
    
    win.onhashchange = run;
    run();
})(this);