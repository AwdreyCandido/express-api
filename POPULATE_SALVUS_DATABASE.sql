CREATE DATABASE IF NOT EXISTS products;

USE products;

CREATE TABLE IF NOT EXISTS departments(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS categories(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    category VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price NUMERIC,
    createdAt DATETIME,
    updatedAt DATETIME,
    # EXTRA FIELDS
    categoryId INT,
    departmentId INT,
    quantity INT,
    tags VARCHAR(200),
    # ADD FOREIGN KEYS
    FOREIGN KEY (categoryId) REFERENCES categories(id),
    FOREIGN KEY (departmentId) REFERENCES departments(id)
);

# POPULATE DEPARTMENTS TABLE
INSERT INTO departments (department) VALUES ('Eletrônicos');
INSERT INTO departments (department) VALUES ('Eletrodomésticos');
INSERT INTO departments (department) VALUES ('Livros');
INSERT INTO departments (department) VALUES ('Roupas');
INSERT INTO departments (department) VALUES ('Esportes');

# POPULATE CATEGORIES TABLE
INSERT INTO categories (category) VALUES ('Celulares');
INSERT INTO categories (category) VALUES ('Notebooks');
INSERT INTO categories (category) VALUES ('Cozinha');
INSERT INTO categories (category) VALUES ('Ficção');
INSERT INTO categories (category) VALUES ('Fitness');

# POPULATE PRODUCTS TABLE
INSERT INTO products (name, description, price, createdAt, updatedAt, categoryId, departmentId, quantity, tags) VALUES 
('iPhone 13', 'Último modelo do iPhone 13 da Apple', 799.99, '2024-07-01 10:00:00', '2024-07-01 10:00:00', 1, 1, 50, 'smartphone,apple,iphone'),
('Samsung Galaxy S21', 'Samsung Galaxy S21 com 128GB de armazenamento', 699.99, '2024-07-02 11:00:00', '2024-07-02 11:00:00', 1, 1, 30, 'smartphone,samsung,galaxy'),
('Dell XPS 13', 'Ultrabook Dell XPS 13 com 16GB de RAM', 1199.99, '2024-07-03 12:00:00', '2024-07-03 12:00:00', 2, 1, 20, 'notebook,dell,xps'),
('Instant Pot', 'Panela de pressão elétrica Instant Pot 7 em 1', 99.99, '2024-07-04 13:00:00', '2024-07-04 13:00:00', 3, 2, 100, 'cozinha,panela,instantpot'),
('Harry Potter e a Pedra Filosofal', 'Primeiro livro da série Harry Potter', 19.99, '2024-07-05 14:00:00', '2024-07-05 14:00:00', 4, 3, 200, 'livro,ficcao,harrypotter');

COMMIT;

### QUERIES TO API

SELECT 
	products.id, 
	products.name, 
	products.description, 
	products.price, 
    products.createdAt,
    products.quantity,
    products.tags,
    categories.category,
    departments.department
FROM products 
JOIN departments ON departments.id = products.departmentId 
JOIN categories ON categories.id = products.categoryId 
WHERE products.id = 1