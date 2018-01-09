CREATE TABLE ORDEN (ID BIGINT AUTO_INCREMENT NOT NULL, ADDRESS VARCHAR(255), CITY VARCHAR(255), COUNTRY VARCHAR(255), NAME VARCHAR(255), SHIPPED TINYINT(1) default 0, STATE VARCHAR(255), ZIP VARCHAR(255), CART_PRICE FLOAT, ITEM_COUNT INTEGER, PRIMARY KEY (ID))
CREATE TABLE PRODUCT (ID BIGINT NOT NULL, CATEGORIA VARCHAR(255), DESCRIPTION VARCHAR(255), ESTADO VARCHAR(255), NAME VARCHAR(255), PRICE BIGINT, PRIMARY KEY (ID))
CREATE TABLE CARTLINE (ID BIGINT AUTO_INCREMENT NOT NULL, ESTADO VARCHAR(255), ORDER_ID BIGINT, QUANTITY INTEGER, PRODUCT_ID BIGINT, PRIMARY KEY (ID))
ALTER TABLE CARTLINE ADD CONSTRAINT FK_CARTLINE_PRODUCT_ID FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCT (ID)
ALTER TABLE CARTLINE ADD CONSTRAINT FK_CARTLINE_ORDER_ID FOREIGN KEY (ORDER_ID) REFERENCES ORDEN (ID)