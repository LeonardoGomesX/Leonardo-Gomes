import React from "react";
import {useHistory} from "react-router-dom";
import { Foto, ContainerCriar, ContainerUsuario, PostUsuario, ContainerPost, Comentarios, ComentarioBotao, ContainerBotao, BotaoVoltar } from "./styled";
import like from "../../img/like.png"
import dislike from "../../img/dislike.png"
import comments from "../../img/comments.png"
import { LoginPage, FeedPage } from "../../routes/coordinator";


const PostPage = () => {

    const history = useHistory()

    return(
        <div>

            <ContainerPost>
                <ContainerUsuario>
                    <Foto>Foto</Foto>
                    <Comentarios>Usuario</Comentarios>
                </ContainerUsuario>

                <PostUsuario type="text" placeholder="Postagem"></PostUsuario>

                <ContainerCriar>
                    <ComentarioBotao> <img src={like} alt="like" /> </ComentarioBotao>
                    <ComentarioBotao> <img src={dislike} alt="dislike" /> </ComentarioBotao>
                    <ComentarioBotao onClick={() => FeedPage(history)}> <img src={comments} alt="like" /> </ComentarioBotao>
                </ContainerCriar>
            
            </ContainerPost>
                
            <ContainerBotao>
                <BotaoVoltar onClick={() => LoginPage(history)}> Voltar </BotaoVoltar>
            </ContainerBotao>

        </div>
    )
}

export default PostPage; 