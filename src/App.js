import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import React from 'react';

const data = [
  { id: 1, producto: "Impresora", marca: "Epson", peso: "1.4kg", altura: "130mm", ancho: "410mm", precio: "889.90" },
  { id: 2, producto: "Televisor", marca: "LG", peso: "34.8kg", altura: "27.4cm", ancho: "48.7cm", precio: "1000.00" },
  { id: 3, producto: "Camara web", marca: "Logitech", peso: "0.5kg", altura: "50mm", ancho: "40mm", precio: "150.00" },
  { id: 4, producto: "Calculadora", marca: "Casio", peso: "0.2kg", altura: "70mm", ancho: "50mm", precio: "90.00" },
  { id: 5, producto: "Freidora de aire", marca: "Oster", peso: "5kg", altura: "150mm", ancho: "300mm", precio: "789.90" },
  { id: 6, producto: "Tostadora", marca: "Interlink", peso: "2kg", altura: "100mm", ancho: "200mm", precio: "200.00" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      producto: "",
      marca: "",
      peso: "",
      altura: "",
      acho: "",
      precio: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].producto = dato.producto;
        arreglo[contador].marca = dato.marca;
        arreglo[contador].peso = dato.peso;
        arreglo[contador].altura = dato.altura;
        arreglo[contador].ancho = dato.ancho;
        arreglo[contador].mprecio = dato.precio;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el producto "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Nuevo Producto</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Ancho</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.producto}</td>
                  <td>{dato.marca}</td>
                  <td>{dato.peso}</td>
                  <td>{dato.altura}</td>
                  <td>{dato.ancho}</td>
                  <td>{dato.precio}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.marca}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Peso: 
              </label>
              <input
                className="form-control"
                name="peso"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.peso}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Altura: 
              </label>
              <input
                className="form-control"
                name="altura"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.altura}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ancho: 
              </label>
              <input
                className="form-control"
                name="ancho"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ancho}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Peso: 
              </label>
              <input
                className="form-control"
                name="peso"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Altura: 
              </label>
              <input
                className="form-control"
                name="altura"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ancho: 
              </label>
              <input
                className="form-control"
                name="ancho"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
