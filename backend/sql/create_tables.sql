-- Create users table
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
  quote_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  quote_value INT NOT NULL,
  created TIMESTAMP NOT NULL,
  CONSTRAINT fk_user_id
    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
);

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  company_id SERIAL PRIMARY KEY,
  company_name varchar(125) NOT NULL
);

-- Create contracts table
CREATE TABLE IF NOT EXISTS contracts (
  contract_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  company_id INT NOT NULL,
  CONSTRAINT fk_user_id
    FOREIGN KEY(user_id)
    REFERENCES users(user_id),
  CONSTRAINT company_id
    FOREIGN KEY(company_id)
    REFERENCES companies(company_id)
);
