import React from 'react'
import { Button } from 'reactstrap'
class DeletarProduto extends React.Component {

    constructor(props){
        super(props)
        this.deletar = this.deletar.bind(this)
    }
    deletar(){
        var res = window.confirm("Tem certeza que deseja deletar o produto de ID " +this.props.id)
        if (res === true) {
            fetch('http://localhost:5000/api/restaurante/'+this.props.id,{
                method: "DELETE"
            })
            fetch('http://localhost:5000/api/restaurante/',{
                method: "PUT"
            })
            fetch('http://localhost:5000/api/restaurante/'+this.props.id,{
                method:"DELETE"
            })
            alert('Produto deletado')
            window.location.href = 'Produtos' 
        }

        else {

        }

    }
    render(){
        return(
            <Button onClick={this.deletar} style={{marginLeft:"15px"}} className="btn" color="danger" id="deleteProduct">X</Button>
        )
    }


}

export default DeletarProduto