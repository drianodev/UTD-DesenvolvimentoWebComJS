import React, { Component } from 'react';
import {FaTrash,FaEdit} from 'react-icons/fa';
import {Link} from 'react-router-dom';  
import api from '../../service/api';


export default class Home extends Component{

    
    state = {
        lista: {},
        registros:[],
    };

    componentDidMount = async e =>{

        const response = await api.get(`/customers`); 
        
        response.data.map(res=>{
            const {registros} = this.state;
            
            this.setState({
                registros :[...registros, res],     
            });    
        })

        console.log(this.state.registros);

    }

    deleteCustomer = async (id) =>{


        console.log(id);
        await api.delete(`/customer/${id}`);     

    }

    render(){
        const {registros} = this.state;

        return (    

            <div class="content">
                <h1>Lista de Clientes</h1>
                <table>
                <thead>
                    <tr>
                    <th>Id</th>    
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Endereço</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                        
                    {registros.map(registro=>(
                        <tr>
                        <td data-label="Id" >{registro.id}</td>
                        <td data-label="Nome" >{registro.name}</td>
                        <td data-label="Idade" >{registro.age}</td>
                        <td data-label="Endereco">{registro.address}</td>
                        <td>
                            
                            <Link to={`/edit/${encodeURIComponent(registro.id)}`}><button><FaEdit/></button></Link>
                            <button onClick={()=>this.deleteCustomer(registro.id)}><FaTrash/></button>
                        </td>
                        </tr>
                    ))}
                    
                </tbody>
                </table>
                <Link to='/add'>Cadastrar novo Cliente</Link>
            </div>
            );
    }

}