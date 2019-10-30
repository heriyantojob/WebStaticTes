var mqMatcher = (function () {
    var siteMediaQueries = {
        // mobile: 'only screen and (max-width : 767px)',
        // tablet: 'only screen and (min-width : 768px) and (max-width : 1199px)',
        // desktop: 'only screen and (min-width : 1200px)'


        m: 'only screen and (max-width : 1199px)',
        d: 'only screen and (min-width : 1200px)'
    };
    var w = window;

    // which mediaQuery does it match, will use the default or an object of mediaQueries passed in
    function getMatches(smq) {
        if (!smq || Object.keys(smq).length === 0) {
            smq = siteMediaQueries;
        }
        for (var size in smq) {
            if (w.matchMedia(smq[size]).matches) {
                return size;
            }
        }

        return false;
    }

    // is the browser (based on mediaQuery) in the passed in min/max widths
    function matchSize(min, max) {
        var mq = 'only screen and (min-width : ' + min + 'px) and (max-width : ' + max + 'px)';

        return w.matchMedia(mq).matches;
    }

    return {
        getMatches: getMatches,
        matchSize: matchSize
    };
})();

// usage:
// mqMatcher.getMatches()
// > desktop
// 
// On a mobile screen @ 320
// mqMatcher.matchSize(0,768)
// > true
// 
// On a desktop screen @ 1920
// // mqMatcher.matchSize(0,768)
// > false