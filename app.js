// const mysql = require('mysql');

// // Tạo kết nối đến cơ sở dữ liệu MySQL
// const connection = mysql.createConnection({
//   host: 'localhost', // Địa chỉ máy chủ MySQL (thường là localhost)
//   user: 'root',      // Tên người dùng MySQL
//   password: '',      // Mật khẩu MySQL (nếu có)
//   database: 'dtdm_mysql', // Tên cơ sở dữ liệu bạn muốn kết nối
// });

// // Kết nối đến cơ sở dữ liệu
// connection.connect((error) => {
//   if (error) {
//     console.error('Lỗi kết nối đến cơ sở dữ liệu: ' + error.message);
//   } else {
//     console.log('Kết nối đến cơ sở dữ liệu thành công');
//   }
// });

// module.exports = connection;
//   // Thực hiện truy vấn SELECT
//   connection.query('SELECT * FROM test', (err, results) => {
//     if (err) {
//       console.error('Lỗi truy vấn:', err);
//       return;
//     }
    
//     // In kết quả ra màn hình
//     console.log('Kết quả truy vấn:');
//     console.log(results);

//     // Đóng kết nối
//     connection.end((err) => {
//       if (err) {
//         console.error('Lỗi khi đóng kết nối:', err);
//         return;
//       }
//       console.log('Đã đóng kết nối đến cơ sở dữ liệu MySQL');
//     });
//   });



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://root:aptx4869@test.a9quj5f.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const { Client } = require('pg');

// // Tạo kết nối đến cơ sở dữ liệu PostgreSQL
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'aptx4869',
//   port: 5432, // Port mặc định cho PostgreSQL
// });

// // Kết nối đến cơ sở dữ liệu
// client.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL database');
    
//     // Truy vấn SQL để tạo bảng mới
//     const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS my_table (
//         id serial PRIMARY KEY,
//         name VARCHAR(255),
//         age INT
//       )
//     `;

//     // Thực thi truy vấn
//     return client.query(createTableQuery);
//   })
//   .then(() => {
//     console.log('Table created successfully');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   })
//   .finally(() => {
//     // Đóng kết nối sau khi hoàn thành
//     client.end();
//   });

// client.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL database');
    
//     // Truy vấn SQL để chèn dữ liệu
//     const insertDataQuery = `
//       INSERT INTO my_table (name, age)
//       VALUES ($1, $2)
//     `;

//     const values = ['John Doe', 30]; // Thay đổi giá trị tùy theo dữ liệu bạn muốn chèn

//     // Thực thi truy vấn chèn dữ liệu
//     return client.query(insertDataQuery, values);
//   })
//   .then(() => {
//     console.log('Data inserted successfully');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   })
//   .finally(() => {
//     // Đóng kết nối sau khi hoàn thành
//     client.end();
//   });

// const Redis = require('ioredis');

// // Tạo một đối tượng Redis Client và kết nối đến Redis server
// const redis = new Redis({
//   host: 'localhost', // Thay đổi địa chỉ host và cổng theo cài đặt của bạn
//   port: 6379,
// });

// // Để kiểm tra kết nối, bạn có thể thực hiện một số thao tác đơn giản
// redis.set('myKey', 'Hello Redis', (err, result) => {
//   if (err) {
//     console.error('Lỗi khi đặt giá trị:', err);
//     return;
//   }
//   console.log('Giá trị đã đặt:', result);
// });

// // Đọc giá trị từ Redis
// redis.get('myKey', (err, result) => {
//   if (err) {
//     console.error('Lỗi khi đọc giá trị:', err);
//     return;
//   }
//   console.log('Giá trị đọc được từ Redis:', result);
// });

// // Đóng kết nối khi hoàn thành
// redis.quit();
