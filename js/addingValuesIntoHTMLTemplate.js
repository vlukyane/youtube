export function addingValuesIntoHTMLTemplate(e,t) {
    var res = e;
    for(var n = 0; n < t.length; n++) {
        res = res.replace(/\{\{(.*?)\}\}/g,function(e,r) {
            return t[n][r]
        })
    }
    return res;
}
