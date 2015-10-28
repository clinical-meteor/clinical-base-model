Package.describe({
    name: "awatson1978:base-model",
    summary: "A model for all other models to inherit from ",
    version: "0.3.0",
    git: "https://github.com/awatson1978/socialize-base-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use(["meteor", "mongo", "underscore"]);

    api.use([
        "socialize:server-time@0.1.1", "tmeasday:publish-with-relations@0.2.0", "aldeed:simple-schema@1.3.3",
        "aldeed:collection2@2.3.3", "matb33:collection-hooks@0.7.13"
    ]);

    api.imply(["meteor", "mongo", "underscore"]);

    api.imply([
        "tmeasday:publish-with-relations@0.2.0", "aldeed:simple-schema@1.3.3",
        "aldeed:collection2@2.3.3", "matb33:collection-hooks@0.7.13"
    ]);

    api.addFiles(["base-model.js", "security.js"]);

    api.export("BaseModel");
});

