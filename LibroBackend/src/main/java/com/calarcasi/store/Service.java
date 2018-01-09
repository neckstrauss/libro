package com.calarcasi.store;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.calarcasi.store.entities.Categoria;
import com.calarcasi.store.entities.Order;
import com.calarcasi.store.entities.Product;
import com.calarcasi.store.entities.Usuario;
import com.calarcasi.store.pojos.CategoriaPojo;
import com.calarcasi.store.pojos.OrderPojo;
import com.calarcasi.store.pojos.ProductPojo;
import com.calarcasi.store.pojos.UsuarioPojo;
import com.google.api.server.spi.auth.EspAuthenticator;
import com.google.api.server.spi.auth.GoogleOAuth2Authenticator;
//import com.google.appengine.api.users.User;
import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiIssuer;
import com.google.api.server.spi.config.ApiIssuerAudience;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.UnauthorizedException;

/** The Echo API which Endpoints will be exposing. */
// [START echo_api_annotation]
@Api(name = "store", version = "v1", namespace = @ApiNamespace(ownerDomain = "store.calarca.com", ownerName = "store.calarca.com", packagePath = ""),
		// [START_EXCLUDE]
		issuers = {
				@ApiIssuer(name = "firebase", issuer = "https://securetoken.google.com/prueba2-1", jwksUri = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com") }
// [END_EXCLUDE]
)
// [END echo_api_annotation]
public class Service {

	
	
	
	/*
	 * INICIO gestion ordenes
	 */
	
	@ApiMethod(name = "saveOrder", path = "saveOrder", httpMethod = HttpMethod.POST)
	public Order saveOrder(Order order) {
		return new OrderPojo().create(order);
	}
	
	
	@ApiMethod(name = "getOrders", path = "getOrders", httpMethod = HttpMethod.GET, authenticators = {
			GoogleOAuth2Authenticator.class, EspAuthenticator.class }, issuerAudiences = {
					@ApiIssuerAudience(name = "firebase", audiences = { "prueba2-1" }) })
	public List<Order> getOrders(final User user) throws UnauthorizedException {
		if (user == null) {
			throw new UnauthorizedException("Invalid credentials");
		}
		return new OrderPojo().findWithNamedQuery(Order.AllOrders);
	}
	
	@ApiMethod(name = "deleteOrder", path = "deleteOrder/{id}", httpMethod = HttpMethod.DELETE, authenticators = {
			GoogleOAuth2Authenticator.class, EspAuthenticator.class }, issuerAudiences = {
					@ApiIssuerAudience(name = "firebase", audiences = { "prueba2-1" }) })
	public void deleteOrder(final User user, @Named("id") final Long id) throws UnauthorizedException {
		if (user == null) {
			throw new UnauthorizedException("Invalid credentials");
		}
		new OrderPojo().delete(id);
	}

	@ApiMethod(name = "updateOrder", path = "updateOrder", httpMethod = HttpMethod.PUT, authenticators = {
			GoogleOAuth2Authenticator.class, EspAuthenticator.class }, issuerAudiences = {
					@ApiIssuerAudience(name = "firebase", audiences = { "prueba2-1" }) })
	public Order updateOrder(final User user, Order order) throws UnauthorizedException {
		if (user == null) {
			throw new UnauthorizedException("Invalid credentials");
		}
		return new OrderPojo().update(order);
	}	
	
	/*
	 * FIN gestion ordenes
	 */

	/*
	 * INICIO gestion productos
	 */
	@ApiMethod(name = "consultarCategorias", path = "categorias", httpMethod = HttpMethod.GET)
	public List<Categoria> consultarCategorias() throws UnauthorizedException {
		return new CategoriaPojo().findWithNamedQuery(Categoria.AllCategorias);
	}
	
	
	
	@ApiMethod(name = "consultarProducts", path = "products", httpMethod = HttpMethod.GET)
	public List<Product> consultarProducts() throws UnauthorizedException {
		return new ProductPojo().findWithNamedQuery(Product.AllProduct);
	}
	
	@ApiMethod(name = "saveProduct", path = "products", httpMethod = HttpMethod.POST
//			, authenticators = {
//			GoogleOAuth2Authenticator.class, EspAuthenticator.class }, issuerAudiences = {
//					@ApiIssuerAudience(name = "firebase", audiences = { "prueba2-1" }) }
	)
	public Product saveProduct(/*final User user, */Product product) throws UnauthorizedException {
//		if (user == null) {
//			throw new UnauthorizedException("Invalid credentials");
//		}
		
		System.out.println("producto: " + product);
		
		return new ProductPojo().create(product);
	}

	@ApiMethod(name = "deleteProduct", path = "products/{id}", httpMethod = HttpMethod.DELETE
//			, authenticators = {
//			GoogleOAuth2Authenticator.class, EspAuthenticator.class }, issuerAudiences = {
//					@ApiIssuerAudience(name = "firebase", audiences = { "prueba2-1" }) }
	)
	public void deleteProduct(/*final User user,*/ @Named("id") final Long id) throws UnauthorizedException {
//		if (user == null) {
//			throw new UnauthorizedException("Invalid credentials");
//		}
		new ProductPojo().delete(id);
	}

	@ApiMethod(name = "updateProduct", path = "products/{id}", httpMethod = HttpMethod.PUT
//			, authenticators = {
//			GoogleOAuth2Authenticator.class, EspAuthenticator.class }, issuerAudiences = {
//					@ApiIssuerAudience(name = "firebase", audiences = { "prueba2-1" }) }
	)
	public Product updateProduct(/*final User user,*/ Product product) throws UnauthorizedException {
//		if (user == null) {
//			throw new UnauthorizedException("Invalid credentials");
//		}
		System.out.println(product);
		return new ProductPojo().update(product);
	}	
	/*
	 * FIN gestion productos
	 */
	
	
	

	@ApiMethod(name = "authUser", path = "authUser", httpMethod = HttpMethod.POST, authenticators = {
			GoogleOAuth2Authenticator.class,
			EspAuthenticator.class }, audiences = { "prueba2-1" }, clientIds = { "prueba2-1" })
	public Usuario authUser(@Named("email") String email) {
		Map<String, String> parameter = new HashMap<String, String>();
		parameter.put("email", email);
		List<Usuario> users = new UsuarioPojo().findWithNamedQuery(Usuario.UsuarioByEmail, parameter);
		Usuario user = null;
		if (!users.isEmpty()) {
			user = users.get(0);
		}
		return user;
	}
}
