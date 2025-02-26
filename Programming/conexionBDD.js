import mssql from 'mssql';
//const sql = require('mssql');

const config = {
  user: 'DESKTOP-ACV9CM2\Admin - Biblioteca',
  password: 'tu_contraseña',
  server: 'localhost',
  database: 'sistemaPOS',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function ejecutarConsulta() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM productos');
    console.log(result.recordset);
  } catch (err) {
    console.error('Ocurrió un error:', err);
  } finally {
    sql.close();  // Cierra la conexión
  }
}

ejecutarConsulta();