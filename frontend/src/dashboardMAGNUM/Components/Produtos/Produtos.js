import React from "react"
import { Table, Button,InputGroup,Input } from 'reactstrap'
import ProdutoComponent from "./ProdutoComponent"
import { Link } from "react-router-dom"

class Produtos extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isLoading:true,
            ProdutoData: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/restaurante").then(
            produtos => produtos.json()
            )
        .then(data => {
            this.setState({
                ProdutoData: data,
                isLoading: false
            })
        })
        .catch(err => console.log(err))

    }
    

    render(){
        const produtoComponents = (this.state.ProdutoData && this.state.ProdutoData.length) ? this.state.ProdutoData.map(produto => <ProdutoComponent  key = {produto._id} nome={produto.nome} id = {produto._id} valor= {produto.valor} />) : <h2 style={{textAlign:"center"}}>A lista de catalogos está vazia</h2>;
        const loading = this.state.isLoading ? <h5>Carregando...</h5> : produtoComponents 
        return(
            <div className="concertandobugs">
            <div className="container">
            <h1 style={{color:"black"}}>Produtos</h1>
                <div className="form-group">
                <InputGroup>
                    <Input type="query" name='query' id="query" placeholder="Buscar catalogo"></Input>
                    <Button id="detalhes">Procurar</Button>
                    </InputGroup>
                </div>
                <div className="buttonsProduct">
                    <Button className="btn" color="danger" tag={Link} to='/novoProduto' id="addProduct">Eliminar um Cardapio</Button>
                </div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome Do Estabelecimento</th>
                        <th>Cadastro</th>
                        <th>Vencimento</th>
                        <th>Deletar?</th>
                    </tr>
                </thead>
                <tbody>
                    {loading}
                </tbody>
            </Table>
        
        </div></div>
        )
        }

    }

export default Produtos