webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\" col-12 navbar navbar-dark bg-dark\">\r\n\t\t\t<a class=\"navbar-brand\" href=\"#\">SPORTS STORE</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t\t<div class=\"col-3 p-a-1\">\r\n\t\t\t\t<button class=\"btn btn-outline-info btn-block\"\r\n\t\t\t\t\trouterLink=\"/admin/main/products\" routerLinkActive=\"active\">\r\n\t\t\t\t\tProducts</button>\r\n\t\t\t\t<button class=\"btn btn-outline-info btn-block\"\r\n\t\t\t\t\trouterLink=\"/admin/main/orders\" routerLinkActive=\"active\">\r\n\t\t\t\t\tOrders</button>\r\n\t\t\t\t<button class=\"btn btn-outline-danger btn-block\" (click)=\"this.authService.logout()\">\r\n\t\t\t\t\tLogout</button>\r\n\t\t\t</div>\r\n\t\t<div class=\"col-9 p-a-1\">\r\n\t\t\t<router-outlet></router-outlet>\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_auth_service__ = __webpack_require__("../../../../../src/app/model/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(authService) {
        this.authService = authService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__model_auth_service__["a" /* AuthService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__("../../../../../src/app/admin/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orderTable_component__ = __webpack_require__("../../../../../src/app/admin/orderTable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productEditor_component__ = __webpack_require__("../../../../../src/app/admin/productEditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productTable_component__ = __webpack_require__("../../../../../src/app/admin/productTable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild([
    { path: "auth", component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */] },
    {
        path: "main", component: __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */],
        children: [
            { path: "products/:mode/:id", component: __WEBPACK_IMPORTED_MODULE_7__productEditor_component__["a" /* ProductEditorComponent */] },
            { path: "products/:mode", component: __WEBPACK_IMPORTED_MODULE_7__productEditor_component__["a" /* ProductEditorComponent */] },
            { path: "products", component: __WEBPACK_IMPORTED_MODULE_8__productTable_component__["a" /* ProductTableComponent */] },
            { path: "orders", component: __WEBPACK_IMPORTED_MODULE_6__orderTable_component__["a" /* OrderTableComponent */] },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], routing],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_8__productTable_component__["a" /* ProductTableComponent */], __WEBPACK_IMPORTED_MODULE_7__productEditor_component__["a" /* ProductEditorComponent */], __WEBPACK_IMPORTED_MODULE_6__orderTable_component__["a" /* OrderTableComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"bg-info p-a-1 text-center\">\r\n\t\t<h3>SportsStore Admin</h3>\r\n\t</div>\r\n\t\r\n\t\t\t\t\t<div class=\"p-a-1\">\r\n\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<h3 align=\"center\">Login Form</h3>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label> <input\r\n\t\t\t\t\t\t\t\t\ttype=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Email\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleInputPassword1\">Password</label> <input\r\n\t\t\t\t\t\t\t\t\ttype=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Password\">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"buton\" class=\"btn btn-primary btn-block\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 20px\">Login with Email</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button *ngIf=\"!this.authService.isLoggedIn()\" type=\"button\" class=\"btn btn-block\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"signInWithGoogle()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\" aria-hidden=\"true\"></i> Login with\r\n\t\t\t\t\t\t\t\t\tGoogle\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button *ngIf=\"this.authService.isLoggedIn()\" type=\"button\" class=\"btn btn-block\"\r\n\t\t\t\t\t\t\t\t\t (click)=\"ir()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google\" aria-hidden=\"true\"></i> to admin\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t<!-- end card -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__("../../../../../src/app/model/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthComponent.prototype.signInWithGoogle = function () {
        this.authService.signInWithGoogle()
            .then(function (res) {
            // console.log("user email: " + this.authService.getUser().email);
            //this.ir();// this.router.navigateByUrl("/admin/main");
        })
            .catch(function (err) { return console.log(err); });
    };
    AuthComponent.prototype.ir = function () {
        this.router.navigateByUrl("/admin/main");
    };
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/auth.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/orderTable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-check\">\r\n\t<label class=\"form-check-label\"> <input type=\"checkbox\"\r\n\t\tclass=\"form-check-input\" [(ngModel)]=\"includeShipped\" /> Display\r\n\t\tShipped Orders\r\n\t</label>\r\n</div>\r\n<table class=\"table table-sm\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Zip</th>\r\n\t\t\t<th colspan=\"2\">Cart</th>\r\n\t\t\t<th></th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngIf=\"getOrders().length == 0\">\r\n\t\t\t<td colspan=\"5\">There are no orders</td>\r\n\t\t</tr>\r\n\t\t<ng-template ngFor let-o [ngForOf]=\"getOrders()\">\r\n\t\t<tr>\r\n\t\t\t<td>{{o.name}}</td>\r\n\t\t\t<td>{{o.zip}}</td>\r\n\t\t\t<th>Product</th>\r\n\t\t\t<th>Quantity</th>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-warning\" (click)=\"markShipped(o)\">\r\n\t\t\t\t\tShip</button>\r\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"delete(o.id)\">\r\n\t\t\t\t\tDelete</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr *ngFor=\"let line of o.cart.lines\">\r\n\t\t\t<td colspan=\"2\"></td>\r\n\t\t\t<td>{{line.product.name}}</td>\r\n\t\t\t<td>{{line.quantity}}</td>\r\n\t\t</tr>\r\n\t\t</ng-template>\r\n\t</tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/orderTable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_order_repository__ = __webpack_require__("../../../../../src/app/model/order.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderTableComponent = (function () {
    function OrderTableComponent(repository) {
        this.repository = repository;
        this.includeShipped = false;
        this.repository.loadOrders();
    }
    OrderTableComponent.prototype.getOrders = function () {
        var _this = this;
        return this.repository.getOrders()
            .filter(function (o) { return _this.includeShipped || !o.shipped; });
    };
    OrderTableComponent.prototype.markShipped = function (order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    };
    OrderTableComponent.prototype.delete = function (id) {
        this.repository.deleteOrder(id);
    };
    OrderTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/orderTable.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__model_order_repository__["a" /* OrderRepository */]])
    ], OrderTableComponent);
    return OrderTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/productEditor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\r\n\t<h5>{{editing ? \"Edit\" : \"Create\"}} Product</h5>\r\n</div>\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\">\r\n\t<div class=\"form-group\">\r\n\t\t<label>Name</label> <input class=\"form-control\" name=\"name\"\r\n\t\t\t[(ngModel)]=\"product.name\" />\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label>Category</label> <input class=\"form-control\" name=\"category\"\r\n\t\t\t[(ngModel)]=\"product.category\" />\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label>Description</label>\r\n\t\t<textarea class=\"form-control\" name=\"description\"\r\n\t\t\t[(ngModel)]=\"product.description\">\r\n</textarea>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label>Price</label> <input class=\"form-control\" name=\"price\"\r\n\t\t\t[(ngModel)]=\"product.price\" />\r\n\t</div>\r\n\t<button type=\"submit\" class=\"btn btn-primary\">{{editing ?\r\n\t\t\"Save\" : \"Create\"}}</button>\r\n\t<button type=\"reset\" class=\"btn btn-secondary\"\r\n\t\trouterLink=\"/admin/main/products\">Cancel</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/productEditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_product_model__ = __webpack_require__("../../../../../src/app/model/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_product_repository__ = __webpack_require__("../../../../../src/app/model/product.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditorComponent = (function () {
    function ProductEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__model_product_model__["a" /* Product */]();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    ProductEditorComponent.prototype.save = function (form) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    };
    ProductEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/productEditor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__model_product_repository__["a" /* ProductRepository */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/productTable.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>ID</th>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Category</th>\r\n\t\t\t<th>Price</th>\r\n\t\t\t<th></th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor=\"let p of getProducts()\">\r\n\t\t\t<td>{{p.id}}</td>\r\n\t\t\t<td>{{p.name}}</td>\r\n\t\t\t<td>{{p.category}}</td>\r\n\t\t\t<td>{{p.price | currency:\"USD\":\"symbol\":\"2.2-2\"}}</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-sm btn-warning\"\r\n\t\t\t\t\t[routerLink]=\"['/admin/main/products/edit', p.id]\">Edit</button>\r\n\t\t\t\t<button class=\"btn btn-sm btn-danger\" (click)=\"deleteProduct(p.id)\">\r\n\t\t\t\t\tDelete</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" routerLink=\"/admin/main/products/create\">\r\n\tCreate New Product</button>"

/***/ }),

/***/ "../../../../../src/app/admin/productTable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_repository__ = __webpack_require__("../../../../../src/app/model/product.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductTableComponent = (function () {
    function ProductTableComponent(repository) {
        this.repository = repository;
    }
    ProductTableComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(id);
    };
    ProductTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/productTable.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */]])
    ], ProductTableComponent);
    return ProductTableComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map