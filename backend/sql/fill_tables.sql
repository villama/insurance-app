-- Fill users table
INSERT INTO users (name)
VALUES
	('Julius Villamayor'),
	('Cara Pekson'),
	('Steph Curry'),
	('Mickey Mouse');


-- Fill companies table
INSERT INTO companies (company_name)
VALUES
	('AXA'),
	('Disney'),
	('NBA'),
	('Dunder Mifflin Paper Company, Inc.');

-- Fill quotes table
INSERT INTO quotes (user_id, quote_value, created)
VALUES
	(1, 70500, NOW()),
	(2, 55000, NOW()),
	(4, 69, NOW());

-- Fill contracts table
INSERT INTO contracts (user_id, company_id)
VALUES
	(1, 4),
	(1, 3),
	(2, 2),
	(3, 1),
	(3, 2);
