```
When using decache with jest test fails due to lack of module.constructor._pathCache
```

![alt text](https://raw.githubusercontent.com/cfcomputing/decache-undefined-pathCache/decache.png)

A default could be added to prevent issues I do not believe there would ever be any significant performance impact as a result and would allow code to function even if future versions of NODEJS the \_pathCache gets removed.

```diff
require.decache = function (moduleName) {

    moduleName = require.find(moduleName);

    if(!moduleName) {return;}

    // Run over the cache looking for the files
    // loaded by the specified module name
    require.searchCache(moduleName, function (mod) {
        delete require.cache[mod.id];
    });

    // Remove cached paths to the module.
    // Thanks to @bentael for pointing this out.
-    Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
+    Object.keys(module.constructor._pathCache||{}).forEach(function(cacheKey) {
        if (cacheKey.indexOf(moduleName)>0) {
            delete module.constructor._pathCache[cacheKey];
        }
    });
};
```
