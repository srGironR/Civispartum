import React from 'react';
import SideBar from "../Dashboard/Sidebar";
import ForumCard from "../Forum/components/forumcard"
import UsersCard from "../Forum/components/usersCard"
import "../Forum/forum.css"
import ImgP1 from "../pics/image.png"
import ImgP2 from "../pics/imagep2.png"
import ImgP3 from "../pics/imagep3.png"
import axios  from 'axios';
import user from "../pics/user.png";

class Forum extends React.Component {

    state ={
        form:{
            "comentario":"",
            "numeroLikes":0,
            "nombreUser": localStorage.getItem("NombreUsuario")
        },
        error:false,
        errorMes:"",
        comments: []
    }

    handlerSubmit = e =>{
        e.preventDefault();
    }

    handlerOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handlerButton =()=>{
        let url = 'http://localhost:8080/usuario/foro/new';
        axios.post(url, this.state.form)
        .then(response =>{
            if(response.data === "Ok"){
                console.log("ok");
            }else{
                this.setState({
                    error : true,
                    errorMes : response.data
                })
            }
            console.log(response);
        }).catch( error =>{
            console.log(error)
            this.setState({
                error : true,
                errorMes : "Error del servicio"
            })
        })

    }
    
      componentDidMount() {
        axios.get(`http://localhost:8080/usuario/foro/comentarios/ultimo`)
          .then(res => {
            const comments = res.data;
            this.setState({ comments });
          })
      }


    render(){
    return(
    <div className="Forum-container">
        <SideBar/>
        <div className="ForumAll">
        <div className="Forum-title">
            <b>Foro de usuarios de Civispartum</b>
        </div>
        <div className="Forum-cotent">
            <form className="o-form-foro" onSubmit={this.handlerButton}>
                <label className="o-label-mensaje"> Escribe tu mensaje</label>
                <textarea name="comentario" placeholder="Aquí va tu maravilloso mensaje" className ="o-comentario-foro" onChange={this.handlerOnChange}/>
                <div className="Btn-forum">
                <button type="submit" class="btn btn-primary">Publicar algo</button>
                </div>
            </form>

            <div className="form-forum-cont">
                <div className="form-title-lasts">
                    <b>ÚLTIMOS</b>
                    <div className="bar-l"></div>
                </div>

                {this.state.comments.map(comments =>
                <>
                    <ForumCard isrc={user} descript={comments.comentario} timeD={"Escrito por "+comments.nombreUser} />
                    <div className="bar-F"></div>
                </>
                    )}
            </div>
        </div>
        </div>
        <div className="TopUsers">
            <b className="TopUsers-title">Top de usuarios  </b>
            <UsersCard isrc={user} Name="Jacob R" timeU="Desde 2021" Level="Nivel 13" />
            <UsersCard isrc={user} Name="Bella D" timeU="Desde 2021" Level="Nivel: 5" />
            <UsersCard isrc={user} Name="Henry F" timeU="Desde 2021" Level="Nivel 6" />

        </div>
    </div>
    );
    }
}
export default Forum;
