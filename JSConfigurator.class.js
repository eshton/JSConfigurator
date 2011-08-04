/**
 *
 * Javascript configuration holder class 
 *
 */
var JSConfigurator = function ( defaultNamespace, defaultOptions ) {
    this.namespaces = {};
    this.defaultNamespace = defaultNamespace;
    this.namespaces[defaultNamespace] = defaultOptions;
    this.setDefaultNamespace = function (namespace) {
        this.defaultNamespace = namespace;
    }
    this.getDefaultNamespace = function () {
        return this.defaultNamespace;
    }
    this.put = function ( key, value, namespace ) {
        if (!namespace) {
            this.namespaces[this.defaultNamespace][key] = value;
        }
        else {
            if (typeof(this.namespaces[namespace]) == 'undefined') {
                this.namespaces[namespace] = {};
            }
            this.namespaces[namespace][key] = value;
        }
    }
    this.putMore = function ( configArray, namespace ) {
        if (!namespace) namespace = this.defaultNamespace;
        if (typeof(this.namespaces[namespace]) == 'undefined') {
            this.namespaces[namespace] = {};
        }
        for (var i in configArray ) {
            this.namespaces[namespace][i] = configArray[i];
        }
    }
    this.get = function ( key, namespace, defaultValue ) {
        if (!namespace) namespace = this.defaultNamespace;
        var ret = this.namespaces[namespace][key];
        if (typeof(ret) == 'undefined') {
            return defaultValue;
        }
        else return ret;
    }
}
