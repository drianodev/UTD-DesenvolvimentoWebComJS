import React, {Component} from 'react';
import api from '../../service/api';

export default class AddCustomer extends Component{
    
    state = {
        newCustomer:{
          name:'',
          address:'',
          age:'',
        },
        cad_nome:'',
        cad_endereco:'',
        cad_idade:'',
    };

    handleNomeChange = e =>{
        this.setState({cad_nome: e.target.value});
    };

    handleEnderecoChange = e =>{
      this.setState({cad_endereco: e.target.value});
    };
  
  handleIdadeChange = e =>{
    this.setState({cad_idade: e.target.value});
  };


    handleOnSubmit = async e =>{
      const {cad_nome,cad_endereco,cad_idade,newCustomer} = this.state;  
        e.preventDefault();

        const Customer = {'name':cad_nome,'age':cad_idade,'address':cad_endereco}

        await api.post(`/customer`,Customer)
        .then(console.log(Customer))
        
    }

    render(){

        const {cad_nome,cad_endereco,cad_idade} = this.state;

        return (
            <div class="container" >
            
            <div class="content">      
            
              <div id="cadastro">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>Cadastro</h1> 
                  
                  <p> 
                    <label >Seu nome</label>
                    <input required="required"
                         type="text" 
                         placeholder="Digite seu nome"
                         value={cad_nome}
                         onChange={this.handleNomeChange}/>
                  </p>
                  
                  <p> 
                    <label>Seu endereço</label>
                    <input required="required"
                            type="text"
                            placeholder="Digite seu endereço"
                            value={cad_endereco}
                            onChange={this.handleEnderecoChange}/> 
                  </p>
                  
                  <p> 
                    <label>Sua idade</label>
                    <input required="required"
                            type="text"
                            placeholder="Digite sua idade"
                            value={cad_idade}
                            onChange={this.handleIdadeChange}/>
                  </p>
                  
                  <p> 
                    <input type="submit" value="Cadastrar"/> 
                  </p>
                </form>
              </div>
            </div>
          </div>
          )            

    };

}