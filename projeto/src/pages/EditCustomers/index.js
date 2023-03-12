import React, {Component}from 'react'
import api from '../../service/api';

export default class EditCustomers extends Component{
    
  state = {
    newCustomer:{
      id:'',
      name:'',
      address:'',
      age:'',
    },
    id:this.props.match.params.id,
    cad_nome:'',
    cad_endereco:'',
    cad_idade:'',
};

  componentDidMount = async e =>{
   
    const response = await api.get(`/customer/${this.state.id}`)
    
    this.setState({
      cad_nome:response.data.name,
      cad_idade:response.data.age,
      cad_endereco:response.data.address,
    })
    
    console.log(response);
  }

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
  const {id,cad_nome,cad_endereco,cad_idade,newCustomer} = this.state;  
    e.preventDefault();

    const Customer = {'id': Number(id),'name':cad_nome,'age':cad_idade,'address':cad_endereco}

    await api.put(`/customer`,Customer)
    .then(console.log(Customer))
    
}

  render(){

        const {id,cad_nome,cad_endereco,cad_idade,newCustomer} = this.state;
        
        return (
            

            <div class="container" >
            
            <div class="content">      
            
              <div id="Alterar Cadastro">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>Alterar Cadastro</h1> 
                  
                  <p> 
                    <label Htmlfor="nome_cad">Id</label>
                    <input id="nome_cad" 
                    name="nome_cad" 
                    type="number"
                    readOnly value={id}/>
                  </p>  
        
                  <p> 
                    <label Htmlfor="nome_cad">Seu nome</label>
                    <input id="nome_cad" 
                      name="nome_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu nome" 
                      value={cad_nome}
                      onChange={this.handleNomeChange}/>
                  </p>
                  
                  <p> 
                    <label Htmlfor="end_cad">Seu endereço</label>
                    <input id="end_cad" 
                      name="end_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu endereço" 
                      value={cad_endereco}
                      onChange={this.handleEnderecoChange}/> 
                  </p>
                  
                  <p> 
                    <label Htmlfor="idade_cad">Sua idade</label>
                    <input id="idade_cad" 
                      name="idade_cad"
                       required="required"
                        type="text"
                         placeholder="Digite sua idade"
                          value={cad_idade}
                          onChange={this.handleIdadeChange}/>
                  </p>
                  
                  <p> 
                    <input type="submit" value="Update"/> 
                  </p>
                </form>
              </div>
            </div>
          </div>
           )
    }
}