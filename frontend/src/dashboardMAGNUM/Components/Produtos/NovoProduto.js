import React from 'react'
import {Form,FormGroup,Label,Input, Button} from 'reactstrap'

class NovoProduto extends React.Component {

    constructor(){
        super()
        this.state= {
            id: null,
            nome: null,
            desc: null,
            ref:null,
            categoria: null,
            valor: 0,
            qtd: null,
            img: null,
            img_link:null
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.cadastrarProduto = this.cadastrarProduto.bind(this);
    }

    componentDidMount(){
        fetch('http://casadaslaceiras.store:5000/api/counter/productid').then(
            res => res.json()
            ).then(
                data => this.setState({
                    id: data+1
                })
            )
            }
 
    cadastrarProduto(){
        const files = this.state.img
        const formData = new FormData()
        formData.append('file',files)
        fetch('http://casadaslaceiras.store:5000/api/upload/'+this.state.id,{
            method:"POST",
            body:formData
        }).then( this.setState({
            img_link: this.state.id+'.png'
        }))
        var data = { 
            _id: this.state.id,
            nome: this.state.nome,
            desc: this.state.desc,
            ref: this.state.ref,
            categoria: this.state.categoria,
            valor: this.state.valor,
            qtd: this.state.qtd,
            img: this.state.img_link,
        }

        data = JSON.stringify(data)
        console.log(data)
        fetch('http://casadaslaceiras.store:5000/api/produto',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:data
        }).then(alert('Produto Cadastro'))
        .catch(err => alert(err))
        window.location.href = "/Produtos";

        fetch('http://casadaslaceiras.store:5000/api/counter/inc/productid',{
        method:"PUT"})

    }
     
    handleFileChange(event){
        const files = event.target.files[0]
        this.setState({
            img: files
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }

    render(){
        console.log(this.state.id)
        return(
            <div className="concertandobugs">
            <div className="container">
                <h1 style={{color: "black"}}>Deletar cardápio</h1>
                <Form id="form">
                    <FormGroup >
                    <Label style={{color:"black"}} for="nomeProduto">id</Label>
                        <Input value={this.state.id} type="text" name="id" id="id" onChange={this.handleChange}/>

                        <Label style={{color:"black"}} for="nomeProduto">Nome do cardápio</Label>
                        <Input value={this.state.nome} type="text" name="nome" id="nomeProduto" onChange={this.handleChange}/>
                        
                       
 
                    </FormGroup>  
                </Form>
                <Button onClick={this.cadastrarProduto}className="btn btn-danger" id="produtoSubmit">Deletar Produto</Button>
            </div>
            </div>
        )
    }
}

export default NovoProduto