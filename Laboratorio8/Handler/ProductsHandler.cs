using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using Laboratorio8.Models;
using System.Configuration;
namespace Laboratorio8.Handler
{
    public class ProductsHandler
    {

        private readonly SqlConnection Conexion;
        private readonly String RutaConexion;
        public ProductsHandler()
        {
            RutaConexion = ConfigurationManager.ConnectionStrings["Lab8"].ToString();
            Conexion = new SqlConnection(RutaConexion);
        }

        public DataTable CrearTablaConsulta(SqlCommand comandoParaConsulta)
        {
            SqlDataAdapter adaptadorParaTabla = new SqlDataAdapter(comandoParaConsulta);
            DataTable consultaFormatoTabla = new DataTable();
            SqlConnection conexionSQL = comandoParaConsulta.Connection;
            conexionSQL.Open();
            adaptadorParaTabla.Fill(consultaFormatoTabla);
            conexionSQL.Close();
            return consultaFormatoTabla;
        }

        public IEnumerable<Products> GetAll()
        {
            String consulta = "SELECT * FROM Products";
            SqlConnection conexionProductos = new SqlConnection(RutaConexion);
            SqlCommand comandoParaConsulta = new SqlCommand(consulta, conexionProductos);
            DataTable tablaConsultada = CrearTablaConsulta(comandoParaConsulta);
            List<Products> listaSinProcesar = new List<Products>();
            foreach (DataRow filaProducto in tablaConsultada.Rows)
            {
                Products productos = new Products();
                productos.Name = Convert.ToString(filaProducto["name"]);
                productos.ID = Convert.ToInt32(filaProducto["id"]);
                productos.Price = Convert.ToInt64(filaProducto["price"]);
                productos.Quantity = Convert.ToInt32(filaProducto["quantity"]);
                listaSinProcesar.Add(productos);
            }
            IEnumerable<Products> productsList = listaSinProcesar as IEnumerable<Products>;
            return productsList;
        }
    }

}