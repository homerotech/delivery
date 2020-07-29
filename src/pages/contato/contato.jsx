import React from 'react';

import Header from '../../components/header'

export default (props)=>{
    return(
        <div>
            <Header/>
             <div className="Contato container" style={{color: "green"}}>
            <section class="mb-4">

{/* <!--Section heading--> */}
<h2 class="h1-responsive font-weight-bold text-center my-4">Contacte-nos</h2>
{/* <!--Section description--> */}
<p class="text-center w-responsive mx-auto mb-5">Tem alguma dúvida? Contacte-nos!</p>

<div className="row">

    {/* <!--Grid column--> */}
    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            {/* <!--Grid row--> */}
            <div class="row">

                {/* <!--Grid column--> */}
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="name" class="">Seu nome</label>
                        <input type="text" id="name" name="name" class="form-control"/>
                        
                    </div>
                </div>
                {/* <!--Grid column-->

                <!--Grid column--> */}
                <div class="col-md-6">
                    <div class="md-form mb-0">
                    <label for="email" class="">Seu email</label>
                        <input type="text" id="email" name="email" class="form-control"/>
                        
                    </div>
                </div>
            

            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                    <label for="subject" class="">Assunto</label>
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        
                    </div>
                </div>
            </div>
            
            <div class="row">

             
                <div class="col-md-12">

                    <div class="md-form">
                    <label for="message">Sua mensagem</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                      
                    </div>

                </div>
            </div>
           

        </form>
                <br/>
        <div class="text-center text-md-left">
            <a class="btn btn-success col" style={{color:"#fff"}} onclick="document.getElementById('contact-form').submit();">Enviar</a>
        </div>
        <div class="status"></div>
    </div>
    {/* <!--Grid column-->

    <!--Grid column--> */}
    


</div>

</section>

        </div>
        </div>
    )
}