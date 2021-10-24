-- Fill users table
INSERT INTO users (name)
VALUES
	('Julius Villamayor'),
	('Cara Pekson'),
	('Steph Curry'),
	('Mickey Mouse');

-- Fill quotes table
INSERT INTO quotes (user_id, quote_value, created)
VALUES
	(1, 70000, NOW()),
	(2, 55000, NOW());
