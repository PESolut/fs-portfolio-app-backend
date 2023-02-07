\c messageboard

INSERT INTO users (name, email, password) VALUES 
  ('John Doe', 'johndoe1@example.com', 'password1'),
  ('Jane Doe', 'janedoe2@example.com', 'password2'),
  ('Jim Smith', 'jimsmith3@example.com', 'password3'),
  ('Sara Johnson', 'sarajohnson4@example.com', 'password4'),
  ('Mike Brown', 'mikebrown5@example.com', 'password5'),
  ('Amy Davis', 'amydavis6@example.com', 'password6'),
  ('Ryan Wilson', 'ryanwilson7@example.com', 'password7'),
  ('Alex Jones', 'alexjones8@example.com', 'password8'),
  ('Emma Clark', 'emmaclark9@example.com', 'password9'),
  ('Tommy Davis', 'tommydavis10@example.com', 'password10');

  INSERT INTO messages (message, date, time, user_id) VALUES 
  ('Hello World!', '2022-06-01', '10:00:00', 1),
  ('How are you today?', '2022-06-02', '11:00:00', 2),
  ('I love this app!', '2022-06-03', '12:00:00', 3),
  ('Just testing out the app', '2022-06-04', '13:00:00', 4),
  ('This is my first message', '2022-06-05', '14:00:00', 5);
